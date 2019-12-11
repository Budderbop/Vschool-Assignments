import React from "react"
import './aSquiresArt.css'
import Squire from './Squire'

class DJ extends React.Component {
    constructor(){
        super()
        this.state = {
            colours: ["white", "white", "white", "white"]
        }
        // let box1 = (function(){
        //     for(let i = 0; this.state.colours.length > i; i++){
        //         if(i === "white"){
        //             return this.setState(() => {
        //                return {colours: "black"}
        //             })
        //         }
        //     }
        // }).bind(this)
    }

    toggleBlack = () => {
        for ( let i = 0; i < this.state.colours.length; i++ ){
            if(this.state.colours[0] === "white"){
                this.setState({
                    colours: ["black", "black", "black", "black"]
                })
            } else if (this.state.colours[0] === "black"){
                this.setState({
                    colours: ["white", "white", "white", "white"]
                })
            }
            
        }
    }

    togglePurple = () => {
        const newArr = this.state.colours
        if (newArr[1] !== "purple"){newArr.fill("purple", 0, 2)
        } else {newArr.fill("white")}
        this.setState({
            colours: newArr
        })
    }

    toggle2Blue = () => {
        const newArr = this.state.colours
        newArr[2]==="blue"? newArr[3]="blue" : newArr[2]="blue"
        this.setState({colours: newArr})
    }

    toggleRotate = () => {
        const newArr = [...this.state.colours]
        newArr[0] = this.state.colours[1]
        newArr[1] = this.state.colours[3]
        newArr[3] = this.state.colours[2]
        newArr[2] = this.state.colours[0]
        this.setState({colours: newArr})
    }
    
    // false || (return me)

    // true && (return me)

    // newArr[i] == "purple" && setState("dog")

    render(){
        // console.log(this.state.colours)
        const squares = this.state.colours.map(square => {
            return <Squire color={square} />
        })

        return (
            <div>
                <div className='buttons-box'>
                    <div className='buttons'  id='' onClick={this.toggleBlack}></div>
                    <div className='buttons'  id='' onClick={this.togglePurple}></div>
                    <div className='buttons'  id='' onClick={this.toggle2Blue}></div>
                    <div className='buttons'  id='' onClick={this.toggleRotate}></div>
                </div>
            <div className='grid-boy'>
                {squares}
            </div>
            </div>
        )
    }
}

export default DJ