/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';
import {Text} from 'react-native';

const App: () => JSX.Element = () => {
  //return <Text>Hey</Text>;
  return (
    <RTNCenteredText text="Hello World!" style={{width: '100%', height: 30}} />
  );
};

export default App;
