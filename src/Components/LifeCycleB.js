import React, { Component } from 'react';

class LifeCycleB extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'Harsh'
        }
        console.log('Constructor B')
    }
    
    static getDerviedStateFromProps(props,state){
        console.log('getDerviedStateFromProps B')
        return null;
    }
    componentDidMount(){
        console.log('componentDidMount B')
    } 

    shouldComponentUpdate(){
        console.log('shouldComponentUpdate b')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate b');
        return null;
    }
    componentDidUpdate(){
        console.log('componentDidUpdate b')
    }
    render(){
        console.log('render B')
        return(
            <div>
                HI
            </div>
        )
    }
}
 export default LifeCycleB;