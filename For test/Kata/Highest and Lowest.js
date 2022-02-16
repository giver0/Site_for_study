//highAndLow("1 2 3 4 5");  // return "5 1"
str = "3236 5783 4252 5593 2968 2754 4657 4655 5005 5189 4679 3197 5552 3037 4130 3778 3894 4800 4807 4568 5320"
highAndLow(str);
function highAndLow(numbers){
    // ...
    // for (let char of numbers){
    //     console.log(char)
    // }
    let numberArray = numbers.split(' ').map(Number)
    console.log(numberArray)

    
    let max = numbers [0]
    let min = numbers [0]
    let stringToReturn = ``
    for (let someNumber of numberArray){
        if (someNumber>max){
            max = someNumber
        }
        if (someNumber < min){
            min = someNumber
        }
    stringToReturn = `${max} ${min}`

        console.log(stringToReturn)

    }
    

  }