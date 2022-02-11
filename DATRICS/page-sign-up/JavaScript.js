
const button = document.getElementById('button-sign-up')
const activeButtonColor = '#CC3D39'
const disabledButtonColor = 'gray'
button.style.background = disabledButtonColor

const inputFirstNameObj = {
    documentGet:  document.getElementById('input-first-name'),
    errorField: document.getElementById('input-first-name-error'),
    AddToErrorName: "Имя",
    errorStorage: [] 
}

const inputLastNameObj = {
    documentGet:  document.getElementById('input-last-name'),
    errorField: document.getElementById('input-last-name-error'),
    AddToErrorName: "Фамилию",
    errorStorage: [] 
}

const inputEmailObj = {
    documentGet:  document.getElementById('input-email'),
    errorField: document.getElementById('input-email-error'),
    AddToErrorName: "Email",
    errorStorage: [] 
}

const inputPasswordObj = {
    documentGet:  document.getElementById('input-password'),
    errorField: document.getElementById('input-password-error'),
    AddToErrorName: "Пароль",
    errorStorage: [] 
}

const inputConfirmPasswordObj = {
    documentGet:  document.getElementById('input-confirm-password'),
    errorField: document.getElementById('input-confirm-password-error'),
    AddToErrorName: "Подтверждение пароля",
    errorStorage: [] 
}

let arrayInputObject = [
    inputFirstNameObj,
    inputLastNameObj,
    inputEmailObj,
    inputPasswordObj,
    inputConfirmPasswordObj
]

//At the beginin all field must show error
for(let InputObject of arrayInputObject){
    FillErrorField(InputObject)
}

function FillErrorField(InputObject){
    errorMessage(InputObject)
}

//Validate all field
for(let InputObject of arrayInputObject){
    validateInputFieldNotEmpty(InputObject)

}

function validateInputFieldNotEmpty(InputObject){
    InputObject.documentGet.addEventListener('input', function(event){  
        validateFieldNotEmpty(event.target.value, InputObject)    
    })

}

function validateFieldNotEmpty(ChekingFeild, InputObject){
    if(check_if_field_empty(ChekingFeild)){
        errorMessage(InputObject)
    }
    else{
        fieldSuccesful(InputObject)
    }
}

function fieldSuccesful(InputObject){
    let message =    'Correctly!'
    
    console.log(message)
    InputObject.errorField.innerText = message
    InputObject.errorField.style.color = 'green'

}

function errorMessage(InputObject){
    let message = `Необходимо ввести ${InputObject.AddToErrorName}`
        console.log(message)
    InputObject.errorField.innerText = message
    InputObject.errorField.style.color = 'red'


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
