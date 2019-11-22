import React from 'react';
import { 
  View,
  Text} from 'react-native';


export default class SettingScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is the Settings screen </Text>
      </View>
    );
  }
}
