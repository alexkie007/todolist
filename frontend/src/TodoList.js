import React, {
  Component
} from 'react';
import './App.css';
import TodoItem from './TodoItem';
import axios from 'axios'
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.getAll = this.getAll.bind(this);
    this.getAllDone = this.getAllDone.bind(this);
    this.getAllUnDone = this.getAllUnDone.bind(this);
    this.getListOrderByExpireDate = this.getListOrderByExpireDate.bind(this);
    this.getListOrderByPriority = this.getListOrderByPriority.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }


  getAll() {
      axios.get('http://localhost:8000/api/tasks/')
      .then(function (response) {
          this.setState({todos: response.data.results})
      }.bind(this))
    }
  getAllDone() {
      axios.get('http://localhost:8000/api/tasks/?done=true')
      .then(function (response) {
          this.setState({todos: response.data.results})
      }.bind(this))
  }
  getAllUnDone() {
      axios.get('http://localhost:8000/api/tasks/?done=false')
      .then(function (response) {
          this.setState({todos: response.data.results})
      }.bind(this))
  }

  getListOrderByExpireDate() {
    axios.get('http://localhost:8000/api/tasks/?ordering=-expire_date')
    .then(function (response) {
      this.setState({todos: response.data.results})
    }.bind(this))
  }

  getListOrderByPriority() {
    axios.get("http://localhost:8000/api/tasks/?ordering=-priority")
    .then(function (response) {
      this.setState({todos: response.data.results})
    }.bind(this))
  }


  deleteTodo(id) {
    axios({
      method: 'DELETE',
      url: 'http://localhost:8000/api/tasks/' + id,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    let todos = []
    this.state.todos.forEach(todo => {
      if (todo.id !== id) {
        todos.push(todo)
      }
    });
    this.setState({todos})
  }

  componentDidMount() {
    this.getAll()
  }

  render() {
    return ( 
      <div>
            <ul className = "list-group">
              {
                this.state.todos.map((todo)=> (
                  <TodoItem todo={todo} key={todo.id} onDelete={() => this.deleteTodo(todo.id)}/>
                ))
              }
            </ul>
            
            <div className="btn-group" role="group" aria-label="Order">
              <button type="button" className="btn btn-secondary" onClick={this.getAll}>All</button>
              <button type="button" className="btn btn-secondary" onClick={this.getAllDone}>Done</button>
              <button type="button" className="btn btn-secondary" onClick={this.getAllUnDone}>Undo</button>
              <button type="button" className="btn btn-secondary" onClick={this.getListOrderByExpireDate}>Order by Expire Date</button>
              <button type="button" className="btn btn-secondary" onClick={this.getListOrderByPriority}>Order by Priority</button>
            </div>
      </div>

    
    );
  }
}

export default TodoList;