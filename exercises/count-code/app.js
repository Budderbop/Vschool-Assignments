// let count = 0
// const countCode = (...arr) => {
//     console.log(arr)
//     if(arr === "code"){
//         return
//     }
// }

// console.log(count)


const countCode = arr => arr.filter(str => str === "code").length

console.log(countCode(["code", "code", "cool"])) // can arr be str 
 //regex