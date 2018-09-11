import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';


class Task extends Component {
    // handleToggleDoneChange = (e) => {
    //     this.props.updateTask(this.props.task.id, {
    //         is_done: e.target.checked
    //     });
    // };
    handleDeleteClick = () => {
        this.props.deleteTask(this.props.task.id);
    };
    render() {
        // const { title } = this.props.task;
        // let classes = {
        //     'completed': is_done,
        //     'failed': is_failed
        // };

        return (
            <li className={`${this.props.todo.checked === true ? "list-group-item checked" : "list-group-item"}`}>
                <div className="checkbox">
                    <input type="checkbox" className="checkbox-item" onChange={this.checkTodo} checked={this.props.todo.done}/>
                </div>
                <div className="content">
                    <input className="form-control" value={this.state.todo.content} onChange={this.contentOnChange} onKeyPress={this.updateContent}/>
                </div>

                <div className="expire_date">
                    <input className="form-control" value={this.state.todo.expire_date} type="date" onChange={this.dateOnChange}/>
                </div>

                <div className="priority">
                    <select className="form-control" value={this.state.todo.priority} onChange={this.priorityOnChange}>
                        <option value="0">普通</option>
                        <option value="1">紧急</option>
                        <option value="2">非常紧急</option>
                    </select>
                </div>

                <input type="image" src={require('./rubbish.png')} alt="delete" className="btn-delete" onClick={this.deleteTodo}/>
            </li>
        );
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired,
    updateTask: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
}

export default Task;