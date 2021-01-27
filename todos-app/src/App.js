import React, { Component } from 'react';
import Todos from './Todos';
import AddTodos from './AddTodos';
export class App extends Component {
  state = {
    todos: [
      {
        Lists: 'Take Shower', id: 1
      },
      {
        Lists: 'Take Lunch', id: 2
      }
    ]
  }
  Delettodos = (id) => {
    let todos = this.state.todos.filter(delettodo => {
      return delettodo.id !== id
    })
    this.setState({
      todos: todos
    })
  }
  AddTodos = (list) => {
    list.id = Math.random();
    let addtodo = [...this.state.todos, list];

    this.setState({
      todos: addtodo
    })
  }

  render() {
    const { todos } = this.state
    return (
      <div className="container my-5">
        <h1 className="text-center text-success my-5 ">Todo List's</h1>
        <Todos Delettodos={this.Delettodos} todos={todos} />
        <AddTodos AddTodos={this.AddTodos} />
      </div>
    )
  }
}

export default App

