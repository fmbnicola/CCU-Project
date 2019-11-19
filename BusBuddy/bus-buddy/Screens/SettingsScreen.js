import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SettingsScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff'}}>
        <Text> This is my Notifications screen </Text>
      </View>
    );
  }
}