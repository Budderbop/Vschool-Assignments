import React from "react"
import Boxes from "./Boxes"

const App = (props) => {
    return (
        <div>
            <Boxes backgroundColor="green" styles={{"backgroundColor":"red"}} title="Green" subtitle="Hye" information="1" />
            <Boxes backgroundColor="blue" title="Blue" subtitle="Gye" information="1" />
            <Boxes backgroundColor="orange" title="Orange" subtitle="Kye" information="1" />
            <Boxes backgroundColor="pink" title="Pink" subtitle="Lye" information="1" />
            <Boxes backgroundColor="turqiouse" title="Turqiouse" subtitle="Bread" information="1" />
            <Boxes backgroundColor="purple" title="Purple" subtitle="Bye" information="1" />
            <Boxes backgroundColor="burlywood" title="Burlywood" subtitle="Bill" information="1" />
            <Boxes backgroundColor="red" title="Red" subtitle="Bill" information="1" />
            <Boxes backgroundColor="grey" title="Grey" subtitle="Bill" information="1" />
            <Boxes backgroundColor="#c47" title="C47" subtitle="Nye" information="1" />
        </div>
    )
}

export default App