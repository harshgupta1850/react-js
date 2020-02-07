import React, { Component } from 'react';
import './Style.css';


class StyleSheet extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    
    render(){
        let className =this.props.primary ? 'primary' : ''
        return(
            <div className={`${className} font-xl`}> 
                <h1>Hi</h1>
            </div>
        )
    }
}

export default StyleSheet;