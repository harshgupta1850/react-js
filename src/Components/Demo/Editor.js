import React, { Component } from 'react';
import EditorChild from './EditorChild';

class Editor extends Component {
    constructor(props) {
        super(props)
        const date = new Date();
        const counterId = 1
        this.state = {
            counter:counterId,
            list: [
                {
                    id: counterId,
                    createdAt: date
                }
            ]
        }
    }
    addToStart = () => {
        const date = new Date();
        this.setState({
            list:[{id:this.state.counter+1,createdAt:date},...this.state.list],
            counter:this.state.counter+1
        })
    }
    addToEnd = () => {
        const date = new Date();
        this.setState({
            list:[...this.state.list,{id:this.state.counter+1,createdAt:date}],
            counter:this.state.counter+1
        })
    }
    sortByEarliest = () => {
        const sortedArray= this.state.list.sort((a,b) => {
            return a.createdAt -b.createdAt;
        })
        this.setState({
            lisr:sortedArray
        })
    }
    sortByLatest = () => {
        const sortedArray= this.state.list.sort((a,b) => {
            return b.createdAt -a.createdAt;
        })
        this.setState({
            lisr:sortedArray
        })
    }
    render() {
        const tableData = this.state.list.map((list, index) => (
            <tr key={list.id}>
                <td>
                    {index}
                </td>
                <td>
                    {list.id}
                </td>
                <td>
                    <input />
                </td>
                <td>
                    {list.createdAt.toLocaleTimeString()}
                </td>
            </tr>
        ))
        return (
            <div>
                <div>key = index</div>
                <button onClick={this.addToStart}>Add New To Start</button>
                <button onClick={this.addToEnd}>Add New To End</button>
                <button onClick={this.sortByEarliest}>sortByEarliest</button>
                <button onClick={this.sortByLatest}>sortByLatest</button>
                <table>
                    <tr>
                        <th>Index</th>
                        <th>Id</th>
                        <th>Item</th>
                        <th>Created At</th>
                    </tr>
                    {tableData}
                </table>
            </div>
        )
    }
}

export default Editor;