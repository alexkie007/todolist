import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as taskActions from '../actions/TaskActions';
import Task from '../components/Task';
import AddTask from '../components/AddTask';
import Loader from '../components/Loader';


class TaskList extends Component{
    componentDidMount() {
        this.props.taskActions.loadTasks(this.props.currentProject);
    }

    render() {
        const {addTask, updateTask,deleteTask}= this.props.taskActions;
        let { tasks, loading, showDone, error } = this.props.tasks;
        let template;
        if (error)
            template = (<div className="error">{error}</div>);
        else if (loading)
            template = (<Loader />);
        // else
        //     template = (
        //         <ul className="task-list">
        //             {tasks.map(task =>
        //                 <Task
        //                     key={task.id}
        //                     task={task}
        //                     deleteTask={deleteTask}
        //                     updateTask={updateTask} />
        //             )}
        //         </ul>
        //     );

        return (
            <div id="list-container">
                <div className="list-header">
                    <AddTask
                        addTask={addTask}/>
                </div>
                {/*{template}*/}

            </div>
        );

    }

}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        taskActions: bindActionCreators(taskActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);