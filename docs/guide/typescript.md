# TypeScript

This library is fully using TypeScript and it exports types for everything. So your project can take advantage of the library if you're using TypeScript as well.

## Setup

The setup changes a little bit, add this on top of your application (**your main file**):

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