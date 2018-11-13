import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Menu extends Component<{}> {
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Form type="Login"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Don't have an account yet?</Text>
                    <Text style={styles.signupButton}> Signup</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText:{
      color: '#1953b5',
      fontSize: 16
  },
  signupButton:{
      color:'#1953b5',
      fontSize: 16,
      fontWeight:'500'
  }
});
