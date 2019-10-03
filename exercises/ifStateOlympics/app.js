if(5 > 3){
    console.log("is greater than")
}

if("cat".length === 3){
    console.log("is the length")
}

if ("cat".length === "dog".length){
    console.log("is equal to")
} else {
    console.log("not the same")
}
// BRONZE
var person = {
    name: "Bobby",
    age: 12
}

if(person.age >= 18){
console.log("Why not Bobby I can't Control You Anyways, Just Go Ahead Ruin Your Life")
} else {
    console.log("While you are in this house you will follow my rules, BOBBBAYYY!!!")
}

if(person.name.charAt(0) === "B"){
    console.log("Weird, but rules are rules")
}

if(person.name.charAt(0) === "B" && person.age >= 18){
    console.log("You sure have grown bobby")
} else {
    console.log("You will grow up in no time, I just know you will!")
}

// Silver
if(1 === "1"){
    console.log("strict")
}  else if(1 == "1"){
    console.log("loose")
} else {
    console.log("not equal at all")
}

if(1 <= 2 && 2 === 4){
    console.log("yes")
}

//Gold
if(typeof "dog" === 'string'){
    console.log("is a string")
}

if(typeof true === 'boolean'){
    console.log("is a boolean")
}

if(typeof cat === 'defined'){
    console.log("we know of cats")
}  else {
    console.log("what?")
}

if("sandwich wizards".length > 13){
    console.log(" its greater than 13")
} else {
    console.log('it isnt')
}
var num = 48

num % 2 === 0 ? console.log("of course its even im only doing multiples of 8") : console.log("how is not even?")
