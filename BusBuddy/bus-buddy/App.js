import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation'

import Icon from "react-native-vector-icons/FontAwesome";

//import screens
import HomeScreen from "./Screens/HomeScreen"
import FavoritesScreen from "./Screens/FavoritesScreen"
import SettingsScreen from "./Screens/SettingsScreen"

import TestNavigator from "./TestNavigator";

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

//Navigator -> Allows switching between different app screens
const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: TestNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={25} color={tintColor} />
        )
      }
    },
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" size={25} color={tintColor} />
        )
      }
    },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cog" size={25} color={tintColor} />
        )
      }
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#eb6e3d'
    }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);
