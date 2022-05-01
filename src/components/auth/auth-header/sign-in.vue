<template>
  <div>
    <!--Header-->
    <auth-header />
    <!--SIGN-IN_FORM-->
    <div class="sign-in__form">
      <div class="sign-in__form-title">
        <div>Sign in</div>
      </div>
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
        @click="switchVisibility"
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
            class="sign-up__container-field-button"
            @click="buttonSignUp"
          >
            Sign up
          </button>
        </div>
        <div class="sign-up__field">
          Don`t have an account?&nbsp;
          <router-link to="/sign-up">
            Sign up
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthHeader from '../auth-header'
import AuthField from '../auth-field'
  
const signIn = {
  name: 'SignIn',
  components: {
    AuthHeader,
    AuthField,
  },
  data() {
    return {
      email: {
        value: '',
        errors: [],
        errorName: 'email',
        validate: this.onValidateEmail,
      },
      password: {
        value: '',
        errors: [],
        errorName: 'password',
        validate: this.onValidatePassword,
        confirmObj: {},
        fieldType: 'password',
        isShow: false,
      },
      buttonVisibility: {
        shown: 'noun-view.svg',
        notShown: 'noun-blind.svg',
      },
      // buttonPasswordVisibility: "@/assets/noun-view.svg"
      // inputObjects: [this.firstName, this.lastName, this.email, this.password, this.confirmPassword],

    }
  },
  methods: {
    onValidateEmail() {
      this.email.errors = []
      this.validateInputFieldNotEmpty(this.email)
      this.validateIfEmailCorrect(this.email)
    },
    onValidatePassword() {
      this.password.errors = []
      this.validateInputFieldNotEmpty(this.password)
    },
    validateInputField(inputObject) {
      inputObject.errors = []
      inputObject.validators.forEach(validator => validator(inputObject))
    },
    validateInputFieldNotEmpty(inputObject) {
      if (inputObject.value === '') {
        const message = `You need to enter a ${inputObject.errorName}`
        inputObject.errors.push(message)
      }
    },
    validateIfEmailCorrect(inputObject) {
      if (inputObject.value != '') {
        const regexIsEmailCorrect = /\S+@\S+\.\S+/
        const isEmailCorrect = regexIsEmailCorrect.test(inputObject.value)
        console.log(isEmailCorrect)
        if (!isEmailCorrect) {
          inputObject.errors.push('Email is invalid')
        }
      }
    },
    buttonSignUp() {
      const inputObjects = [this.email, this.password]
      console.log('Click')
      for (const input of inputObjects) {
        input.validate()
      }
      if (!this.hasInputFieldsErrors(inputObjects)) {
        alert('Sign-in successful')
      } else {
        alert('Errors')
      }
    },
    hasInputFieldsErrors(inputObjects) {
      return inputObjects
        .map(inputObject => inputObject.errors)
        .some(errors => errors.length > 0)
    },
    switchVisibility() {
      console.log('Switch visibility password')
      this.password.isShow = ! this.password.isShow
      if (this.password.isShow === true) {
        this.password.fieldType = 'text'
        // imageShowPassword.src = "../media-items/noun-blind-4299218.svg"
      } else {
        this.password.fieldType = 'password'
        // imageShowPassword.src = "../media-items/noun-view-31584972.svg"
      }
    },
  },
}

export default signIn

</script>

<style>
@import "sign-in";
</style>