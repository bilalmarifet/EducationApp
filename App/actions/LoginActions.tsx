import {LOGIN_CHANGE,LoginChangeAction,loginChangeType} from './types';





// export const LoginChange = ({ props: str, value }) =>  {
// return(dispatch) => {
//     dispatch({
//         type: LOGIN_CHANGE,
//         payload: {props,value}
//     });
// };
// };


export function LoginChange(props: string, value : string){
    console.log("LoginChangeAction");
    return{
        type: LOGIN_CHANGE,
        payload: {props, value}
    }
           
       
  }
  


//   export function updateSession(newSession: SystemState) {
//     return {
//       type: UPDATE_SESSION,
//       payload: newSession
//     };
//   }
  