import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import Field from './src/components/Field';
import params from './src/params';



export default class App extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text >Starting Mines!</Text>
        <Text >Size of the grid:
          {params.getRowsAmount()}x{params.getColumnsAmount()}
          <Field></Field>
          <Field opened></Field>
          <Field opened nearMines={1}></Field>
          <Field opened nearMines={2}></Field>
          <Field opened nearMines={3}></Field>
          <Field opened nearMines={6}></Field>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});