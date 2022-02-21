import { enableAutoUnmount, mount } from "@vue/test-utils"
import { nextTick } from "vue"
import { emitter, Emit, Listen } from ".."

enableAutoUnmount(afterEach)

test('Emit component emits a global event', () => {
  let payloadResult = {}

  emitter.on('test', payload => (payloadResult = payload))

  mount(Emit, {
    props: {
      event: 'test',
      payload: 'hello world'
    }
  })

  expect(payloadResult).toBe('hello world')

  emitter.off('test')
})

test('Listen component listens a global event and returns back a local emit', () => {
  const wrapper = mount(Listen, {
    props: {
      event: 'test'
    }
  })

  emitter.emit('test', 'hello world')
  
  expect(emitter.all.get('test')).not.toEqual([])
  
  expect(wrapper.emitted('emitted')).toEqual([['hello world']])

  wrapper.unmount()

  nextTick(() => {
    expect(emitter.all.get('test')).toEqual([])
  })
})
