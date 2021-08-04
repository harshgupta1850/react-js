import React, { Component } from 'react';

//  const PropsTutorial = props => {
//      console.log(props)
//     return (
//         <div>
//             <h1> Hi {props.name} from  {props.place}</h1>
//             {props.children}
//         </div>

//     )
// }

class PropsTutorial extends Component {
    render() {
        const {name,place} = this.props
        return (
            <div>
                <h1>Hi {name} from {place}</h1>
                {this.props.children}
            </div>
        )
    }
}
export default PropsTutorial;

