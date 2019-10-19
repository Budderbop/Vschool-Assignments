// Jeremy from a future after he has caused distruction and destroyed everything he cares about, goes back in time to each dimension
// that there is a Jeremy and kills him to stop him from becoming that which he hates most, which is himself. The player role is always a
// jeremy that can chose who he wants to be, possibly different classes. possibly evil, or good. maybe defeating the future(King)jeremy and
// showing him that he can change his own destiny, or defeating him and still destroying everything because thats sometimes interesting.
// make sure they know they are jeremy
// idea/ after dying say, would you like to keep your soul and move into another dimensions Jeremy?Y = start again after all the setup
// N = "Fine then, die."


const readLine = require("readline-sync")

const print = () => {
    console.log(guy.name, guy.inventory, guy.health)
}
let isAlive = true
let isDay = false
const guy = {
    name: "Jeremy",
    inventory: [],
    health: 102
}
let hasWon = false

const aCowardsDeath = () => {
    console.log("Fine then, die coward.")
    process.exit()
}

//Wizardry

// let magicFireDartTraining = 5 // less is more chance


// const weakCssStaffSpells = [fireDart, IceBullet]
// let magicDamage = Math.floor(magicPower * .4)
// let spellMagicFireDartMastery = Math.floor(Math.random()* magicFireDartTraining)
// idea for magic accuracy;
// if (spellMastery < 2){
//      function 
// }

// function JeremyInventory(name, attack, spells){
    //     this.name = name,
    //     this.attack = attack,
    //     this.spells = spells
    // }
    // const weak1CssStaff = JeremyInventory("Weak Css Staff", magicDamage, spellMastery)
    
    
    
    
console.log("beggining introduction(change later to make swaggy)")

const hello = readLine.keyInSelect(["Continue"], null, {cancel: `Die`})
if(hello === 0){
    
}
else {
    aCowardsDeath()
}

let badName = readLine.question("Now tell me your name, young traveler? ~ ")

if (badName === "Jeremy" || badName === "jeremy"){
    console.log("My, what a splendid name!")
} else {
    console.log(`Hmmmmm... ${badName} kinda sucks. What about Jeremy? `)
    const badNameAnswer = readLine.keyInSelect([".... okay?"], null, {cancel: `Die`})
    if (badNameAnswer === 0){
        
    } else {
        aCowardsDeath()
    }
    console.log("I don't like your attitude, but whatever, let's move on.")
}

const hello1 = readLine.keyInSelect(["Continue"], null, {cancel: `Die`})
if(hello1 === 0){
    
}
else {
    aCowardsDeath()  
}

const optionsSpecialty = ["Wizard Hands", "Barbarian Bloodlust", "Knight's Honor", "Martial Arts", "Archery", "Being A Guy"]
console.log("What is your specialty?")
const specialtyChoice = readLine.keyInSelect(optionsSpecialty, null, {cancel: `Dying`})
if (specialtyChoice === 0){
    console.log("Ahhh a wizard? Makes sense. But it looks like you have no skills. You are basically a slightly better Ethan, and will have to go learn your own skills.")
} else if (specialtyChoice === 1){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[1]}. You are basically Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 2){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[2]}. You are basically Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 3){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[3]}. You are basically Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 4){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[4]}. You are basically Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 5){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[5]}. You are basically Ethan, and will have to go learn your own skills.`)
} else {
    aCowardsDeath()
}

const hello2 = readLine.keyInSelect(["Continue"], null, {cancel: `Die`})
if(hello2 === 0){
    
}
else {
    aCowardsDeath()
}

console.log("Now, hurry up and start your journey. I know you can do it.                                                                 Haaa he's so screwed, huh, is this still on?")

const hello3 = readLine.keyInSelect(["Start Your Adventure!"], null, {cancel: `Die`})
if(hello3 === 0){
    
}
else {
    aCowardsDeath() 
}
        
console.log("Huh? you thought you were playing a game? No, you are playing life fool!")

const funny = () => {
    const hello4 = readLine.keyInSelect(["Just kidding! Let's Start!"], null, {cancel: `Die`})
    if(hello4 === 0){
        whileLoop()
    } else {
        aCowardsDeath()
    }
}


setTimeout(function(){
    funny()
}, 10000);

const whileLoop = () => {
while(isAlive === true && hasWon === false){
   let hmm = readLine.keyIn(`Do something! Walk(w) `, {limit: 'w'})
    if(hmm === "w"){
        console.log("ey")
        //enemyencounter()
        //findstuff()
    } else if (hmm === "r"){
        console.log(" argg")
    }


}
}