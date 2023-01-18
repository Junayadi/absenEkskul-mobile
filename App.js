/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Button} from 'react-native';

import {launchImageLibrary} from 'react-native-image-picker';
const options = {
  title: 'Select image',
  type: 'library',
  options: {
    maxHeight: 200,
    maxWidth: 200,
    SelectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
  },
};
const App = () => {
  const openGallery = async () => {
    const image = await launchImageLibrary(options);
    console.log(image);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button title="Upload timestamp" onPress={openGallery}></Button>
    </View>
  );
};

export default App;
