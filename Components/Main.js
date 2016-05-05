import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Main extends React.Component{
  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.mainText}>Testing the Router</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  mainText: {
    fontFamily: 'ProximaNova, Helvetica, Arial, san-serif',
    fontSize: 36,
    color: 'white'
  }
});

module.exports = Main;