import React from 'react';
import { 
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity} from 'react-native';


const api_root = "https://carris.tecmic.com/";

export default class BusStops extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
          loading: true,
          dataSource:[]
      };
  }

  //initialize data
  componentDidMount(){
    this.requestInfo();
  }

  //load element with data
  requestInfo(){
    fetch(api_root + "api/v2.5/busstops", {method: 'GET'})
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
        loading: false,
        dataSource: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
  }


  FlatListItemSeparator = () => {
    return (
      <View style={{
         height: .5,
         width:"100%",
         backgroundColor:"rgba(0,0,0,0.5)",
    }}
    />
    );
  }
    
  renderItem=(data)=> {
    <TouchableOpacity style={styles.list}>
      <Text style={styles.lightText}>ola</Text>
    </TouchableOpacity>
  }

  render(){
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    return(
     <View style={styles.container}>
     <FlatList
        data= {this.state.dataSource}
        ItemSeparatorComponent = {this.FlatListItemSeparator}
        renderItem= {item=> this.renderItem(item)}
        keyExtractor= {item=>item.id.toString()}
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
    paddingVertical: 4,
    margin: 5,
    backgroundColor: "#fff"
   }
});