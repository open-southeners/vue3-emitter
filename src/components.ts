import { Handler } from "mitt";
import { defineComponent, h, onMounted, PropType } from "vue";
import { emitter, Events } from ".";

export const Emit = defineComponent({
  props: {
    event: {
      type: String, // as PropType<Key | string>,
      required: true
    },

    payload: {}
  },

  setup({ event, payload }) {
    emitter.emit(event, payload);
  },

  render: () => h('template')
})

export const Listen = defineComponent({
  emits: ['emitted'],

  props: {
    event: {
      type: String, // as PropType<Key | string>,
      required: true
    }
  },

  setup({ event }, { emit }) {
    emitter.listen(event, payload => emit('emitted', payload));
  },

  render: () => h('template')
})