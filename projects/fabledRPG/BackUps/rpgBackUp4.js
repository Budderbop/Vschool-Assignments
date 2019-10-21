// idea/ after dying say, would you like to keep your soul and move into another dimensions Jeremy?Y = start again after all the setup
// N = "Fine then, die."
// timer for dodging or doing critical strikes or for fun

const readLine = require("readline-sync")

const print = () => {
    console.log(`
    Your Name: ${guy.name} 
    Inventory: ${guy.inventory} 
    Health: ${guy.health}
    `)
}
let isAlive = true
let isDay = false
const guy = {
    name: "Jeremy",
    inventory: [],
    stats: {
        health: 102,
        healthRegen: 0, // just if i decide to impliment it later
        strength: 10,
        stamina: 10, // possibly determines number of special attacks, and the more stam the more likely to successfully retreat, how fast you regen stam as well
        defense: 0,  //reduce all damage, poison, ,, armor still only does one type of defense.
        magicPower: 10,
        mana: 10,  // prob cant change with stat points but auto when you level up
        intelligence: 10,  //increases how much mana you get per walk or rest, mana regen must give enouch to cast lowest spell of weapon each turn
        magicMastery: 0, // how high lvl of staffs you can use etc
        weaponMastery: 0, // non magic weapons
        luck: 0, //who doesnt like to increase chances of finding cooler sticks

    }
}
let hasWon = false

const aCowardsDeath = () => {
    console.log("Fine then, die coward.")
    process.exit()
}

///              ZONES ZONES ZONES

// zone 1, loser forest
const loserForestEncounter = () => {
    if (Math.random() > .2){

    }
}

function LoserForestEnemies(name, health, damage){
    this.name = name,
    this.health = health,
    this.damage = damage
    this.loot = loot
}

const boar = new LoserForestEnemies("Boar", 300, 40)
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
    // const weak1CssStaff = new JeremyInventory("Weak Css Staff", magicDamage, spellMastery)
    
    
    
    
console.log("Welcome to a land of wonders without technology, a land of death, a land of Jeremys. Where you have to survive in order to face off against King Jeremy, a ultra powerful magic Jeremy from a different dimension, who due to rage, destroyed his home world. Now out of regret, he goes to every world to kill himself in order to stop the same fate from happening. Will you have what it takes to survive and defeat Jeremy? If not you will still technically save the world by dying. Or you can defeat Jeremy and still destroy the world; it's up to you. It's up to Jeremy")

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
    console.log("Ahhh a wizard? Makes sense. But it looks like you have no skills. You are basically slightly better than Ethan, and will have to go learn your own skills.")
} else if (specialtyChoice === 1){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[1]}. You are basically as bad as Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 2){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[2]}. You are basically as bad as Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 3){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[3]}. You are basically as bad as Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 4){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[4]}. You are basically as bad as Ethan, and will have to go learn your own skills.`)
} else if (specialtyChoice === 5){
    console.log(`Hmmm weird, you don't quite have any aptitude for ${optionsSpecialty[5]}. You are basically as bad as Ethan, and will have to go learn your own skills.`)
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
        loserForest()
    } else {
        aCowardsDeath()
    }
}


setTimeout(function(){
    funny()
}, 10000);

//do a suprise encounter where it only works if surprise = true, default is true but one of the continues makes it false so that you dont get ambushed when you take too much time

const loserForest = () => {
while(isAlive === true && hasWon === false){
   const userBasics = readLine.keyIn(`Do something! Walk(w) , Perform A Strategic Retreat(r) , Print Info(p) , Quit/Die Like A Coward(q) `, {limit: 'w r p q'})
    if(userBasics === "w"){
        console.log("You walk a little") // more stamina makes you walk farther, find more stuff
        loserForestEncounter() // mobs
        loserForestTrash() //bad loot chance
    } else if (userBasics === "r"){
        battleRetreat()
    } else if (userBasics === "p"){
        console.log(print())
    } else if (userBasics === "q"){
        aCowardsDeath()
    }


}
}



