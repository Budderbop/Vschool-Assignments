// function lowHigh(str){
//     console.log(str.toUpperCase() + str.toLowerCase())
// }
// lowHigh("hello")

// function half(str){
//     console.log(Math.floor(str.length / 2))
// }
// half("hello")

// function firstHalf(str){
//    console.log(str.slice(0, str.length / 2))
// }
// firstHalf("Hellos")

// function crazy(str){
//     if (str % 2 === 0){
//       console.log(str.toUpperCase(Math.floor(str.length / 2)))
//       console.log(str.toLowerCase(Math.floor(str.length / 2)))
//     } 
// }
// crazy("hellos")

// crazy = str => {
//     let firstHalf = str.slice(0, Math.floor(str.length / 2)).toUpperCase()
//     let secondHalf = str.slice(Math.floor(str.length / 2, str.length)).toLowerCase()
//     console.log(firstHalf + secondHalf)
// }

// crazy("helLlos")

jeremy = str => {
    const splitArr = str.toLowerCase().split(' ')
    
    for (i = 0; i < splitArr.length; i++){
        // splitArr[i].charAt(0).toUpperCase()
        splitArr[i] = splitArr[i].charAt(0).toUpperCase() + splitArr[i].substring(1); // slice works the same
    }
    console.log(splitArr.join(' '))
}

console.log(jeremy("what is up brotha"))
