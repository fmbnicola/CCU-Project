import React from 'react';
import { 
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity} from 'react-native';

import {getBusStopEstimation} from './APIFunctions';


export default class BusList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        serviceDown: false,
        dataSource:[]
    };
  }

  //CUSTOM PROPERTIES
  //bus_stop_id -> can be passed any valid bus_stop_id (if no valid id is given when target 'bus_stop', list will be empty)
  //num_results -> can be used when target 'bus_stop_estimation' to dictate number os results in list (default is 3)

  //initialize data, this is dependent on the 'target' property
  componentDidMount(){

    getBusStopEstimation(this);
 
  }


  //update parent object with the stop that was selected
  selectBus(stop){
    this.props.updateSelected(stop);
  }


  //render RouteList
  render(){
    if(this.state.serviceDown){
      return( 
        <View style={styles.loader}> 
          <Text>Estimation Service is down.</Text>
          <Text>Sorry for the inconvenience.</Text>
        </View>
    )}
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    return(
     <View style={styles.container}>
      <FlatList style={styles.list}

          data= {this.state.dataSource}

          keyExtractor={(item, index) => index.toString()}
          
          renderItem = { ({ item }) => (
            <TouchableOpacity style={styles.bus} onPress={this.selectBus.bind(this, item)}>
              <Text>{item.routeNumber} - {item.routeName}</Text>
              <Text>Sentido: {item.destination}</Text>
              <Text>{item.timeLeft} mins</Text>
            </TouchableOpacity>
          )}

          ItemSeparatorComponent={ () => (
            <View
              style={{
                height: 7,
                backgroundColor: "transparent",
              }}
            />
          )}
        />
      </View>
    )
  }
  
}

//Stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '80%',
    
  },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list:{
    minWidth: '100%',
    margin: 5,
    backgroundColor: "#fff",
  },
  bus:{
    alignItems: "center",
    minHeight: 50,
    backgroundColor: "#f2f2f2",
    borderRadius:20,
    borderBottomWidth: 0.5,
    borderBottomColor:'grey',
    borderTopWidth: 0.5,
    borderTopColor:'grey',
    borderLeftWidth: 0.5,
    borderLeftColor:'grey',
    borderRightWidth: 0.5,
    borderRightColor:'grey',
  }
});