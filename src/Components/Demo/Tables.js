import React, { Component } from 'react';
import Columns from './Columns';

class Tables extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <table>
                    <tbody>
                        <tr>
                            <Columns/>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default Tables;