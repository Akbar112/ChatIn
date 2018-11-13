import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component<{}> {
    render(){
        return(
            <View style={styles.container}>
                <Logo />
                <Form type="Signup"/>
                <View style={styles.signupTextCont}>
                    <Text style={styles.signupText}>Already have an account yet?</Text>
                    <Text style={styles.signupButton}> Sign in</Text>
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
    backgroundColor: '#2a7a4e',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText:{
      color: 'rgba(255,255,255,0.6)',
      fontSize: 16
  },
  signupButton:{
      color:'#ffffff',
      fontSize: 16,
      fontWeight:'500'
  }
});
