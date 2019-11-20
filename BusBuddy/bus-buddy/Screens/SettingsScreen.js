import React from 'react';
import { 
  View,
  Text} from 'react-native';

import BusStops from './API_components/BusStops';

export default class SettingScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <BusStops></BusStops>
      </View>
    );
  }
}
