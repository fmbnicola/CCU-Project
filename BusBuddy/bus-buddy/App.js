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
    Navegar: {
      screen: TestNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={35} color={tintColor} />
        )
      }
    },
    Favoritos: {
      screen: FavoritesScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="star" size={35} color={tintColor} />
        )
      }
    },
    Definições: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="cog" size={35} color={tintColor} />
        )
      }
    },
  },
  {
    initialRouteName: 'Navegar',
    tabBarOptions: {
      activeTintColor: '#FFD214',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#005389',
        height: 60
      }
    }
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);
