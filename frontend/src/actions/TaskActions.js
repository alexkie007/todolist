import { sendRequest } from '../utils/ajax';
import * as types from '../constants/Task';


export const loadTasks = ()=>{
    return(dispatch)=>{
        dispatch({
            type:types.GET_TASKS_REQUEST,
        });
        sendRequest('get', `/api/tasks/`)
            .then(response => {
                dispatch({
                    type: types.GET_TASKS_SUCCESS,
                    payload: response.data.results
                });
            }).catch(error => {
            dispatch({
                type: types.GET_TASKS_FAIL,
                payload: new Error('获取todolist失败'),
                error: true
            });
        });
    }
};

export const addTask = ( data) => {
    return (dispatch) => {
        sendRequest('post', `/api/tasks/`, data)
            .then(response => {
                dispatch({
                    type: types.ADD_TASK_SUCCESS,
                    payload: response.data
                });
            }).catch(error => {
            dispatch({
                type: types.ADD_TASK_FAIL,
                payload: new Error('添加todo失败'),
                error: true
            });
        });
    }
};

export const updateTask = (id, data) => {
    return (dispatch) => {
        sendRequest('patch', `/api/tasks/${id}/`, data).then(response => {
            dispatch({
                type: types.UPDATE_TASK_SUCCESS,
                payload: response.data
            });
        }).catch(error => {
            dispatch({
                type: types.UPDATE_TASK_FAIL,
                payload: new Error('更新todo失败'),
                error: true
            });
        });
    }
};


export const deleteTask = (id) => {
    return (dispatch) => {
        sendRequest('delete', `/api/tasks/${id}/`).then(response => {
            dispatch({
                type: types.DELETE_TASK_SUCCESS,
                payload: id
            });
        }).catch(error => {
            dispatch({
                type: types.DELETE_TASK_FAIL,
                payload: new Error('删除todo失败'),
                error: true
            });
        });
    }
};