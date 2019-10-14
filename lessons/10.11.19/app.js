        // Destructuring

// const expense = {
//     type: 'Business',
//     amount: '$56'
// }

//let type = expense.type
// let amount = expense.amount

// let {type, amount} = expense

// console.log(type)

        // Rest and Spread Operators

    // Rest Operator
// function myFunc (otherStuff, ...stuff){
//     console.log (stuff)
//     console.log(otherStuff) //if otherStuff is before ...stuff it will take one place, if on the right side, ...stuff will take the all of it.
// }
// //rest concats the list and puts in array
// myFunc('hi', 'hello', 'good day', "g'day", 'cheers')


    //Spread Operator

// const primaryColors = ['red', 'yellow,', 'blue']
// const otherColors = ['teal', 'aguamarine', 'lobstermain']

// primaryColors.push(otherColors) //will make double array
// primaryColors.push(...otherColors) //will make it into a list that isnt an array

// const allColors = [...primaryColors, ...otherColors] // you can add, ... together
// const allColors = [...primaryColors, 'orange', 'red', true, 36, ...otherColors] // you can add, and add random items to the array
// console.log(...allColors)