
// let n = 0
// const lights= [43,25,79]
// for (let i = 0; i < lights.length;i++){
//     n = n + lights[i]
// }
// if (n % 2 === 0){
//     console.log("the light is off")
// } else {
//     console.log("the light is on")
// }

// console.log(n)

// // console.log(9 % 2 === 0)

// // BRONZE
// for (i = 9; i > -1; i--){
//     console.log(i)
// }

// const fuirty= []
// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// for (i = 0; i < fruit.length; i++){
//     if (i % 2 !== 0){
//         fuirty.push(fruit[i])
//     }
// }
// console.log(fuirty)

//Silver 
// const budderPeople= [
//     {
//         name: "Jonathon Livingston Seagull",
//         occupation: "Seagull"
//     },
//     {
//         name: "Matieu Mconnahey",
//         occupation: "A Guy"
//     },
//     {
//         name: "Budder",
//         occupation: "Literally God"
//     }
// ]
// const namesThatMatter= []
// const occupations= []
// for (i = 0; i < budderPeople.length; i++){
//     console.log(budderPeople[i].name)
// }

// for(i = 0; i < budderPeople.length; i++){
//     namesThatMatter.push(budderPeople[i].name)
//     occupations.push(budderPeople[i].occupation)
// }


// for(i = 0; i < budderPeople.length; i++){
//     if(i % 2 === 0 +1){
//         occupations.push(budderPeople[i].occupation)
//     }
//     else if(i % 2 === 0){
//         namesThatMatter.push(budderPeople[i].name)
//     }
// }

// console.log(namesThatMatter, occupations)
const matrix = []
for (i = 0; i < 3; i++){
    matrix.push([])
    for (j = 0; j < 3; j++){
        matrix[i].push(0)
        
}
}
console.log(matrix)
for (i = 0; i < 3; i++){
    for(j = 0; j < 3; j++){
        matrix[i][j] = "x"
    }
}
console.log(matrix)