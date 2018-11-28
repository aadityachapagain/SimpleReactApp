import React, { Component } from 'react'
import AddTodo from './Addform'
import Todos from './todos'

class TodoApp extends Component {
    state = {
        todos: [
            {id: 1, content: 'Buy some Milk'},
            {id: 2, content: 'Play Mario cart'},
            {id: 3, content: 'Implement dota 2 spider'}
          ]
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