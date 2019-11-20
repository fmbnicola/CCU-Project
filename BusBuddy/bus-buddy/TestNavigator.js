import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';


//import screens
import HomeScreen from "./Screens/HomeScreen"
import FavoritesScreen from "./Screens/FavoritesScreen"
import SettingsScreen from "./Screens/SettingsScreen"
import Percurso_inputBus from "./Screens/IntroduzirPercurso/Percurso_inputBus"
import Localizacao from "./Screens/MinhaLocalizacao/Localizacao"
import ParagensProx from "./Screens/ParagensProximas/ParagensProx"
import PlanearRot from "./Screens/PlanearRota/PlanearRot"

const TestNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  InputBus: {screen: Percurso_inputBus},
  Local: {screen: Localizacao},
  Paragens: {screen: ParagensProx},
  Rota: {screen: PlanearRot},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default TestNavigator;
