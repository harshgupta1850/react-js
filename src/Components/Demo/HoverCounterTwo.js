import React, { Component } from 'react';

class HoverCounterTwo extends Component {
    
    render(){
        return(
            <div>
                <button onMouseOver={this.props.increment}>Click {this.props.count}</button>
            </div>
        )
    }
}

export default HoverCounterTwo;