import React, { Component } from 'react';

function FunctionClick (){
    function handleChange(){
        console.log('button Clicked')
    }
        return(
            <div>
                <button onClick={handleChange}>Click</button>
            </div>
        )
    
}
export default  FunctionClick;