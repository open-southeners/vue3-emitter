import { onMounted, onBeforeUnmount } from "vue"
import mitt, { Emitter, EventType, Handler } from "mitt"

export interface Events extends Record<EventType, unknown> {}

const emitter: Emitter<Events> = mitt<Events>()

const subscribe = <Key extends keyof Events>(
  type: Key,
  handler: Handler<Events[Key]>
) => {
  emitter.on(type, handler)

  return (handler?: Handler<Events[Key]>) => emitter.off(type, handler)
}

declare type HandlerObject = {
  on: Handler<Events[keyof Events]>
  off?: Handler<Events[keyof Events]>
}

const listen = <Key extends keyof Events>(
  type: Key,
  handler: Handler<Events[Key]> | HandlerObject
) => {
  let subscription: (handler?: Handler<Events[Key]>) => void

  if (typeof handler === "object") {
    onMounted(() => (subscription = subscribe(type, handler.on)))
    onBeforeUnmount(() => subscription(handler.off))
  } else {
    onMounted(() => (subscription = subscribe(type, handler)))
    onBeforeUnmount(() => subscription())
  }
}

export default {
  ...emitter,
  subscribe,
  listen
}
