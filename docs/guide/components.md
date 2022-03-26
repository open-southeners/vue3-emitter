::: danger
This is a v2 only part. If you wanna use this make sure you read the [Upgrading](/guide/upgrading.md) section.
:::

# Components <Badge type="tip" text="v2" vertical="middle" />

You can also use component to trigger or handle global events from your Vue component's templates (HTML).

## Listen

```vue
<template>
  <Listen event="my_event" @emitted="myMethod" />
</template>

<script>
import { Listen } from "vue3-emitter"

export default {
  components: {
    Listen,
  },

  methods: {
    myMethod: (payload) {
      console.log({ payload })
    }
  }
}
</script>
```

## Emit

```vue
<template>
  <Emit event="my_event" :payload="{ hello: 'world' }" />
</template>

<script>
import { Emit } from "vue3-emitter"

export default {
  components: {
    Emit,
  }
}
</script>
```
