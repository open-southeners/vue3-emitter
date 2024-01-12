---
description: >-
  This guide will help you upgrade from older versions (if there are any
  problems with previous code).
---

# Upgrade guide

## From v1

#### Default exports changed

Now there is no default export, please check README installation part.

**Before**

```js
import emitter from 'vue3-emitter'
```

**After**

```js
import { emitter } from 'vue3-emitter'
```
