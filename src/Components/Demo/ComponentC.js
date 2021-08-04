import React, { Component } from 'react';
import ComponentD from './ComponentD';

class ComponentC extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <ComponentD/>
            </div>
        )
    }
}

export default ComponentC;