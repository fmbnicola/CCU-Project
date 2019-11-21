import React from 'react';
import { 
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity} from 'react-native';

import {getAllRoutes, getStopRoutes} from './APIFunctions';


export default class RouteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loading: true,
        dataSource:[]
    };
  }

  //CUSTOM PROPERTIES
  //target      -> ['all', 'bus_stop', ...] ('all' is default)
  //sort_by     -> ['bus_no', 'route_name'] (wont sort by default)
  //bus_stop_id -> [any valid, bus stop id] (if no valid id is given wehn target 'bus_stop', list will be empty)

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
  route:{
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50
  }
});