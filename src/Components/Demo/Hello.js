import React,{Component} from 'react';

const Hello = () =>{
    // Normal JSX
    // return (
    //     <div>
    //         <h1> Hi Taistech</h1>
    //     </div>
    // )

    // Without JSX
    return React.createElement(
        'div',
        {id:'heading', className:'react-element'},
        React.createElement(
            'h1',
            null,
            'Hi Taistech'))
}

export default Hello;