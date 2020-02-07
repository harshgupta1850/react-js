import React, { Component, useContext } from 'react';
import ComponentE from './ComponentE';
import UserContext from './UserContext'

class ComponentD extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                {this.value}
                <ComponentE/>
            </div>
        )
    }
}
ComponentD.contextType=UserContext
export default ComponentD;