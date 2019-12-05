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

  //CUSTOM PROPERTIES
  //target       -> ['all', 'nearest', 'route'...] ('all' is default)

  //To be used when target='route':
  //route_no     -> (mandatory) must be a valid route_number
  //initial_stop -> (mandatory*) must be a valid bus_stop_id, will cut the list short if its not the first stop in route
  //final_stop   -> (mandatory*) must be a valid bus_stop_id, will cut the list short if its not the last stop in route (also dictates direction)
  //*provide either both or neither props
  //if you provide both:
  //include      -> (optional) must be array [a,b] where a (initial), b (final) = {0 | 1} dictate wether to include initial and final stop in list
  //ie: [0,0] means to include neither, [0,1] means to include the final stop but not the initial (default is [1,1])

  //initialize data, this is dependent on the 'target' property
  componentDidMount(){

    switch(this.props.target){

      case 'route':
          getRouteBusStops(this);
      break;

      case 'nearest':
        //FIXME: this will be replaced with actual coords of user
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

          accessibilityLabel='Lista de Paragens'

          data= {this.state.dataSource}

          keyExtractor = { (item) => item.id.toString()}

          renderItem = { ({ item }) => (
            <TouchableOpacity
            accessibilityRole={this.props.access}
            style={styles.stop} onPress={this.selectStop.bind(this, item)}>
              <Text>{item.name}</Text>
              <Text>{item.publicId}</Text>
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
    backgroundColor: "#fff",

  },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  list:{
    minWidth: '100%',
    backgroundColor: "#fff",
  },
  stop:{
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
