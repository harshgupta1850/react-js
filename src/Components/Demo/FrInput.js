import React, { Component } from 'react';

// class FrInput extends Component {
//     constructor(props){
//         super(props)

//         this.state={

//         }
//     }
//     render(){
//         return(
//             <div>
//                 < input type='text'/>
//             </div>
//         )
//     }
// }

const FrInput = React.forwardRef(
    (props,ref) =>{
        return(
            <div>
                <input type='text' ref={ref}/>
            </div>
        )
    }
) 
export default FrInput;