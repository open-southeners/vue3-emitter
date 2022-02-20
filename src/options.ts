import { Handler } from "mitt";
import { ComponentPublicInstance, defineComponent } from "vue";
import emitter, { Events } from ".";

interface EmitterComponentOptions<Key extends keyof Events> extends Record<string | symbol, unknown> {
  globalListen: Record<Key, Handler<Events[Key]>>
  globalEmits: Record<Key, Events[Key]>
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type EmitterComponent = ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, EmitterComponentOptions<keyof Events>>

declare module '@vue/runtime-core' {
  interface PropsOptions<Key extends keyof Events> {
    globalListen: Record<Key, Handler<Events[Key]>>
    globalEmits: Record<Key, Events[Key]>
  }
}

// defineComponent({
  
// })

export const emitterPlugin = {
  install(app: EmitterComponent) {
    if ("globalEmits" in app.$options) {
      for (const [event, payload] of Object.entries(app.$options.globalEmits)) {
        emitter.emit(event, payload)
      }
    }

    if ("globalListen" in app.$options) {
      for (const [event, handler] of Object.entries(app.$options.globalListen)) {
        // app.$options.
        emitter.on(event, handler)
      }
    }
  }
}