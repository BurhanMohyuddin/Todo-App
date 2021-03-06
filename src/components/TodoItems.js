import React from 'react';
import "./TodoItems.css";
export default class TodoItems extends React.Component {
    constructor(props) {
        super(props);
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return(
            <div className = "todoWrapper">
                <button className = "removeTodo" type = "button" onClick = {(e) => this.removeTodo(this.props.id)}>
                Remove
                </button> {this.props.todo.items}
            </div>
        )
    }
}