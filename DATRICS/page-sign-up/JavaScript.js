
const inputFirstName = document.getElementById('input-first-name')
const inputLastName = document.getElementById('input-last-name')
const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const inputConfirmPassword = document.getElementById('input-confirm-password')
const button = document.getElementById('button-sign-up')

const activeButtonColor = '#CC3D39'
const disabledButtonColor = 'black'

button.style.background = disabledButtonColor

inputFirstName.addEventListener('input', function(event) {
    if (event.target.value === '') {
        button.style.background = disabledButtonColor
        button.onclick = function () {
            console.log('НЕОБХІДНО ВВЕСТИ ІМЯ')
        }
    } else {
        button.style.background = activeButtonColor
    }
    console.log(event.target.value)
})

inputLastName.addEventListener('input', function(event) {
    if (event.target.value === '') {
        button.style.background = disabledButtonColor
        button.onclick = function () {
            console.log('НЕОБХІДНО ВВЕСТИ ПРІЗВИЩЕ')
        }
    } else {
        button.style.background = activeButtonColor
    }
    console.log(event.target.value)
})

inputEmail.addEventListener('input', function(event) {
    if (event.target.value === '') {
        button.style.background = disabledButtonColor
        button.onclick = function () {
            console.log('НЕОБХІДНО ВВЕСТИ EMAIL')
        }
    } else {
        button.style.background = activeButtonColor
    }
    console.log(event.target.value)
})

inputPassword.addEventListener('input', function(event) {
    if (event.target.value === '' && inputPassword != inputConfirmPassword) {
        button.style.background = disabledButtonColor
        button.onclick = function () {
            console.log('НЕОБХІДНО ВВЕСТИ PASSWORD')
        }
    } else {
        button.style.background = activeButtonColor
    }
    console.log(event.target.value)
})

inputConfirmPassword.addEventListener('input', function(event) {
    if (event.target.value === '') {
        button.style.background = disabledButtonColor
        button.onclick = function () {
            console.log('НЕОБХІДНО ВВЕСТИ ПІДТВЕРДЖЕННЯ PASSWORD')
        }
    } else {
        button.style.background = activeButtonColor
    }
    console.log(event.target.value)
})

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
