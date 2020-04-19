import { GET_LOGS, SET_LOADINGS, LOGS_ERROR } from '../actions/types';


const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_LOGS:
            return{
                ... state, 
                logs: action.payload,
                loading:false
            };
        case SET_LOADINGS:
            return{
                ... state, 
                loading:true
            };
        case LOGS_ERROR:
            console.error(action.payload);
            return{
                ... state, 
                error:action.payload
            };
        default:
            return state;
    }
}