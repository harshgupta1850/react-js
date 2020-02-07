import React, { Component } from 'react';

class ChildList extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        console.log(this.props.result)
        const {result} = this.props
        return(
            <div>
                <h2>My id is {result.id}. My name is {result.name}. Price is {result.price}</h2>
            </div>
        )
    }
}

export default ChildList;