import React, { Component } from 'react'

export default class Greetings extends Component {
    constructor(){
        super()
        this.state={
            name:0
        }
    }

    Increase= () =>{
        this.setState({
            name : this.state.name+1
        })
    }
    Decrease= () =>{
        this.setState({
            name : this.state.name-1
        })
    }
    render() {

        return (
            <div>
                <h1>{ this.state.name } </h1>
                <button onClick= { this.Increase }>Increase</button>
                <button onClick= { this.Decrease }>Decrease</button>
               
            </div>
        )
    }
}
