import React, { Component } from 'react';
import Navbar from './components/navbar'
import {BrowserRouter , Route } from 'react-router-dom'
import TodoApp from './components/todoapp'
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="todo-app">
          <Navbar />
          <Route exact path='/' component= {Home}/>
          <Route path='/todo' component= {TodoApp}/>
          <Route path='/about' component= {About}/>
          <Route path='/contact' component= {Contact}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
