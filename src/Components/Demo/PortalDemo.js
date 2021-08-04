import React, { Component } from 'react';
import ReactDom from 'react-dom'
class PortalDemo extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return ReactDom.createPortal(
            <div>
                Hi
            </div>,
            document.getElementById('portal-root')
        )
    }
}

export default PortalDemo;