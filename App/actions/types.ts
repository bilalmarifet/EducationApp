export const LOGIN_CHANGE = 'loginChange';

export interface LoginChangeAction {
    type: typeof LOGIN_CHANGE
    payload: {props : string, value:string}
  }

  
export interface loginChangeState {
    username : '',
    password : ''
  }


  export type loginChangeType =  LoginChangeAction