import React, { Component } from 'react';

const  heading= {
    fontsize:'72 px',
    color:'blue'
}
class Inline extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <h1 style= {heading}> 
                    Hi
                </h1>
            </div>
        )
    }
}

export default Inline;