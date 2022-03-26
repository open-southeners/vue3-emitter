# Using the library

There are multiple ways to use vue3-emitter on your project, you can choose the one you prefer at any time.

Remember, these are the methods added to this library, for the rest you should check [mitt official documentation](https://github.com/developit/mitt/#api).

## subscribe

Subscribe to an event returns a function to unsubscribe that handler/listener to that same event.

```vue
<template>
  <!-- Your template here... -->
</template>

<script>
import { emitter } from "vue3-emitter"

export default {
  data() {
    return {
      subscription: null,
    }
  },

  mounted() {
    this.subscription = emitter.subscribe("my_event", (payload) => {
      console.log({ payload })
    })
  },

  beforeUnmount() {
    if (this.subscription) {
      // This will unsubscribe before the component is being removed from the VDOM...
      this.subscription()
    }
  }
}
</script>
```

## listen

Listen does the same as subscribe but does handle the component lifecycle by its own, whenever the component is being removed by Vue the global event subscription will be removed.

**Remember this is important for prevent memory leaks from your application.**

```vue
<template>
  <!-- Your template here... -->
</template>

<script>
import { emitter } from "vue3-emitter"

export default {
  setup() {
    emitter.listen("my_event", (payload) => {
      console.log({ payload })
    })
  }
}
</script>
```

## Components

**We've components!** But this is only available in versión 2: [Check them our here](/guide/components.md).
