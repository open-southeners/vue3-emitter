::: tip
More usage in details at [Using the library](/guide/usage.md), otherwise check the official documentation of mitt here: [https://github.com/developit/mitt/#api](https://github.com/developit/mitt/#api)
:::

# Introduction

Install with the following command:

```sh
yarn add vue3-emitter
# or
npm i vue3-emitter
```

## Getting started

And for a basic usage of this library you can do the following example:

```js
import { emitter } from "vue3-emitter"

emitter.on("my_event", (payload) => console.log({ payload }))

emitter.emit("my_event", { hello: "world" })
```

