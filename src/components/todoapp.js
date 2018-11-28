import React, { Component } from 'react'
import AddTodo from './Addform'
import Todos from './todos'

class TodoApp extends Component {

  constructor(props) {
    super(props);
    this.state = {todos:
      this.props.todos
    };
  }

  componentWillUnmount(){
    this.props.changeState(this.state.todos)
  }
    deleteTodo = (id) => {
        const todos = this.state.todos.filter( todo => {
          return todo.id !== id
        });
        this.setState({
          todos
        })
      }

      addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos,todo]
        this.setState({
          todos
        })
      }

      render(){
          return(
              <div className="container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
                <AddTodo addTodo = {this.addTodo}/>
              </div>
          )
      }
}

export default TodoApp;