import React from "react"
import './aSquiresArt.css'
import Squire from './Squire'

class DJ extends React.Component {
    constructor(){
        super()
        this.state = {
            colours: ["white", "white", "white", "white"]
        }
    }

    box1 = () => {
        for(let i = 0; this.state.colours.length > i; i++){
            if(i === "white"){
                return this.setState(() => {
                   return {colours: "black"}
                })
            }
        }
    }

    render(){
        const squares = this.state.colours.map(square => {
            return <Squire color={square} />
        })

        return (
            <div>
                <div className='buttons-box'>
                    <div className='buttons'  id='' onClick={this.box1}></div>
                    <div className='buttons'  id=''></div>
                    <div className='buttons'  id=''></div>
                    <div className='buttons'  id=''></div>
                </div>
            <div className='grid-boy'>
                {squares}
            </div>
            </div>
        )
    }
}

export default DJ