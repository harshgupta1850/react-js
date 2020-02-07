import React, { Component } from 'react';

class EventBind extends Component{
    constructor(props){
        super(props)
        this.state={
            message: 'hello'
        }
        //this.handleChange=this.handleChange.bind(this)
    }
    // handleChange(){
    //     this.setState({
    //         message:'goodbye'
    //     })
    //     console.log(this)
    // }
    handleChange = () => {
        this.setState({
            message:'goodbye'
        })
    }
    render(){
        return(
            <div>
                <div>
                    {this.state.message}
                </div>
                {/* <button onClick={this.handleChange.bind(this)}>click</button> */}
                {/* <button onClick= {() => {this.handleChange()}}>Click</button> */}
                <button onClick={this.handleChange}>click</button>
            </div>
        )
    }
}

export default EventBind;