/*
let array = [1,2]

array.push(3)

let JointString = array.join("-")

console.log(JointString)
console.log(typeof JointString)
console.log('------------')
*/
/*
let someText = "@"
let email = "Email@gmail.com"

if(someText.test(email)){
    console.log("Содержит")
}
else{
    console.log("Не содержит")

}
*/
function validateEmail(email) 
    {
        let ret = /\S+@\S+\.\S+/;
        return ret.test(email);
    }
    
console.log(validateEmail('anystring@anystring.anystring'));


// console.log('Test');
