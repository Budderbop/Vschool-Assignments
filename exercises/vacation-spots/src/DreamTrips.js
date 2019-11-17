import React from "react"
import Vacaspots from "./Vacaspots.json"

const DreamTrips = (props) => {
    
    return (
        <div>
            <h1><pre>
                Spot 1:Location(s): {props.place}

                Cost: {props.cost}
                
                When: {props.timeToGo}
            </pre></h1>
            <h1>Spot 2:</h1>
            <h1>Spot 3:</h1>
        </div>
    )
}

export default DreamTrips