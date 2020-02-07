import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
    }
    increment() {
        this.setState( (prevState) => ({
            counter: prevState.counter+1
        }), () => {
            console.log(this.state.counter)
        })
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1
        })
    }
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        const {counter} = this.state
        return (
            <div>
                <h1>
                    Counter: {counter}
                </h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
                <button onClick={() => this.decrement()}>Decrement</button>
            </div>
        )
    }
}

export default Counter;