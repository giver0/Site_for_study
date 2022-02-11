
const button = document.getElementById('button-sign-up')

const inputFirstName = document.getElementById('input-first-name')
const inputLastName = document.getElementById('input-last-name')
const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const inputConfirmPassword = document.getElementById('input-confirm-password')

const inputFirstNameError = document.getElementById('input-first-name-error')
const inputLastNameError = document.getElementById('input-last-name-error')
const inputEmailError = document.getElementById('input-email-error')
const inputPasswordError = document.getElementById('input-password-error')
const inputConfirmPasswordError = document.getElementById('input-confirm-password-error')

const activeButtonColor = '#CC3D39'
const disabledButtonColor = 'gray'

button.style.background = disabledButtonColor



validateFieldNotEmpty2(inputFirstName, inputFirstNameError, "Имя")

function validateFieldNotEmpty2(document, documentError, errorName){
    document.addEventListener('input', function(event){  
        validateFieldNotEmpty(event.target.value, errorName)    
    })
    documentError.innerText = errorName

 }

/*
inputFirstName.addEventListener('input', function(event){
       validateFieldNotEmpty(event.target.value, "Имя")
       inputFirstNameError.innerText = event.target.value
    })
*/
inputLastName.addEventListener('input', function(event){  
    validateFieldNotEmpty(event.target.value, "Фамилию")    
})

inputEmail.addEventListener('input', function(event){  
    validateFieldNotEmpty(event.target.value, "Email")    
})

inputPassword.addEventListener('input', function(event){  
    validateFieldNotEmpty(event.target.value, "Пароль")    
})

inputConfirmPassword.addEventListener('input', function(event){  
    validateFieldNotEmpty(event.target.value, "Подтверждение пароля")    
})

function validateFieldNotEmpty(ChekingFeild, errorName){
    if(check_if_field_empty(ChekingFeild)){
        errorMessage(errorName)
    }
    else{
        fieldSuccesful()
    }
}

function fieldSuccesful(){
    console.log('Correctly!')
}

function errorMessage(message){
    console.log(`Необходимо ввести ${message}`)
}

function check_if_field_empty(field_to_check){
    if(field_to_check===""){
        return true
    }
    else{
        return false
    }
}

function debugIfFieldEmpty(event){
    console.log(`Empty field - ${check_if_field_empty(event)}`) 
}
