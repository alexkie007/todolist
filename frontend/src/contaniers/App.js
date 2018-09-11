import React, { Component } from 'react';
import '../styles/bootstrap.min.css';
import '../styles/App.css';
import NewTodo from '../NewTodo';
// import AddTask from './components/AddTask'
// import TodoList from './TodoList';
import TaskList from './TaskList';


class App extends Component {

  render() {
    return (
      <div className="container">
         <h1 className="title text-center">Todo List</h1>
            <NewTodo/>
            {/*<AddTask addTask={addTask}/>*/}
            {/*<TodoList/>*/}
            <TaskList/>
      </div>
    );
  }
}

export default App;
