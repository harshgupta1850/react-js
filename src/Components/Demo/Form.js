import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            topic: 'react'
        }
    }
    handleChange = (event) => {
        console.log('change', event.target.value)
        this.setState({
            username: event.target.value,
        })
    }
    handleChangePassword = (event) => {
        console.log('change', event.target.value)
        this.setState({
            password: event.target.value,
        })
    }
    handleChangeTopic = (event) => {
        console.log('change', event.target.value)
        this.setState({
            topic: event.target.value,
        })
    }

    handleSubmit = (event) => {
        alert(` ${this.state.username} ${this.state.password} ${this.state.topic}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            User Name
                        </label>
                        <input type='text' value={this.state.username} onChange={this.handleChange} />
                    </div>
                    <div>
                        <label>
                            password
                        </label>
                        <input type='text' value={this.state.password} onChange={this.handleChangePassword} />
                    </div>
                    <div>
                        <label>
                            topic
                        </label>
                        <select value= {this.state.topic} onChange={this.handleChangeTopic}>
                            <option value='angular'>Angular</option>
                            <option value='react'>React</option>
                        </select>
                    </div>
                    <button type='submit'> Submit</button>

                </form>
            </div>
        )
    }
}

export default Form;