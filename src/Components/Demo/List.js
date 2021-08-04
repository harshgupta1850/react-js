import React, { Component } from 'react';
import ChildList from './ChildList';
class List extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoaded: false
        }
    }
    componentDidMount() {
        fetch('http://demo1826744.mockable.io/items')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    })
                })
    }
    render() {
        const names = ['bob', 'smith', 'bruce','bruce']
        const nameList = names.map((name,index) => {
            return <div key={index}>
                {index}{name}
            </div>;
        })
        const itemsDetails = this.state.items.map((result) => {
            return <ChildList key= {result.id} result={result}/>
        })
        return (
            <div>
                {itemsDetails}
                {nameList}
            </div>
        )
    }
}

export default List;