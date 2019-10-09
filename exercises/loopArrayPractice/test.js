// function bobbayyyy(num1,num2,num3){
//     if(num1 > num2 && num1 > num3 ){
//         return num1
//     } else if(num2 > num3 && num2 > num1){
//         return num2
//     } else {
//         return num3
//     }
// }


// console.log(bobbayyyy(51937501,14,1238075))

// function BOBBBBBBAYYYYYYYYYYYYYYYYYYY(num1){

// }

// console.log(BOBBBBBBAYYYYYYYYYYYYYYYYYYY(7))

var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

            //   function func(str){
            //     return lyrics.join(' ')
            //   }
            //   console.log(func(''))
            
            // function func(str){
            //     return lyrics.reverse().join(' ')
            // }
            // console.log(func())
            function func(str){
                const arrgh = []
                for (let i = 0; i < str.length; i+= 2){
                    arrgh.push(str[i])
                }
              return arrgh.join(' ')
            }
           
            console.log(func(lyrics))