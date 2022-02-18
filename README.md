# Vue 3 Emitter

vue3-emitter is a mitt wrapper into Vue 3 for global typed events.

## Getting started

Install the package locally with:

```sh
npm i vue3-emitter
# or
yarn add vue3-emitter
```

And then use it in your Vue app like this:

```js
import emitter from 'vue3-emitter'

emitter.listen('test_event', payload => console.log({ payload }))
```

In other file:

```js
import emitter from 'vue3-emitter'

emitter.emit('test_event', { foo: 'bar' })
```

### TypeScript

This package is fully written in TypeScript, so you can benefit from extending its events types like so:

```ts
const POST_PICTURE_EVENT = 'picture.post.event'

interface PostPicturePayload {
  image: {
    url: string
    description?: string
  }
  user_id: number
}

declare module 'vue3-emitter' {
  interface Events {
    [POST_PICTURE_EVENT]: PostPicturePayload
  }
}
```

**Note: We recommend that this piece should be centralised like in the entrypoint of your app.**

## Usage

Check [mitt documentation](https://github.com/developit/mitt/#api) for all the rest methods (not covered here).

### subscribe

This works without needing Vue lifecycle events (being inside a vue instance), so it can be outside your component's setup.

```ts
const postPictureEvent = emitter.subscribe(POST_PICTURE_EVENT, (payload) => {
  // Do whatever you like here
})

// Later on whenever you want to unsubscribe from the event
postPictureEvent()
```

### listen

This one is like subscribe but it uses Vue component lifecycle, so better stay inside a setup function as **it removes automatically the event subscription when the parent component instance is being destroyed.**

```ts
setup() {
  emitter.listen(POST_PICTURE_EVENT, (payload) => {
    // Do whatever you like here
  })
}
```