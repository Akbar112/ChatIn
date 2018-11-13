/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Menu from './src/pages/Menu';
import Signup from './src/pages/Signup';


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar
        backgroundColor="#002563"
        barStyle="light-content"/>
        <Menu/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
