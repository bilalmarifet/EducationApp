import {LOGIN_CHANGE} from '../actions/types';

const INITIAL_STATE = {
    username: '',
    password: '',
}


export default (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case LOGIN_CHANGE: 
            return{...state,[action.payload.props]:action.payload.value};
        default:
            return state
    }
}