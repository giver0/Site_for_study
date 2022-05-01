<template>
  <div class="sign-up__container-field">
    <div class="sign-up__container-field-title">
      {{ fieldName }}
    </div>
    <div class="sign-up__container-field-input-box">
      <input
        v-model="inputValue"
        :type="fieldType"
        class="sign-up__container-field-input"
        @input="$emit('onInput')"
      >
      <button-show-password
        v-if="fieldName === 'Password'"
        :field-type="fieldType"
        @onClickImg="emitEvent"
      />
    </div>
    <div class="sign-up__container-field-error">
      {{ fieldObject.errors.join(', ') }}
    </div>
    <!-- @click="switchVisibility" -->
  </div>
</template>

<script>
import buttonShowPassword from '../button-show-password'
import { computed } from 'vue'

export default {
  name: 'AuthField',
  components: {
    buttonShowPassword,
  },
  props: {
    fieldName: {
      type: String,
      required: true,
    },
    fieldType: {
      type: String,
      default: 'text',
    },
    fieldObject: {
      type: Object,
      required: true,
    },
  },
  setup(props, { emit }) {
    function emitEvent() {
      emit('onClickImg')
    }

    const inputValue = computed({
      set(value) {
        emit('update:fieldObject', { ...props.fieldObject, value })
      },
      get() {
        return props.fieldObject.value
      },
    })

    return {
      emitEvent,
      inputValue,
    }
  },
}
</script>

<style>
  @import "auth-field";
</style>
