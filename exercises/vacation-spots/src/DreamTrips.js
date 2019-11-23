import React from "react"
import Vacaspots from "./Vacaspots.json"

const DreamTrips = (props) => {
    
    return (
        <div>
            <h1>
                <pre>
                Spot :Location(s): {props.place}

                Cost: {props.cost}

                When: {props.timeToGo}
                </pre>
            </h1>
            
        </div>
    )
}

export default DreamTrips