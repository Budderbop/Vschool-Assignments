// timer for dodging or doing critical strikes or for fun
// this is to try and meet the requirements and have it work, FabledRPG will be the completely more intense version that may not work yay

// need to fix damage so its possible for me to die

const readLine = require("readline-sync")

const print = () => {
    console.log(`
    Your Name: ${guy.name} 
    Inventory: ${guy.inventory} 
    Health: ${guy.stats.currentHealth} `)
}
let isAlive = true
let isDay = false   // fun to make mobs more common at night, impliment later
let bagels = 0
const guy = {
    name: "Jeremy",
    inventory: [],
    stats: {
        maxHealth: 102,
        currentHealth: 102,
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
const anHonorableDeath = () => {
    console.log("You are not as bad as I thought, since you are willing to fight and die in battle! Therefore you may keep your soul and move into another dimensions cowardly Jeremy. Or rest in peace knowing you are somewhat better than all those other cowardly Jeremys")
    const honorableDecision = readLine.keyInSelect(["Fight once more!"], null, {cancel: `Enjoy a longer nap.`})
    if(honorableDecision === 0){
        console.log("You have reincarnated as JEREMY!!!")
        isAlive = true
        guy.stats.currentHealth = guy.stats.maxHealth
        guy.inventory = []
        loserForest() // find a way to reset everything or at least items
    }
    else {
        console.clear()
        console.log("Goodbye Jeremy") 
            process.exit()
        
    }
}
const brianEncounter = () => {
    if (Math.random() < .2){
        bagels += 2
        console.log("You got some bagels from Brian, what a good guy!")
    }
}

///              ZONES ZONES ZONES

// zone 1, loser forest

const loserForestEnemyLoot = ["Boar Meat", "Boar Hide", "Boar Tusk"] //later try and make this based off of each individual monster but this is fine for now!

function LoserForestEnemies(name, health, damage){
    this.name = name,
    this.health = health,
    this.damage = damage
}

const boar = new LoserForestEnemies("Boar", 300, 40)
const anOldMan = new LoserForestEnemies("Old Man", 97, 27)
const flyingBabyJellyFish = new LoserForestEnemies("Flying Baby JellyFish", 46, 72)

const loserForestEnemiesArray = [boar, anOldMan, flyingBabyJellyFish]

const loserForestEncounter = () => {
    if (Math.random() < .2){
        console.log("You found an enemy!")
        const hello = readLine.keyInSelect(["Continue"], null, {cancel: `Die like a wimp.`})
        if(hello === 0){
            console.log("Seriously. Whats the worst that can happen anyways?")
        }
        else {
            aCowardsDeath()
        }
        loserForestFight()
    } 
}

const loserForestFight = () => {
    const random = Math.floor(Math.random()* 3)
    const enemy = loserForestEnemiesArray[random]
    let run
    console.log("Enemy: ", enemy)
    while(isAlive = true && enemy.health > 0 && !run){
        if (guy.stats.currentHealth <= 0){
            isAlive = false
            anHonorableDeath()
        }
        const enemyAttack = Math.ceil(Math.random()* enemy.damage) // required to stay in scope to know who the enemy is
        const jeremyAttack = Math.ceil(Math.random()* guy.stats.strength + guy.stats.strength / 2) // i may need to move it outside of function to have bigger scope and be re usable
        const fightBasics = readLine.keyIn(`A(n) ${enemy.name} has found you! What do you do? Nothing(n) Attack(a) Try to eat a bagel(b) Retreat like a coward(r) Check Inventory(i) Kill Yourself(k) `, {limit: 'n a b r i k'})//you fail to escape
        if(fightBasics === "b" && bagels >= 1){
            bagels -= 1
            guy.stats.currentHealth += 100
            console.log("How scrumptious! You gain 100 health")
            console.log(`You now have ${guy.stats.currentHealth} HP`)
        }  else if(bagels <= 0){
            console.log("You look, but find no more bagels, today is a sad day.")
        }
         
        
        
            if(fightBasics === "n"){
                console.log("Umm why is this an option?")
            } else if (fightBasics === "a"){
                console.log(`Your Damage: ${jeremyAttack}`)
                console.log(`Enemy Damage: ${enemyAttack}`)
                enemy.health -= jeremyAttack 
                console.log(`The ${enemy.name} now has ${enemy.health} HP`)
                console.log(`You hit for ${jeremyAttack} damage!`)
            } else if (fightBasics === "r"){
                if(Math.random() > .5){
                    console.log("You have successfully become a wimp, and have escaped")
                    run = true
                } else {
                    console.log("You fail to escape but are still a coward.")
                }
            } else if (fightBasics === "i"){
                console.log(print()) // later make the inventory interactive unlike a bitch who got lazy (me)
            } else if (fightBasics === "k"){
                console.log("There's lots of ways out for cowards, but this one is common.")
                    process.exit()                 // the time out might not work and may just skip on to the next thing
            }
            if(enemy.health <= 0){
                guy.inventory.push(loserForestEnemyLoot[0,1,2])
                console.log(`You have gotten ${loserForestEnemyLoot[0,1,2]}`)
            } else {
                console.log(`The ${enemy.name} attacks!`)
                guy.stats.currentHealth -= enemyAttack // it stops on this line
                console.log(`The ${enemy.name} hits for ${enemyAttack} damage!`)
                console.log(`You now have ${guy.stats.currentHealth} HP`)
                 
            }

        
    }
}

const loserForestTrashArray = ["bucket", "stick", "The Stick"]
const loserForestTrash = () => {
    if (Math.random() < .4444444444444){
        const randomNum = Math.floor(Math.random()*3)
        guy.inventory.push(loserForestTrashArray[randomNum])
        
    }
}



// function LoserForestEnemies(name, health, damage, [...loot]){
//     this.name = name,
//     this.health = health,
//     this.damage = damage
//     this.loot = loot
// }
// const boar = new LoserForestEnemies("Boar", 300, 40, [{boarMeat:{health: 0, value: 15}}])
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
    
    
    
    
console.log("Welcome to a land of wonders without technology, a land of death, a land of Jeremys. Where you have to survive in order to face off against King Jeremy, a ultra powerful magic Jeremy from a different dimension, who due to rage, destroyed his home world. Now out of regret, he goes to every world to kill himself in order to stop the same fate from happening. Will you have what it takes to survive and defeat Jeremy? If not you will still technically save the world by dying. Or you can defeat Jeremy and still destroy the world; it's up to you. It's up to Jeremy.")

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

console.log("Now, hurry up and start your journey. I know you can do it.                                                                                        Haaa he's so screwed!")

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
}, 6000);

//do a suprise encounter where it only works if surprise = true, default is true but one of the continues makes it false so that you dont get ambushed when you take too much time

const loserForest = () => {
while(isAlive === true && hasWon === false){
   const userBasics = readLine.keyIn(`Do something! Walk(w) , Rest(r) , Print Info(p) , Quit/Die Like A Coward(q) `, {limit: 'w r p q'})
    if(userBasics === "w"){
        console.log("You walk a little") // more stamina makes you walk farther, find more stuff
        loserForestEncounter() // mobs
        loserForestTrash() //bad loot chance
        brianEncounter()
    } else if (userBasics === "r"){
        guy.stats.currentHealth + 200  // add a way to increase rest amount and give mana as well or other stuff
        if(guy.stats.currentHealth >= guy.stats.maxHealth){
            guy.stats.currentHealth = guy.stats.maxHealth
            console.log(`You have healed and now have ${guy.stats.currentHealth} HP`) // this is probably not working oh well
        }
    } else if (userBasics === "p"){
        console.log(print())
    } else if (userBasics === "q"){
        aCowardsDeath()
    }


}
}