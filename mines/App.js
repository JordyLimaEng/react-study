import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
import params from './src/params';



export default class App extends Component {

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text >Starting Mines!</Text>
        <Text >Size of the grid:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
        </Text>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});