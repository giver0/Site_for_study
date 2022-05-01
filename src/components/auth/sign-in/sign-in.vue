<template>
  <div>
    <!--Header-->
    <AuthHeader />
    <!-- <HeaderLine /> -->

    <!--SIGN-IN_FORM-->
    <div class="sign-in__form">
      <div class="sign-in__form-title">
        <div>Sign in</div>
      </div>
      <AuthField
        v-model:fieldObject="email"
        field-name="Email"
        @onInput="email.validate"
      />
      <AuthField
        v-model:fieldObject="password"
        :field-type="password.fieldType"
        field-name="Password"
        @onInput="password.validate"
        @onClickImg="switchVisibility"
      />
      <div>
        <a
          href="https://www.figma.com/file/1tEfPEgiDIT8y0HeM3RlpR/Datrics-App?node-id=3391%3A462"
          class="sign-in__form-container-reset"
        >
          Forgot password?
        </a>
      </div>
      <div class="sign-in__form-container-auth">
        <div class="sign-in__form-container-auth-button">
          <button
            class="sign-in__container-field-button"
            @click="handleSignIn"
          >
            Sign in
          </button>
        </div>
        <div class="sign-up__field">
          Don`t have an account?&nbsp;
          <router-link :to="{name: 'SignUp'}">
            Sign up
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ROUTE_DASHBOARD } from '@/router/constants'

import AuthHeader from '../auth-header'
import AuthField from '../auth-field'

import useAuth from '../../../store/use/useAuth'

export default {
  name: 'SignIn',
  components: {
    AuthHeader,
    AuthField,
  },
  setup() {
    const router = useRouter()
    const email = ref({
      value: 'henprokuror@gmail.com',
      errors: [],
      errorName: 'email',
      validate: null,
    })
    const password = ref({
      value: '12345',
      errors: [],
      errorName: 'password',
      confirmObj: {},
      fieldType: 'password',
      validate: null,
    })
    const { signIn } = useAuth()

    function validateInputFieldNotEmpty(inputObject) {
      if (inputObject.value === '') {
        const message = `You need to enter a ${inputObject.errorName}`
        inputObject.errors.push(message)
      }
    }

    function validateIfEmailCorrect(inputObject) {
      if (inputObject.value !== '') {
        const regexIsEmailCorrect = /\S+@\S+\.\S+/
        const isEmailCorrect = regexIsEmailCorrect.test(inputObject.value)
        if (!isEmailCorrect) {
          inputObject.errors.push('Email is invalid')
        }
      }
    }

    function onValidateEmail() {
      email.value.errors = []
      validateInputFieldNotEmpty(email.value)
      validateIfEmailCorrect(email.value)
    }
    function onValidatePassword() {
      password.value.errors = []
      validateInputFieldNotEmpty(password.value)
    }
    email.value.validate = onValidateEmail
    password.value.validate = onValidatePassword

    function hasInputFieldsErrors(inputObjects) {
      return inputObjects
        .map(inputObject => inputObject.errors)
        .some(errors => errors.length > 0)
    }

    async function handleSignIn() {
      const inputObjects = [email.value, password.value]
      for (const input of inputObjects) {
        input.validate()
      }
      if (!hasInputFieldsErrors(inputObjects)) {
        try {
          await signIn({
            email: email.value.value,
            password: password.value.value,
          })
          router.push(ROUTE_DASHBOARD)
        } catch (err) {
          console.error(err)
        }
      } else {
        alert('Errors')
      }
    }

    function switchVisibility() {
      password.value.fieldType = password.value.fieldType === 'text' ? 'password' : 'text'
    }

    return {
      email,
      password,
      handleSignIn,
      switchVisibility,
    }
  },
}

</script>

<style scoped>
@import "sign-in";
</style>
