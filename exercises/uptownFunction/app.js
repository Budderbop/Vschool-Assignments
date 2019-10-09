var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

            //   function returny(str){
            //      return lyrics.join(" ")
            //   }
            //   returny()
            //   console.log(returny())

            //   function reversy(str){
            //     return lyrics.reverse(" ")
            //  }
            //  returny()
            //  console.log(reversy())
            //  console.log(returny())

            // function switchy(arrghImAPirate){
            //   const piratesTreasure = []
            //   for (i = 0; i < arrghImAPirate.length; i += 2){
            //     piratesTreasure.push(arrghImAPirate[i+1], arrghImAPirate[i])
            //   }
            //   return piratesTreasure.join(' ')
            // }
            // switchy(lyrics)
            // console.log (piratesTreasure)

            function randomy(arney){
              const ruckus = []
              for(i = 0; i < arney.length; i++){
                const scurveyIndex = Math.floor(Math.random()*ruckus.length)
                ruckus.splice(scurveyIndex,0 ,arney[i])
              }
              return ruckus.join(' ')
            }
            
            console.log(randomy(lyrics))