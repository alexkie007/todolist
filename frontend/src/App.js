import React, { Component } from 'react';
import './bootstrap.min.css';
import './App.css';
import NewTodo from './NewTodo';
import TodoList from './TodoList';


class App extends Component {

  render() {
    return (
      <div className="container">
         <h1 className="title text-center">Todo List</h1>
            <NewTodo/>
            <TodoList/>
      </div>
    );
  }
}

export default App;
