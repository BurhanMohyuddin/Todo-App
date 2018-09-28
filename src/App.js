import React, { Component } from 'react';
import UserInput from './components/UserInput.js';
import Header from "./components/Header.js";
import TodoItems from "./components/TodoItems"; 
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      todos: [
        {id: 0, text: "Learn React!"},
        {id: 1 , text: "Complete Todo App!"}
      ],
      nextid: 3
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleSubmit = e => {
    let todos = this.state.todos.slice();
    todos.push({id: this.state.nextid, text: e})
    this.setState({
      todos: todos,
      nextid: ++this.state.nextid
    });
  }

  removeTodo =(id) => {
    this.setState({
      todos: this.state.todos.filter((todo,index) => todo.id !==id )    
    })
  }
  render() {
    return (
      <div className="App">
        <div className = "todo-wrapper">
          <Header />
          <UserInput handleSubmit = {this.handleSubmit} e = "" nextid = {this.state.nextid}/>
          <ul>
            {
              this.state.todos.map((todo) => {
                return <TodoItems todo={todo} key = {todo.id} id = {todo.id} removeTodo = {this.removeTodo}/>
              })
            }
          </ul>
        </div>

      </div>
    );
  }
}

export default App;
