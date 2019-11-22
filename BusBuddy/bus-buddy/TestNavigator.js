import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack';


//import screens
import HomeScreen from "./Screens/HomeScreen"
import Percurso_inputBus from "./Screens/IntroduzirPercurso/Percurso_inputBus"
import Localizacao from "./Screens/MinhaLocalizacao/Localizacao"

// I left these lines here so you can test the three "example" screens that
// have the following elements and show how to implement them, respectively:
//    BusList     - get list of buses and arrival time estimation for each
//    RouteList   - get list of routes this can be all routes, routes that pass by a specific stop
//    BusStopList - get list of all busStops, nearest bus stops or busStops in a route
// to test, comment the first line and uncomment one of the others to easily navigate there

import ParagensProx from "./Screens/ParagensProximas/ParagensProx"
//import ParagensProx from "./Screens/ParagensProximas/BusEstimationScreen"
//import ParagensProx from "./Screens/ParagensProximas/RoutesForSpecificStopScreen"
//import ParagensProx from "./Screens/ParagensProximas/NearestStopsScreen"

import PlanearRot from "./Screens/PlanearRota/PlanearRot"
import ConfirmBus from "./Screens/IntroduzirPercurso/ConfirmBusNumber"
import BusDirection from "./Screens/IntroduzirPercurso/BusDirection"


const TestNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  InputBus: {screen: Percurso_inputBus},
  Local: {screen: Localizacao},
  Paragens: {screen: ParagensProx},
  Rota: {screen: PlanearRot},
  ConfirmBus: {screen: ConfirmBus},
  BusDir: {screen: BusDirection}
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

export default TestNavigator;
