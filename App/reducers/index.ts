import {combineReducers} from 'redux';
import {loginChangeReducer} from './LoginReducers';

// import RegisterReducers from './RegisterReducers';
// import MemberReducers from './MemberReducers';

export const rootReducer =  combineReducers({
    LoginResponse:loginChangeReducer,

})

export type AppState = ReturnType<typeof rootReducer>