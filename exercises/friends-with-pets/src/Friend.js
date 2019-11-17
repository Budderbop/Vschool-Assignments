import React from "react"
import Pet from "./Pet"

const Friend = (props) => {
    console.log(props)
let mappedPets= props.pets.map(pet => 
        <Pet name={pet.name} breed={pet.breed}/>
    )
    return (
        <div>
            <h1>Name:{props.name}</h1>
            <h1>Age: {props.theOldness}</h1>
            {/* <PetList/> */}
            <h5>Pets: {mappedPets}</h5>
        </div>
    )

}

export default Friend