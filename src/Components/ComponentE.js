import React, { Component } from 'react';
import { UserConsumer } from './UserContext';

class ComponentE extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render(){
        return(
            <div>
                <UserConsumer>
                    {
                        (value) => {
                            return <div>
                                hello {value}
                            </div>
                        }
                    }
                </UserConsumer>
            </div>
        )
    }
}

export default ComponentE;