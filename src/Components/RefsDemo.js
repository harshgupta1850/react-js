import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props){
        super(props)
        this.inputRef=React.createRef()
        this.cbRef=null;
        this.setCbRef= element =>{
            this.cbRef=element
        }
        this.state={

        }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus();
        // console.log(this.inputRef)
    }
    handleChange = () => {
        alert(this.inputRef.current.value)
    }
    render(){
        return(
            <div>
                <input type='text' ref={this.inputRef}/>
                <input type='text' ref={this.setCbRef}/>
                <button onClick={this.handleChange}>CLick</button>
            </div>
        )
    }
}

export default RefsDemo;