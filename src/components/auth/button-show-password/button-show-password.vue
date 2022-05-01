<template>
  <div>
    <img
      v-if="fieldType === 'password'"
      class="sign-up__container-field-password-control"
      src="@/assets/noun-view.svg"
      alt="show/hide password"
      @click="changePassType"
    >
    <img
      v-else
      class="sign-up__container-field-password-control"
      src="@/assets/noun-blind.svg"
      alt="show/hide password"
      @click="changePassType"
    >
  </div>
</template>

<script>

export default ({
  name: 'ButtonShowPassword',
  props: {
    fieldType: {
      type: String,
      default: 'text',
    },
  },
  setup(props, { emit }) {
    function changePassType() {
      emit('onClickImg')
    }

    return {
      changePassType,
    }
  },
})
</script>

<style scoped>
  @import "button-show-password";
</style>
