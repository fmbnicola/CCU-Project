import React from 'react';
import { 
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity} from 'react-native';

import {getAllBusStops, getNearestBusStops, getRouteBusStops} from './APIFunctions';


export default class BusStopList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        dataSource:[]
    };
  }


  //initialize data -> this is dependent on the 'target' prop which can 
  //take values ['all', 'nearest', 'route'...] ('all' is default)
  componentDidMount(){

    switch(this.props.target){

      case 'route':
          var route_no  = this.props.route_no;
          var direction = this.props.direction; 
          getRouteBusStops(this, route_no, direction);
      break;

      case 'nearest':
        //this will be replaced with actual coords of user
        var lat = '38.7363079';
        var lon = '-9.1365175';
        getNearestBusStops(this, lat, lon);
      break;

      case 'all':
      default:
        getAllBusStops(this);
      break;
    }
  }


  //update parent object with the stop that was selected
  selectStop(stop){
    this.props.updateSelected(stop);
  }


  //render busStopList
  render(){
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

          keyExtractor = { (item) => item.id.toString()}
          
          renderItem = { ({ item }) => (
            <TouchableOpacity style={styles.stop} onPress={this.selectStop.bind(this, item)}>
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}

          ItemSeparatorComponent={ () => (
            <View
              style={{
                height: 1,
                backgroundColor: "#CED0CE",
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
    backgroundColor: "#fff"
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
    backgroundColor: "#fff"
  },
  stop:{
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50
  }
});