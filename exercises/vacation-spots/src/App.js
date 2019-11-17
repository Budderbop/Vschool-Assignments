import React from "react"
import DreamTrips from "./DreamTrips"
import Vacaspots from "./Vacaspots.json"

const App = () => {
    const wubalao = Vacaspots.map(jimmayyyyy =>
        <DreamTrips place={jimmayyyyy.place} cost={jimmayyyyy.price} timeToGo={jimmayyyyy.timeToGo} />
    )
    return (
        <div>
            <DreamTrips />
            {wubalao}
            {/* {Vacaspots} */}
        </div>
    )
}

export default App