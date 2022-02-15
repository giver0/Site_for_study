
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
    isInputEverWas: false,
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
    isInputEverWas: false,

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
    isInputEverWas: false,

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
        passwordLength,
        containNumbersAndChars        
    ],
    ConfirmPasswordObj: {},
    eventValue: "",
    isInputEverWas: false,

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
    isInputEverWas: false,

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

//
validate_All_Input_Field_By_validateFunctionArray()

ListenAllInputField(arrayInputObject)

function ListenAllInputField(arrayInputObject){
    for (let InputObject of arrayInputObject){   
        InputObject.documentGet.addEventListener('input', function(event) {
            changeisInputEverWasToTrue(InputObject)
            InputObject.eventValue = event.target.value
            validate_Input_Field_By_validateFunctionArray(InputObject)            
            outErrorMessageifInputEverWas()
            //+Check if all correct
        })        
    }

}

function validate_All_Input_Field_By_validateFunctionArray(){
    for (let InputObject of arrayInputObject){         
            validate_Input_Field_By_validateFunctionArray(InputObject)            
            outErrorMessageifInputEverWas()            
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
        } else {
            showErrorMessage(InputObject)
        }
    }
}

function outErrorMessageifInputEverWas(){
    for (let InputObject of arrayInputObject){
        if (InputObject.errorStorage.length === 0){
           makeErrorFieldEmpty(InputObject)
           checkIfAllInputCorrect()
        }  else if (!InputObject.isInputEverWas) {
            InputObject.errorField.innerText = ""
        } else {
            showErrorMessage(InputObject)
        }
    }
}

function validateInputFieldNotEmpty(InputObject){
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
        if (!isPasswordHaveMismatchError(InputObject.ConfirmPasswordObj)){
            InputObject.ConfirmPasswordObj.errorStorage.push("Password mismatch")

        }
    }
}

function isPasswordHaveMismatchError(InputObject){
    for (let errorMessage of InputObject.errorStorage ){
        if (errorMessage ==="Password mismatch"){
            return true
        } else {
            return false
        }
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


function changeisInputEverWasToTrue(InputObject){
    if (!InputObject.isInputEverWas){
        InputObject.isInputEverWas = true
    }
}

button.onclick = function (){
    console.log("Click")
    outAllErrorMessage()
    checkIfAllInputCorrect()
    if (button.style.background === activeButtonColor){
        alert("Registration successful")
    }

    
}

function checkIfAllInputCorrect(){
    console.log("checkIfAllInputCorrect")

    let hasAnyError = arrayInputObject
        .map(InputObject => InputObject.errorStorage)
        .some(errors => errors.length>0)
     if (hasAnyError){
         console.log("hasAnyError")
        button.style.background = disabledButtonColor
     } else {
        console.log("N0Error")
        button.style.background = activeButtonColor
     }
   
}

function containNumbersAndChars(InputObject){   
    let regexIsPasshaveCharsAndNumbrs = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    isPasshaveCharsAndNumbr = regexIsPasshaveCharsAndNumbrs.test(InputObject.eventValue);
    if (!isPasshaveCharsAndNumbr){
        InputObject.errorStorage.push("Must contain numbers and english chars")
    }
    
}



//-----------------------------------
//Debug

function showAllErrorDebug(){
    for (let InputObject of arrayInputObject){
        console.log(`${InputObject.AddToErrorName} - ${InputObject.errorStorage}`)
    }
}

function debugIfFieldEmpty(event){
    console.log(`Empty field - ${check_if_field_empty(event)}`) 
}

function InThisFunctionDebag(InputObject){
    console.log(`I'm in validateInputFieldNotEmpty - ${InputObject.AddToErrorName}`)

}
