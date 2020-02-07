import React, { Component } from 'react';
import FrInput from './FrInput';

class FrInputParent extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef();
        this.state={

        }
    }
    handleChange = () =>{
        this.inputRef.current.focus()
    }
    render(){
        return(
            <div>
                <FrInput ref={this.inputRef}/>
                <button onClick={this.handleChange}>Focus Button</button>
            </div>
        )
    }
}

export default FrInputParent;