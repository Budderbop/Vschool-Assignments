const readlineSync = require("readline-sync");

// const answer = readlineSync.question('What is the land speed of a Tardigrade ',{
//     hideEchoBack: true
// })


// console.log("string: ", answer)

const enterNum1 = readlineSync.question('Please insert your first number: ');
const enterNum2 = readlineSync.question('Please insert your first number: ');
const operations = ["add", "sub", "mul", "div"];
const selectOperation = readlineSync.keyInSelect(operations, "What operation would you like to use? ");

function addNum(num1, num2){
    console.log("The result is : " + (Number(num1) + Number(num2)))
}
function subNum(num1, num2){
    console.log("The result is : " + (Number(num1) - Number(num2)))
}
function mulNum(num1, num2){
    console.log("The result is : " + Number(num1) * Number(num2))
}
function divNum(num1, num2){
    console.log("The result is : " + Number(num1) / Number(num2))
}
if (selectOperation === 0){
    addNum(enterNum1, enterNum2)
} else if (selectOperation === 1){
    subNum(enterNum1, enterNum2)
} else if (selectOperation === 2){
    mulNum(enterNum1, enterNum2)
} else {
    divNum(enterNum1, enterNum2)
}

