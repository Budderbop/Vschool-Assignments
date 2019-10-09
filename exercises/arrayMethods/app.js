var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

// const poppy = () => vegetables.pop()
// poppy()
// console.log("fruit:", fruit)
// console.log("vegetables:", vegetables)

// const shifty = () => fruit.shift()
// shifty()

// const indexy = () => fruit.indexOf("orange")
// indexy()
// let sup = indexy()

// console.log(indexy())

// const pushy = () => fruit.push(sup)
// pushy()

// lengthy = () => vegetables.push(vegetables.length)
// lengthy()

let food 
const pushypushy = () => {
    // food.push(fruit.concat(vegetables))
    // food.push(newArrgh)
    food = fruit.concat(vegetables)
    return food
}
pushypushy()
const instinct = food.slice(4,6)
food.reverse()
let smoothie = food.join(' ')


console.log("Food:", food)
console.log("Fruit:", fruit)
console.log("Vegetables:", vegetables)
console.log('instincts: ' +instinct)
console.log(food)
console.log(smoothie)