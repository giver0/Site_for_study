












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
/*
function validateEmail(email) 
    {
        let ret = /\S+@\S+\.\S+/;
        return ret.test(email);
    }
    
console.log(validateEmail('anystring@anystring.anystring'));
*/

// console.log('Test');




function testArray() {

    const array = [2, 5, 9];
    
    console.log(array);
    
    const index = array.indexOf(5);
    if (index > -1) {
      array.splice(index, 1); // 2nd parameter means remove one item only
    }
    
    // array = [2, 9]
    console.log(array); 
}


