import React from 'react'
import Die from './Die'
// import './styles.css'


class DiceBox extends React.Component{
    constructor(){
        super()
        this.state = {
            dice: [],
            roll: 0
        }
    }
    random = () => Math.ceil(Math.random()*6)

    handleChange = (e) => {
        // let die = []
        const { name, value} = e.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        let pie = true
        let timesItTakes = 0
        let die = []
        e.preventDefault()
        const { dice, roll } = this.state
        while(pie){
            if (die.length === roll){
                for ( let i = 0; i < roll; i++){
                    die.shift()
                    console.log("shifted")
                }
            } else {
                for ( let i = 0; i < roll; i++){
                    die.push(this.random())
                    console.log("pushed")
                    console.log(`Roll:${roll}`)
                }
            }
            this.setState({dice: die})
            timesItTakes++
            if(die.reduce((tot, nun) => tot + nun) === roll*6){
                return pie = false
            }
            console.log("Jeremy's Fired")
        }
        console.log(timesItTakes)
        // let total = die.reduce(tot, nun){
        //     return tot + nun
        // }
        // console.log(die.reduce((tot, nun) => tot + nun))
        
    }

    

    render(){
        console.log(this.state)
        return(
            <div>
                <div id='selector'>
                    <input onChange={this.handleChange} name='roll' type='number' style={{textAlign: 'center', width: "100px"}} placeholder='Number Of Dice'></input>
                    <button onClick={this.handleSubmit}>Roll</button>
                </div>  
                <div id='dieContainer'>        
                    {this.state.dice.map(num=><Die num={num}/>)}
                </div>  
            </div>
        )
    }
}

// Add a way to roll certain number that they choose.

export default DiceBox