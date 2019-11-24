import React from 'react';
import { 
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity} from 'react-native';

import {getAllRoutes, getStopRoutes, getStopRoutesEstimation} from './APIFunctions';


export default class RouteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        dataSource:[]
    };
  }

  //CUSTOM PROPERTIES
  //target      -> ['all', 'bus_stop', 'bus_stop_estimation'] ('all' is default)
  //sort_by     -> ['bus_no', 'route_name'] (wont sort by default)
  //bus_stop_id -> can be passed any valid bus_stop_id (if no valid id is given when target 'bus_stop', list will be empty)

  //initialize data, this is dependent on the 'target' property
  componentDidMount(){

    switch(this.props.target){

      case 'bus_stop':
        getStopRoutes(this);
      break;

      case 'all':
      default:
        getAllRoutes(this);
      break;
    }
  }


  //update parent object with the stop that was selected
  selectRoute(stop){
    this.props.updateSelected(stop);
  }


  //render RouteList
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
            <TouchableOpacity style={styles.route} onPress={this.selectRoute.bind(this, item)}>
              <Text>{item.routeNumber}</Text>
              <Text>{item.name}</Text>
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
    backgroundColor: "#fff"
  },
  route:{
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