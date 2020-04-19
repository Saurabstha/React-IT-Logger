import { GET_LOGS, SET_LOADINGS, 
    ADD_LOG, LOGS_ERROR, DELETE_LOG, 
    SET_CURRENT, CLEAR_CURRENT, 
    UPDATE_LOG,
    SEARCH_LOGS
} from './types';

// export const getLogs = () => {
//     return async (dispatch) => {
//         setLoading();

//         const res = await fetch('/logs');
//         const data = await res.json();

//         dispatch({
//             type: GET_LOGS,
//             payload: data
//         });
//     };
// };

// Get logs from server
export const getLogs = () => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs');
        const data = await res.json();

        dispatch({
            type: GET_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
        
};

// add log
export const addLog = (log) => async dispatch => {
    try {
        setLoading();

        const res = await fetch('/logs', {
            method: 'POST',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();

        dispatch({
            type: ADD_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
        
};

// delete log from server
export const deleteLog = (id) => async dispatch => {
    try {
        setLoading();

        fetch(`/logs/${id}`, {
            method: 'DELETE'
        });

        dispatch({
            type: DELETE_LOG,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
        
};

// update log on server
export const updateLog = log => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/logs/${log.id}`, {
            method: 'PUT',
            body: JSON.stringify(log),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json( )

        dispatch({
            type: UPDATE_LOG,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
        
};

// search logs from server
export const searchLogs = (text) => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`/logs?q=${text}`);
        const data = await res.json();

        dispatch({
            type: SEARCH_LOGS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: LOGS_ERROR,
            payload: err.response.data
        });
    }
        
};

//set current log for updating
export const setCurrent = log => {
    return {
        type: SET_CURRENT,
        payload: log
    }
} 

//clear current log 
export const clearCurrent = () => {
    return {
        type: CLEAR_CURRENT,
    }
}

// set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADINGS
    };
};