import React from 'react'
import './styles.css'

function Die(props){
    return(
        <div id='dice'>
            {props.num}
        </div>
    )
}

export default Die