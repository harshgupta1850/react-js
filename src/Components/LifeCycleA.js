import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Harsh'
        }
        console.log('Constructor')
    }
    
    static getDerviedStateFromProps(props,state){
        console.log('getDerviedStateFromProps')
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate');
        return null;
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
    handleChange = () =>{
        console.log('button clicked')
        this.setState({
            name:'harshh'
        })
    }
    render(){
        console.log('render')
        return(
            <div>
                HI
                {this.state.name}
                <LifeCycleB/>
                <button onClick={this.handleChange}>
                    click
                </button>
            </div>
        )
    }
}
 export default LifeCycleA;