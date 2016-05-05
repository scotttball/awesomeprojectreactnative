import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import Main from './Components/Main';

class AwesomeProject extends Component {
  render () {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'My First Scene', index: 0}}
        renderScene={(route, navigator) =>
          <Main
            name={route.name}
            onForward={() => {
              var nextIndex = route.index + 1;
              navigator.push({
                name: 'Main ' + nextIndex,
                index: nextIndex,
              });
            }}
            onBack={() => {
              if (route.index > 0) {
                navigator.pop();
              }
            }}
          />
        }
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
