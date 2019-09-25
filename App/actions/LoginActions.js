import {LOGIN_CHANGE} from './types';





export const LoginChange = ({ props, value }) =>  {
return(dispatch) => {
    dispatch({
        type: LOGIN_CHANGE,
        payload: {props,value}
    });
};
};
