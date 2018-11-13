import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class Logo extends Component<{}> {
    render(){
        return(
            <View style={styles.container}>
            <Image style={{width: 116, height: 145}}
            source={require('../images/in.png')} />
            <Text style={styles.logoText}>Welcome to ChatIn.</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoText : {
    marginVertical: 15,
    fontSize: 18,
    fontWeight:'bold',
    color: '#1953b5'
  }
});
