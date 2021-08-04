import React, { Component, PureComponent } from 'react';
import Pure from './Pure';
import Regular from './Regular';

class Parent extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'harsh'
        }
    }
    handleChange = () =>{
        this.setState({
            name:'harshjj'
        })
    }
    render(){
        return(
            <div>
                 <button onClick={this.handleChange}>click</button>
                 <Pure name={this.state.name}/>
                 <Regular name={this.state.name}/>
            </div>
        )
    }
}
export default Parent;