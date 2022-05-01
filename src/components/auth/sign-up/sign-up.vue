<template>
  <div>
    <auth-header />
    <!-- <tabs /> -->
    <div class="sign-up__layout">
      <!--Description-->
      <auth-description />

      <!--Sign-up__form-->
      <div class="sign-up__container">
        <!--Title-->
        <div class="sign-up__container-title">
          Sign up
        </div>

        <auth-field
          v-model:fieldObject="firstName"
          field-name="First Name"
          @onInput="firstName.validate"
        />

        <auth-field
          v-model:fieldObject="lastName"
          field-name="Last Name"
          @onInput="lastName.validate"
        />

        <auth-field
          v-model:fieldObject="email"
          field-name="Email"
          @onInput="email.validate"
        />

        <auth-field
          v-model:fieldObject="password"
          :field-type="password.fieldType"
          field-name="Password"
          @onInput="password.validate"
          @onClickImg="switchVisibility"
        />

        <auth-field
          v-model:fieldObject="confirmPassword"
          :field-type="password.fieldType"
          field-name="Confirm Password"
          @onInput="confirmPassword.validate"
        />
               
        <!--Checkbox-->
        <div class="sign-up__container-field-checkbox">
          <input
            class="sign-up__container-field-checkbox-input"
            type="checkbox"
          >
          <div class="sign-up__container-field-checkbox-text">
            Get emails from Datrics about product updates and news
          </div>
        </div>
        <!--redbutton-->
        <div class="sign-up__container-field">
          <button
            class="sign-up__container-field-button"
            @click="buttonSignUp"
          >
            Sign up
          </button>
        </div>
        <!--Sign_in-->
        <div class="sign-in__field">
          Already have an account?
          <router-link :to="{name: 'SignIn'}">
            Sign in
          </router-link>
        </div>
        <!--Terms-->
        <div class="terms__field">
          <a
            href="https://ic.pics.livejournal.com/tragemata/25155229/1311537/1311537_original.jpg"
            style="text-decoration:none"
          >
            You agree to our Privacy Policy and Terms and Conditions
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthField from '../auth-field'
import AuthHeader from '../auth-header'
import AuthDescription from '../auth-description'
import buttonShowPassword from '../button-show-password'

import { ref, onMounted } from 'vue'

const signUp = {
  name: 'SignUp',
  components: {
    AuthField,
    AuthHeader,
    AuthDescription,
    buttonShowPassword,
  },
  setup() {
    const firstName = ref({
      value: '',
      errors: [],
      errorName: 'Name',
      validate: onValidateFirstName,
    })

    const lastName = ref({
      value: '',
      errors: [],
      errorName: 'Last Name',
      validate: onValidateLastName,
    })

    const email = ref({
      value: '',
      errors: [],
      errorName: 'email',
      validate: onValidateEmail,
    })

    const password = ref({
      value: '',
      errors: [],
      errorName: 'password',
      validate: onValidatePassword,
      confirmObj: {},
      fieldType: 'password',

    })

    const confirmPassword = ref({
      value: '',
      errors: [],
      errorName: 'confirm password',
      validate: onValidateConfirmPassword,
      confirmObj: {},
    })

    onMounted(() => {

    })

    function onValidateFirstName() {
      firstName.value.errors = []
      validateInputFieldNotEmpty(firstName.value)
      validateIsNameCorrect(firstName.value)
    }

    function onValidateLastName() {
      lastName.value.errors = []
      validateInputFieldNotEmpty(lastName.value)
      validateIsNameCorrect(lastName.value)
    }

    function onValidateEmail() {
      email.value.errors = []
      validateInputFieldNotEmpty(email.value)
      validateIfEmailCorrect(email.value)
    }

    function onValidatePassword() {
      password.value.errors = []
      password.value.confirmObj = confirmPassword.value
      validateInputFieldNotEmpty(password.value)
      passwordLength(password.value)
      containNumbersAndChars(password.value)
      checkPasswordMuch(password.value)
    }

    function onValidateConfirmPassword() {
      confirmPassword.value.errors = []
      confirmPassword.value.confirmObj = password.value
      validateInputFieldNotEmpty(confirmPassword.value)
      checkPasswordMuch(confirmPassword.value)
    }

    function validateInputFieldNotEmpty(inputObject) {
      if (inputObject.value === '') {
        const message = `You need to enter a ${inputObject.errorName}`
        inputObject.errors.push(message)
      }
    }

    function validateIsNameCorrect(inputObject) {
      if (inputObject.value !== '') {
        const regexIsNameCorrect = /^[A-Za-z\s]+$/
        const isNameCorrect = regexIsNameCorrect.test(inputObject.value)
        console.log('isNameCorrect: ', isNameCorrect)
        if (isNameCorrect === false) {
          inputObject.errors.push('Must contain only english letters')
        }
      }
    }

    function validateIfEmailCorrect(inputObject) {
      if (inputObject.value !== '') {
        const regexIsEmailCorrect = /\S+@\S+\.\S+/
        const isEmailCorrect = regexIsEmailCorrect.test(inputObject.value)
        console.log('isEmailCorrect: ', isEmailCorrect)
        if (!isEmailCorrect) {
          inputObject.errors.push('Email is invalid')
        }
      }
    }

    function passwordLength(inputObject) {
      if (inputObject.value.length < 8) {
        inputObject.errors.push('Password must contain at least 8 characters')
      }
    }

    function containNumbersAndChars(inputObject) {
      const regexIsHaveCharsAndNumbers = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
      const isHaveCharsAndNumbers = regexIsHaveCharsAndNumbers.test(inputObject.value)
      if (!isHaveCharsAndNumbers) {
        inputObject.errors.push('Must contain number, latin letter and char')
      }
    }

    function checkPasswordMuch(inputObject) {
      if (inputObject.value === inputObject.confirmObj.value) {
        deleteFromConfirmPassword(inputObject.confirmObj)
      } else {
        inputObject.errors.push('Password mismatch')
        if (!isMismatchExist(inputObject.confirmObj)) {
          inputObject.confirmObj.errors.push('Password mismatch')
        }
      }
    }

    function isMismatchExist(inputObjectConfirm) {
      let mismatchExist = false
      for (const error of inputObjectConfirm.errors) {
        if (error === 'Password mismatch') {
          mismatchExist = true
        }
      }
      return mismatchExist
    }

    function deleteFromConfirmPassword(inputObjectConfirm) {
      for (let i = 0; i < inputObjectConfirm.errors.length; i++) {
        if (inputObjectConfirm.errors[i] === 'Password mismatch') {
          inputObjectConfirm.errors.splice(i, 1)
        }
      }
    }

    function buttonSignUp() {
      const inputObjects = [
        firstName.value,
        lastName.value,
        email.value,
        password.value,
        confirmPassword.value,
      ]
      console.log('Click')
      for (const input of inputObjects) {
        input.validate()
      }
      if (!hasInputFieldsErrors(inputObjects)) {
        alert('Registration successful')
      } else {
        alert('Errors')
      }
    }

    function hasInputFieldsErrors(inputObjects) {
      return inputObjects
        .map(inputObject => inputObject.errors)
        .some(errors => errors.length > 0)
    }

    function switchVisibility() {
      password.value.fieldType = password.value.fieldType === 'text' ? 'password' : 'text'
    }

    return {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      buttonSignUp,
      switchVisibility,
    }
  },
}

export default signUp
</script>

<style>
  @import "sign-up";
</style>
