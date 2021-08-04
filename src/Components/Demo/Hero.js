import React, { Component } from 'react';

class Hero extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        if(this.props.heroName==='Joker'){
            throw new Error('Not a hero')
        }
        return(
            <div>
                {this.props.heroName}
            </div>
        )
    }
}

export default Hero;