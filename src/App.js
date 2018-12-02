import React, { Component } from 'react';
import Navbar from './components/navbar'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import TodoApp from './components/todoapp'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact'
import Post from './components/posts'


class App extends Component {
  state  = {
    todos:[
      {id: 1, content: 'Buy some Milk'},
      {id: 2, content: 'Play Mario cart'},
      {id: 3, content: 'Implement dota 2 spider'}
    ]
  }

  changeState = (todoses) =>{
    let todos = [...todoses]
    this.setState({
      todos
    })
  }
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app">
          <Navbar />
          <Switch>
            <Route exact path='/' component= {Home} />
            <Route path='/todo' render= {() => <TodoApp todos = {this.state.todos} changeState={this.changeState} />} />
            <Route path='/about' component= {About}/>
            <Route path='/contact' component= {Contact}/>
            <Route path="/:user_id" component= {Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
