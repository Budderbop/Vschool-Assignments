const numbArr = []
function randomPassGen(number){
    for(i = 0; i < number; i++){
        numbArr.push(Math.floor(Math.random()*9)+1)
    }
}
randomPassGen(5)
let newNum = numbArr.join(',')
console.log(newNum)


// // Credit Goes To Rob
// function randomPasswordGenerator(passLength){
//     const password = [];
//     let randChar;
//     for (let i = 0; i < passLength; i++){
//     randomChar = String.fromCharCode(Math.round(
//         (Math.random() * 94) + 32));
//         password.push(randChar);
//     }
//     return password.join("");
// }

// console.log(randomPasswordGenerator(10))

