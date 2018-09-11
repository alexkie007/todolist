import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todo: {
        content: '',
        expire_date: '',
      }
    }
    this.addTodo = this.addTodo.bind(this);
    this.contentOnChange = this.contentOnChange.bind(this);
    this.dateOnChange = this.dateOnChange.bind(this);
    this.priorityOnChange = this.priorityOnChange.bind(this);
  }

  addTodo(event) {
      axios({
        method: 'POST',
        url: 'http://173.255.211.231:8000/api/tasks/',
        data: JSON.stringify({
          content: this.state.todo.content,
          expire_date: this.state.todo.expire_date,
          priority: this.state.todo.priority,
          done: false
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function (response) {
        let todo = {};
        todo.content = "";
        todo.priority = 0;
        todo.done = false;
        todo.expire_date = "";
        this.setState({todo})
      }.then()
          .bind(this))
  }


  contentOnChange(event) {
    let temp = this.state.todo;
    temp.content = event.target.value;
    this.setState(temp)
  }

  dateOnChange(event) {
    let temp = this.state.todo;
    temp.expire_date = event.target.value;
    this.setState(temp)
  }

  priorityOnChange(event){
    let temp = this.state.todo;
    temp.priority = event.target.value;
    this.setState(temp)
  }

  render() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <div className="add">
            <input type="image" src={require('./add.png')} className="btn-add" alt="Add Todo" onClick={this.addTodo}/>
          </div>
          <div className="content">
            <input className="form-control" type="text" placeholder="New Todo" value={this.state.todo.content} onChange={this.contentOnChange}/>
          </div>
          <div className="expire_date">
            <input className="form-control" type="date" value={this.state.todo.expire_date} onChange={this.dateOnChange}/>
          </div>
          <div className="priority">
            <select className="form-control" value={this.state.todo.priority} onChange={this.priorityOnChange} >
              <option value='0'>普通</option>
              <option value='1'>紧急</option>
              <option value='2'>非常紧急</option>
            </select>
          </div>
        </li>
      </ul>
      
    );
  }
}

export default NewTodo;
