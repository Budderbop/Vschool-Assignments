const phase = document.getElementById("phase")
const dephase = document.getElementById("dephase")
const body = document.getElementById("jeremy")
let currentPhase = 0
console.log(currentPhase)

phase.addEventListener("click", () => {
    if(currentPhase < 7){ // not sure how many phases
        currentPhase++
        console.log(currentPhase)
    }
    if(currentPhase === 1){
        const mainContainer = document.createElement("div")
        mainContainer.id = "mainContainer"
        body.appendChild(mainContainer)
    }
    if(currentPhase === 2){
        // create
    }
    if(currentPhase === 3){
        // create
    }
    if(currentPhase === 4){
        // and make bagels
    }
    if(currentPhase === 5){
        //create
    }
})

dephase.addEventListener("click", () => {
    if(currentPhase > 0){
        currentPhase--
        console.log(currentPhase)
    }
    if(currentPhase === 1){
        currentPhase--
        mainContainer.remove()
        // body.parentNode.removeChild(mainContainer)
    }
    if(currentPhase === 2){
        //deletes phase 345
    }
    if(currentPhase === 3){
    }
    if(currentPhase === 4){
    }
    if(currentPhase === 5){
        // last one not needed, nothing to delete
    }
})