
const inputFirstName = document.getElementById('input-first-name')
const inputLastName = document.getElementById('input-last-name')
const inputEmail = document.getElementById('input-email')
const inputPassword = document.getElementById('input-password')
const inputConfirmPassword = document.getElementById('input-confirm-password')
const button = document.getElementById('button-sign-up')

const activeButtonColor = '#CC3D39'
const disabledButtonColor = 'gray'

button.style.background = disabledButtonColor




inputFirstName.addEventListener('input', function(event){
    console.log(event.target.value)
    console.log(check_if_field_empty(event.target.value))
    if(check_if_field_empty(event.target.value)){
        errorMessage('Имя')
    }
    else{
        fieldSuccesful()
    }

    
})

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

// console.log(check_if_field_not_empty(event.target.value))
// if(check_if_field_not_empty(event.target.value)){

//     console.log(event.target.value)
// }