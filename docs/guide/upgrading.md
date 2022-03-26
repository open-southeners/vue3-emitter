::: tip
Don't forget to run `yarn add vue3-emitter` to upgrade the package after you follow this guide.
:::

# Upgrading

This guide will help you upgrade from older versions (if there's any possible problems).

## From v1

### Default exports changed

Now there is no default export, please check README installation part.

#### Before

```js
import emitter from 'vue3-emitter'
```

#### After

```js
import { emitter } from 'vue3-emitter'
```
