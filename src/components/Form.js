import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export default class Logo extends Component<{}> {
    render(){
        return(
            <View style={styles.container}>
            <TextInput style={styles.inputBox}
             underlineColorAndroid='#1953b5'
             placeholder="Nomor Telefon"
             placeholderTextColor = "#1953b5"
             />
             <TextInput style={styles.inputBox}
             placeholder="Password"
             underlineColorAndroid='#1953b5'
             secureTextEntry={true}
             placeholderTextColor = "#1953b5"
             />
             <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{this.props.type}</Text>
             </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputBox: {
    width:300,
    backgroundColor: 'rgba(255,255,255,0.5)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize:16,
    color:'#1953b5',
    marginVertical : 10
  },
  button: {
    width: 300,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
      fontSize:18,
      fontWeight:'500',
      color:'#1953b5',
      textAlign:'center'
  }

});
