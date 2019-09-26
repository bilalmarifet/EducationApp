import React, {Component } from 'react';

import { Text,View, Button,TouchableOpacity,StyleSheet,TextInput} from 'react-native';
import Fonts from '../Theme/Fonts'
import {LoginChange} from '../actions'
import { AppState } from '../reducers'
import { connect } from 'react-redux';
import {loginChangeState} from '../actions/types'

// import { stat } from 'fs';


interface AppProps {
    usernamePassword : loginChangeState
    LoginChange : typeof LoginChange
  }

class SignInScreen extends React.Component<AppProps> {


    

    render() {
        return(
            <View style ={{flex:1,flexDirection:'column', alignItems:'center',justifyContent:'center'}}>
            <View style={{marginTop:-150,alignSelf: 'stretch',shadowColor: '#E4E4E4',backgroundColor: 'white',
    
    shadowOffset: {width: 3, height: 3 },
    shadowOpacity: .5,
    borderRadius: 5,paddingTop:20,paddingLeft:20,paddingRight:20,paddingBottom:20,marginHorizontal:10}} >
            <TextInput placeholder="Username"  value={this.props.usernamePassword.username} onChangeText={temp => this.props.LoginChange('username',temp)} style={styles.userName}></TextInput>
            <TextInput secureTextEntry={true} placeholder="Password" value={this.props.usernamePassword.password} onChangeText={temp => this.props.LoginChange('password',temp )} style={styles.userName}></TextInput>
            <TouchableOpacity style={styles.loginScreenButton} onPress={()=>console.log("Button")} >
          <Text style={styles.loginText}>SignIn</Text>
 </TouchableOpacity>
 <TouchableOpacity style={{marginTop:20}}>
     <Text style={styles.forgotPassword}>
        Forgot Password
     </Text>
     
 </TouchableOpacity >
            </View>
        </View>
        )

    }
}

const styles = StyleSheet.create({
    loginScreenButton:{
        
        // marginRight:40,
        // marginLeft:40,
        paddingRight:100,
        paddingLeft:100,
       marginTop:10,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:'#1998AC',

        borderWidth: 1,
        borderColor: '#1998AC',
        shadowColor: '#1998AC',
    shadowOffset: {width: 3, height: 3 },
    shadowOpacity: .5,
    borderRadius: 5,
      },
      loginText:{
        ...Fonts.style.normal,
          color:'#fff',
          textAlign:'center',
          paddingLeft : 10,
          paddingRight : 10
      },userName:{
          ...Fonts.style.normal,
          marginTop: 20,
          marginBottom:10
          
      },forgotPassword:{
            // Object.assign(Fonts.size.small),
            color:'#c0c0c0',
            alignSelf:'flex-end'
            
      }
  });
  

// mapStateToProps = (state) => {
//     const { username, password, loading, success, isTried } = state;
//   return {
//     username,
//     password,
//     loading,
//     success,
//     isTried,
//   };
// }

// mapDispatchToProps = (dispatch) => {
//     return {
//         onTextChange : (text) => {
//             dispatch(onTextChangeAction(text));
//         }
//     }
// }
// const mapStateToProps = () AppState ) => {
//     const { username, password } = LoginResponse;
//     return {
//         username,
//         password,
//     };

//   };

  const mapStateToProps = (state: AppState) => ({
        usernamePassword : state.LoginResponse

  })





  export default connect(mapStateToProps, { LoginChange})(SignInScreen)