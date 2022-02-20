import { tryOnMounted, tryOnBeforeUnmount } from "@vueuse/core"
import mitt, { Emitter, EventType, Handler } from "mitt"

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Events extends Record<EventType, unknown> {}

const emit: Emitter<Events> = mitt<Events>()

function subscribe<Key extends keyof Events>(
  type: Key,
  handler: Handler<Events[Key]>
) {
  emit.on(type, handler)

  return (handler?: Handler<Events[Key]>) => emit.off(type, handler)
}

declare type HandlerObject = {
  on: Handler<Events[keyof Events]>
  off?: Handler<Events[keyof Events]>
}

function listen<Key extends keyof Events>(
  type: Key,
  handler: Handler<Events[Key]> | HandlerObject
) {
  let subscription: (handler?: Handler<Events[Key]>) => void

  if (typeof handler === "object") {
    tryOnMounted(() => (subscription = subscribe(type, handler.on)))
    tryOnBeforeUnmount(() => subscription(handler.off))
  } else {
    tryOnMounted(() => (subscription = subscribe(type, handler)))
    tryOnBeforeUnmount(() => subscription(handler))
  }
}

export { Listen, Emit } from "./components"

export const emitter = Object.assign({}, emit, { subscribe, listen })
