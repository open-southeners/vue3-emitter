# Vue 3 Emitter

vue3-emitter is a mitt wrapper into Vue 3 for global typed events.

[![Test](https://github.com/open-southeners/vue3-emitter/actions/workflows/test.yml/badge.svg)](https://github.com/open-southeners/vue3-emitter/actions/workflows/test.yml) [![Codacy Badge](https://app.codacy.com/project/badge/Coverage/c8949d9579694b9da52b5458246b0318)](https://www.codacy.com/gh/open-southeners/vue3-emitter/dashboard?utm_source=github.com&utm_medium=referral&utm_content=open-southeners/vue3-emitter&utm_campaign=Badge_Coverage) [![Codacy Badge](https://app.codacy.com/project/badge/Grade/c8949d9579694b9da52b5458246b0318)](https://www.codacy.com/gh/open-southeners/vue3-emitter/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=open-southeners/vue3-emitter&amp;utm_campaign=Badge_Grade) [![NPM Downloads](https://img.shields.io/npm/dm/vue3-emitter)](https://www.npmjs.com/package/vue3-emitter) [![NPM Size](https://img.shields.io/bundlephobia/min/vue3-emitter)](https://www.npmjs.com/package/vue3-emitter)  [![NPM Version](https://img.shields.io/npm/v/vue3-emitter)](https://www.npmjs.com/package/vue3-emitter)

## Getting started

Install the package locally with:

```sh
npm i vue3-emitter
# or
yarn add vue3-emitter
```

And then use it in your Vue app like this:

```js
import { emitter } from 'vue3-emitter'

emitter.listen('test_event', payload => console.log({ payload }))
```

In other file:

```js
import { emitter } from 'vue3-emitter'

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
