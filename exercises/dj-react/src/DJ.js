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
                    
                })
            }
            
        }
    }

    toggleWhite = () => {
        for ( let i = 0; i < this.state.colours.length; i++ ){
            if(this.state.colours[0] === "black"){
                this.setState({
                    colours: ["white", "white", "white", "white"]
                })
            } else if (this.state.colours[0] === "white"){
                this.setState({
                    
                })
            }
            
        }
    }

    // toggleBlack = () => {
    //     this.state.colours[0] === "white" ?
    //     this.state.colours.forEach({colours: "black"}):
    //     this.state.colours.forEach({colours: "white"})
    // }
    
    render(){
        console.log(this.state.colours)
        const squares = this.state.colours.map(square => {
            return <Squire color={square} />
        })

        return (
            <div>
                <div className='buttons-box'>
                    <div className='buttons'  id='' onClick={this.toggleBlack}></div>
                    <div className='buttons'  id='' onClick={this.toggleWhite}></div>
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