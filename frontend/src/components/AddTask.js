import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddTask extends Component{
    state = {
        todo: {
            content: '',
            expire_date: '',
            priority: 0,
        }
    };
    handleAddClick =()=>{
        const content = this.state.todo.content;
        const expire_date = this.state.todo.expire_date;
        const priority = this.state.todo.priority;
        const done = false;
        if(content){
            let obj ;
            obj.content = content;
            obj.expire_date= expire_date;
            obj.priority=priority;
            obj.done=done;
            this.props.addTask(obj);
            let todo = {};
            todo.content = "";
            todo.priority = 0;
            todo.done = false;
            todo.expire_date = "";
            this.setState({todo})
        }
    };

    handleContentKeyUp=(e)=>{
        if (e.keyCode===13)
            this.handleAddClick();
    };
    handleDateChange=(date)=>{
        this.setState({
            expire_date: date
        });
    }
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item">
                    <div className="add">
                        <input type="image" src={require('./add.png')} className="btn-add" alt="Add Todo" onClick={this.addTodo}/>
                    </div>
                    <div className="content">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="New Todo"
                            value={this.state.todo.content}
                            onKeyUp={this.handleContentKeyUp}
                            onChange={this.contentOnChange}/>
                    </div>
                    <div className="expire_date">
                        <input
                            className="form-control"
                            type="date"
                            value={this.state.todo.expire_date}
                            dateChange={this.handleDateChange}/>
                    </div>
                    <div className="priority">
                        <select
                            className="form-control"
                            value={this.state.todo.priority}>
                            <option>普通</option>
                            <option>紧急</option>
                            <option>非常紧急</option>
                        </select>
                    </div>
                </li>
            </ul>

        );
    }
}

AddTask.propTypes = {
    addTask: PropTypes.func.isRequired
};

export default AddTask;