const shopper = {
    name: "John",
    averageYearsLeftToLive: 64,
    shopping: true,
    groceryCartItems: ["Butter", "Ravvioli", "appleJuice"],
    hoursShopping : function(){
        let hoursWaiting = [1,2,3,4,5,6]
        for  (i = 0; i < hoursWaiting.length; i++){ 
           if (i > 1){ 
               console.log("Hurry Up, I've Been Waiting For Hours!")
            } else {
                console.log('This is nice')
            }
        }
    }


}
console.log(shopper.hoursShopping())

console.log(shopper.groceryCartItems[2])
