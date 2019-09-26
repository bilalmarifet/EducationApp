import {LOGIN_CHANGE,LoginChangeAction,loginChangeState} from '../actions/types';

const INITIAL_STATE : loginChangeState = {
    username: '',
    password: '',
}


export function loginChangeReducer(
    state = INITIAL_STATE,
    action : LoginChangeAction) : loginChangeState{

    console.log("LoginReducers")
    switch(action.type) {
        case LOGIN_CHANGE: 
            return{...state,[action.payload.props]:action.payload.value};
        default:
            return state
    }

    }

