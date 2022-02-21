import { mount, enableAutoUnmount } from '@vue/test-utils'
import { defineComponent, nextTick, PropType, ref } from 'vue'
import { emitter } from '..'

const POST_PICTURE_EVENT = 'picture.post.event'

interface ImageObj {
  url: string
  description?: string
}

interface PostPicturePayload {
  image: ImageObj
}

declare module '..' {
  interface Events {
    [POST_PICTURE_EVENT]: PostPicturePayload
  }
}

const ListenComponent = defineComponent({
  template: '<p>{{content}}</p>',
  
  props: {
    currentImage: Object as PropType<ImageObj>
  },

  setup(props) {
    const content = ref(props.currentImage.description)

    function evHandlerOne(payload) {
      content.value = payload.image.description
    }

    emitter.listen(POST_PICTURE_EVENT, evHandlerOne)

    return { content }
  },
})

const SecondListenComponent = defineComponent({
  template: '<p>{{content}}</p>',

  setup() {
    const content = ref('example')

    function evHandlerTwo(payload) {
      content.value = payload.image.description + 'ha'
    }

    emitter.listen(POST_PICTURE_EVENT, evHandlerTwo)

    return { content }
  },
})

enableAutoUnmount(afterEach)

test('displays message (example component works)', () => {
  const wrapper = mount(ListenComponent, {
    props: {
      currentImage: {
        url: "foobar",
        description: "hello world!"
      } 
    }
  })

  expect(emitter.all.get(POST_PICTURE_EVENT)).not.toEqual([])

  expect(wrapper.text()).toContain('hello world!')
})

test('unsubscribes from events once parent component unmounted', async () => {
  expect(emitter.all.get(POST_PICTURE_EVENT)).toEqual([])
  const wrapper = mount(ListenComponent, {
    props: {
      currentImage: {
        url: "foobar",
        description: "hello world!"
      } 
    }
  })

  expect(emitter.all.get(POST_PICTURE_EVENT)).not.toEqual([])

  wrapper.unmount()

  await nextTick()

  expect(emitter.all.get(POST_PICTURE_EVENT)).toEqual([])
})

test('unsubscribes from events once parent component unmounted but maintaining other component listeners', async () => {
  const wrapper = mount(ListenComponent, {
    props: {
      currentImage: {
        url: "foobar",
        description: "hello world!"
      } 
    }
  })

  mount(SecondListenComponent)

  expect(emitter.all.get(POST_PICTURE_EVENT)).not.toEqual([])
  
  wrapper.unmount()
  
  await nextTick()

  expect(emitter.all.get(POST_PICTURE_EVENT).length).toEqual(1)
})

test('changes message when event received', () => {
  const wrapper = mount(ListenComponent, {
    props: {
      currentImage: {
        url: "foobar",
        description: "hello world!"
      } 
    }
  })

  emitter.emit(POST_PICTURE_EVENT, {
    image: { url: 'newurl', description: 'new description' }
  })

  nextTick(() => {
    expect(emitter.all.get(POST_PICTURE_EVENT)).not.toEqual([])

    expect(wrapper.text()).toContain('new description')
  })
})
