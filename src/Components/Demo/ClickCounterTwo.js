import React, { Component } from 'react';

class ClickCounterTwo extends Component {
    
    render(){
        return(
            <div>
                <button onClick={this.props.increment}>Click {this.props.count}</button>
            </div>
        )
    }
}

export default ClickCounterTwo;