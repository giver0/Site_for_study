
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
    validateFunctionArray: [
        validateInputFieldNotEmpty,
        validateisNameCorrect,
    ],
    eventValue: "",
}

const inputLastNameObj = {
    documentGet:  document.getElementById('input-last-name'),
    errorField: document.getElementById('input-last-name-error'),
    AddToErrorName: "Last Name",
    errorStorage: [] , 
    errorMessage: "",
    validateFunctionArray: [
        validateInputFieldNotEmpty,
        validateisNameCorrect,
    ],
    eventValue: "",
}

const inputEmailObj = {
    documentGet:  document.getElementById('input-email'),
    errorField: document.getElementById('input-email-error'),
    AddToErrorName: "email",
    errorStorage: [] , 
    errorMessage: "",
    validateFunctionArray: [
        validateInputFieldNotEmpty,
        validateIfEmailCorrect
    ],
    eventValue: "",
}

const inputPasswordObj = {
    documentGet:  document.getElementById('input-password'),
    errorField: document.getElementById('input-password-error'),
    AddToErrorName: "password",
    errorStorage: [] , 
    errorMessage: "",
    validateFunctionArray: [
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
    validateFunctionArray: [
        validateInputFieldNotEmpty,
        CheckPasswordMuch,
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
            validate_Input_Field_By_validateFunctionArray(InputObject)            
            outAllErrorMessage()
        })        
    }

}

function validate_All_Input_Field_By_validateFunctionArray(){
    for (let InputObject of arrayInputObject){         
            validate_Input_Field_By_validateFunctionArray(InputObject)            
            outAllErrorMessage()             
    }
}

function validate_Input_Field_By_validateFunctionArray(InputObject){
    InputObject.errorStorage = []
            for (let validateFunctionArray of InputObject.validateFunctionArray) {
                validateFunctionArray(InputObject)
            }

}

function outAllErrorMessage() {
    for (let InputObject of arrayInputObject){
        if (InputObject.errorStorage.length === 0){
           makeErrorFieldEmpty(InputObject)
           checkIfAllInputCorrect()
        } else {
            showErrorMessage(InputObject)
        }
    }
}

function validateInputFieldNotEmpty(InputObject){
    InThisFunctionDebag(InputObject)
    if (InputObject.eventValue === "") {
        let message = `Уou need to enter a ${InputObject.AddToErrorName}`
        InputObject.errorStorage.push(message)
    }
}

function fieldSuccesful(InputObject){
    let message = 'Correctly!'
    InputObject.errorField.innerText = message
    InputObject.errorField.style.color = 'green'
}

function makeErrorFieldEmpty(InputObject){
    InputObject.errorField.innerText = ""
}

function showErrorMessage(InputObject) {
    convertErrorToString(InputObject)
    InputObject.errorField.innerText = InputObject.errorMessage
    InputObject.errorField.style.color = 'red'
}

function CheckPasswordMuch(InputObject){
    if (InputObject.eventValue===InputObject.ConfirmPasswordObj.eventValue){
        // validate_Input_Field_By_validateFunctionArray(InputObject.ConfirmPasswordObj)
        // console.log("PassEqual")
        deletePasswordMuch_from_ConfirmPasswordObj(InputObject.ConfirmPasswordObj)

    } else {
        InputObject.errorStorage.push("Password mismatch")
        InputObject.ConfirmPasswordObj.errorStorage.push("Password mismatch")
    }
}

function deletePasswordMuch_from_ConfirmPasswordObj(InputObject){
    for (let errorMessage of InputObject.errorStorage ){
        if (errorMessage ==="Password mismatch"){
            InputObject.errorStorage.splice(errorMessage, 1)
        }
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

function validateisNameCorrect(InputObject){
    if (InputObject.eventValue !=""){
        let regexIsNameCorrect = /^[A-Za-z\s]+$/
        isNameCorrect = regexIsNameCorrect.test(InputObject.eventValue);
        if (!isNameCorrect){
            InputObject.errorStorage.push("Must contain only english letters")
        }
    }

}

function validateIfEmailCorrect(InputObject){
    let regexIsEmailCorrect = /\S+@\S+\.\S+/;
    isEmailCorrect = regexIsEmailCorrect.test(InputObject.eventValue);
    if (!isEmailCorrect){
        InputObject.errorStorage.push("Email is invalid")
    }
}

function checkIfAllInputCorrect(){
    let checkIfAnyError = []
    for (let InputObject of arrayInputObject){
        if (InputObject.errorStorage != []){
            checkIfAnyError.push(InputObject.errorStorage)

        }
    }
    if (checkIfAnyError.length>0) {
        button.style.background = disabledButtonColor
    } else {
        button.style.background = activeButtonColor
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
