import React, { Component } from 'react';

class Regular extends Component{
    render(){
        console.log('regular')
        return(
            <div>
                 Regular {this.props.name}
            </div>
        )
    }
}
export default Regular;