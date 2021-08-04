import React, { Component } from 'react';

class RenderingEx extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }
    render() {

        // if else approch
        // if(this.state.isLoggedIn){
        //     return (
        //         <div>
        //             welcome User
        //         </div>
        //     ) 
        // }else{
        //     return(
        //         <div>
        //             welcome Guest
        //         </div>
        //     )
        // }

        // element varible approch
        // let message;
        // if(this.state.isLoggedIn){
        //     message=<div>welcome user</div>
        // }else{
        //     message=<div>Welcome guest</div>
        // }
        // return(
        //     <div>
        //         {message}
        //     </div>
        // )

        //ternionary operator approch
        // return (
        //     <div>
        //         {
        //             this.state.isLoggedIn ?
        //                 <div>
        //                     welcome user
        //             </div> :
        //                 <div>
        //                     welcome guest
        //             </div>
        //         }
        //     </div>
        // )
         // short cicuit opertor
        return this.state.isLoggedIn && <div>Welcome Guest</div> 
    }
}

export default RenderingEx;