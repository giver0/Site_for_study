
const button = document.getElementById('button-sign-up')
const activeButtonColor = '#CC3D39'
const disabledButtonColor = 'gray'
button.style.background = disabledButtonColor

const inputFirstNameObj = {
    documentGet:  document.getElementById('input-first-name'),
    errorField: document.getElementById('input-first-name-error'),
    AddToErrorName: "Name",
    errorStorage: [], 
    errorMessage: "",
    functionToValidate: [validateInputFieldNotEmpty],
    eventValue: "",
}

const inputLastNameObj = {
    documentGet:  document.getElementById('input-last-name'),
    errorField: document.getElementById('input-last-name-error'),
    AddToErrorName: "Last Name",
    errorStorage: [] , 
    errorMessage: "",
    functionToValidate: [validateInputFieldNotEmpty],
    eventValue: "",
}

const inputEmailObj = {
    documentGet:  document.getElementById('input-email'),
    errorField: document.getElementById('input-email-error'),
    AddToErrorName: "email",
    errorStorage: [] , 
    errorMessage: "",
    functionToValidate: [validateInputFieldNotEmpty],
    eventValue: "",
}

const inputPasswordObj = {
    documentGet:  document.getElementById('input-password'),
    errorField: document.getElementById('input-password-error'),
    AddToErrorName: "password",
    errorStorage: [] , 
    errorMessage: "",
    functionToValidate: [
        validateInputFieldNotEmpty,
        CheckPasswordMuch,
        passwordLength        
    ],
    ConfirmPasswordObj: {},
    eventValue: "",
}

const inputConfirmPasswordObj = {
    documentGet:  document.getElementById('input-confirm-password'),
    errorField: document.getElementById('input-confirm-password-error'),
    AddToErrorName: "confirmation password",
    errorStorage: [] , 
    errorMessage: "",
    functionToValidate: [
        validateInputFieldNotEmpty,
        CheckPasswordMuch,
        passwordLength,
    ],
    ConfirmPasswordObj: {},
    eventValue: "",
}


//It need to check if password and confirmPassworn match
inputPasswordObj.ConfirmPasswordObj = inputConfirmPasswordObj
inputConfirmPasswordObj.ConfirmPasswordObj = inputPasswordObj


let arrayInputObject = [
    inputFirstNameObj,
    inputLastNameObj,
    inputEmailObj,
    inputPasswordObj,
    inputConfirmPasswordObj
]

//declare a variables
//-----------------------------------------
//Test commit from VS code

ListenAllInputField(arrayInputObject)

function ListenAllInputField(arrayInputObject){
    for (let InputObject of arrayInputObject){   
        InputObject.documentGet.addEventListener('input', function(event) {
            InputObject.eventValue = event.target.value

            InputObject.errorStorage = []
            for (let functionToValidate of InputObject.functionToValidate) {
                functionToValidate(InputObject)
            }
            outErrorMessage()
        })        
    }

}

function outErrorMessage() {
    for (let InputObject of arrayInputObject){
        if (InputObject.errorStorage.length === 0){
           // fieldSuccesful(InputObject)
        } else {
            showErrorMessage(InputObject)
        }
    }
}

function validateInputFieldNotEmpty(InputObject){
    InThisFunctionDebag(InputObject)
    if (InputObject.eventValue === "") {
        let message = `Уou need to enter a password ${InputObject.AddToErrorName}`
        InputObject.errorStorage.push(message)
    }
}

function fieldSuccesful(InputObject){
    let message = 'Correctly!'
    InputObject.errorField.innerText = message
    InputObject.errorField.style.color = 'green'

}

function showErrorMessage(InputObject) {
    convertErrorToString(InputObject)
    InputObject.errorField.innerText = InputObject.errorMessage
    InputObject.errorField.style.color = 'red'
}

function CheckPasswordMuch(InputObject){
    if (InputObject.eventValue===InputObject.ConfirmPasswordObj.eventValue){

    } else {
        InputObject.errorStorage.push("Password mismatch")

    }
}

function convertErrorToString(InputObject){
    InputObject.errorMessage = InputObject.errorStorage.join(", ")
}

function passwordLength(InputObject){
    console.log(InputObject.eventValue.length)
    if (InputObject.eventValue.length<8){
        InputObject.errorStorage.push("Password must contain at least 8 characters")
    }
}

//-----------------------------------
//Debug

function debugIfFieldEmpty(event){
    console.log(`Empty field - ${check_if_field_empty(event)}`) 
}

function InThisFunctionDebag(InputObject){
    console.log(`I'm in validateInputFieldNotEmpty - ${InputObject.AddToErrorName}`)

}
