---
description: Install and get started with the library on your Vue 3 app
cover: .gitbook/assets/hero.png
coverY: 0
layout:
  cover:
    visible: true
    size: hero
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Getting started

{% hint style="info" %}
More usage in details at [Using the library](https://github.com/open-southeners/docs.opensoutheners.com/blob/main/guide/usage.md), otherwise check the official documentation of mitt here: [https://github.com/developit/mitt/#api](https://github.com/developit/mitt/#api)
{% endhint %}

Install with the following command:

```sh
yarn add vue3-emitter
# or
npm i vue3-emitter
```

And for a basic usage of this library you can do the following example:

```js
import { emitter } from "vue3-emitter"

emitter.on("my_event", (payload) => console.log({ payload }))

emitter.emit("my_event", { hello: "world" })
```
