const name = 'Gaga';
const count = 5;
const array = [0, 1, 2, 3, 4, 5, 42, 50, 'jvrkvrk']
const objectCar = {
    doors: 4,
    engine: 1,
    wheels: 4,
}

const length = array.length
console.log('length = ', length)

for (let i = 0; i < length; i++) {
    console.log(`i = ${i}`);
}

const pos = array.indexOf(42);
console.log('position =', pos)

for (let number of array) {
    console.log(`i = ${number}`);
}

console.log('position =', pos)

for (let i in array) {
    console.log(`i = ${array[i]}`);
}  

const array2 = [
    {name: 'Vanya', age: 29, salary: 324243}, 
    {name: 'Roma', age: 29, salary: 3384934},
    {name: 'Yura', age: 29, salary: 374374},
    {name: 'Nayan', age: 18, salary:121212213},
]

for (let i in array2) {
    console.log(i)
    console.log(`name = ${array2[i].name}`);
    
} 

console.log('position =', pos)

const array3 = ['Vanya', 29, 'Roma', 29, 'Yura', 29, 'Nayan', 18,
]

function showInfoAboutStudent(obj){
    console.log(`++++++++++++++++++++++++`);
    console.log(`name = ${obj.name}`);
    console.log(`age = ${obj.age}`);
    console.log(`salary = ${obj.salary}`);
    console.log(`++++++++++++++++++++++++`);
}

for (let i in array2) {
    showInfoAboutStudent(array2[i])
} 

showInfoAboutStudent(array2[2])



/*for (let i in array3) {
    if (typeof array3[i] === 'string') {
        console.log(`name = ${array3[i]}`);
    }
    if (typeof array3[i] === 'number') {
        console.log(`age = ${array3[i]}`);
    }
}*/

function showInfoAboutStudent(obj){
    if (obj) {
        console.log(`++++++++++++++++++++++++`);
        console.log(`name = ${obj.name}`);
        console.log(`age = ${obj.age}`);
        console.log(`salary = ${obj.salary}`);
        console.log(`++++++++++++++++++++++++`);
    }
    else
    {
        console.log(`PLEASE DONT BE STUPID`);
    }
}

showInfoAboutStudent()

<script>
        const button = document.getElementById('button-sign-up')
        const inputEmail = document.getElementById('input-email')
        button.style.display = 'none'

        const emailInputEventHandler = function(event) {
            if (event.target.value === '') {
                button.style.display = 'none'
            } else {
                button.style.display = 'flex'
            }
            console.log(event.target.value)
        }

        inputEmail.addEventListener('input', emailInputEventHandler)

        /*inputEmail.addEventListener('input', function(e) {
            console.log(e.target.value)
        })*/

        button.onclick = function () {
            console.log('email', inputEmail.value)
            console.log('click click')
            if (inputEmail.value != '') {
                console.log('successful')
            } else {
                console.log('pidaras')
            }
        }
</script>