let counterComp = 0

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (i = 0; i < officeItems.length; i++){
    if(officeItems[i] === "computer"){
        counterComp++
    }
}
console.log(counterComp)

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
    for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18){
            if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max Fury Road, let him in")
            } else {
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough, she's good to see Mad Max Fury Road")
            } 
        } else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male"){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max Fury Road, don't let him in")
        } else {
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, she's not good to see Mad Max Fury Road")
    }
    }

    