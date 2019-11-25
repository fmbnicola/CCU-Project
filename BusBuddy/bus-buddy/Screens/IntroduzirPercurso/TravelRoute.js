import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, ActivityIndicator, Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default class TravelRoute extends React.Component {

    constructor(props) {
        super(props);
        var {params} = this.props.navigation.state;

        this.state = {
            loading: false,
            allStops: params.allStops,
            passedStops: [],
            upcomingStop_i: 0,
            upcomingStop: params.allStops[0],
            modalVisible: false,
            announceStop: false
        };
    }


    toggleModal(visible) {
        this.setState({ modalVisible: visible });
    }


    passByBusStop(){

        //add stop to passed stops
        let new_passedStops = this.state.passedStops;
        new_passedStops.push(this.state.upcomingStop);
    
        //increment upcoming stop index
        let new_upcomingStop_i = this.state.upcomingStop_i + 1;

        //otherwise, get new upcoming stop
        let new_upcomingStop = this.state.allStops[new_upcomingStop_i];

        //update state and clean input buffer
        this.setState({
            passedStops:    new_passedStops,
            upcomingStop_i: new_upcomingStop_i,
            upcomingStop:   new_upcomingStop,
            announceStop:   true
        })
    }

    componentDidUpdate(){
      
        if(this.state.upcomingStop_i == this.state.allStops.length-1){
            this.pressStop();
        }
        else if(this.state.announceStop){
            this.announceStop();

            this.setState({
                announceStop: false
            });
        }
    }
    
    pressStop(){
        const {navigate} = this.props.navigation;

        var lastStopName = this.state.upcomingStop.name;
        Alert.alert(
            'Ultima Paragem: ' + lastStopName,
            'Pressione o botão de Stop do autocarro para terminar a sua viagem.',
            [
              {text: 'Terminar', onPress: () => {navigate('Home')}},
            ],
            {cancelable: false},
        );
    }


    announceStop(){

        var stopName = this.state.upcomingStop.name;
        Alert.alert(
            'Próxima Paragem: ' + stopName,
            '',
            [
              {text: 'OK', onPress: () => {}},
            ],
            {cancelable: false},
        );
    }


    render(){
        const {navigate} = this.props.navigation;

        return(
            <View style = {{flexDirection:'column', alignItems:'center',justifyContent:'center', position:'relative', top:'15%',padding:5}}>
                
                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.modalVisible}
                >

                    <View style = {styles.modal}>

                        <Text  style={styles.Text2}>Paragens Anteriores</Text>
                        <FlatList style={styles.list}
                            
                            style={styles.list}

                            data= {this.state.passedStops}

                            extraData={this.state.passedStops}

                            keyExtractor={(item, index) => index.toString()}

                            renderItem = { ({ item }) => (
                                <View style={styles.stop}>
                                    <Text>{item.name}</Text>
                                </View>
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

                        <TouchableOpacity style={styles.close} onPress = {() => {this.toggleModal(!this.state.modalVisible)}}>
                            <Text style= {styles.endText2}>Fechar</Text>
                        </TouchableOpacity>

                    </View>
                </Modal>

                <Text style= {styles.Text}> Aproxima-se da Paragem:</Text>

                <View style = {styles.upcomingStop}>
                    <Text style= {styles.Text2}> {this.state.upcomingStop.name} </Text> 
                </View>

                <TouchableOpacity style= {styles.endTrip} onPress={() => {navigate('Home')}}>
                    <Text style= {styles.endText}>Terminar Viagem</Text>
                </TouchableOpacity>

                <TouchableOpacity style= {styles.passed} onPress={() => {this.toggleModal(!this.state.modalVisible)}}>
                    <Text style= {styles.endText}>Paragens Anteriores</Text>
                </TouchableOpacity>
                
                <View style={styles.next}>
                    <Text> (This button is here to simulate the bus moving)</Text>
                    <Button title='Next' onPress={() => {this.passByBusStop()}}></Button>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    list:{
        minWidth: '100%',
        margin: 5,
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
    },
    upcomingStop:{
    },
    next:{
        position: 'relative',
        top: 200
    },
    Text: {
        fontSize: 28,
        color: '#999',
        textAlign:'center',
    },
    Text2: {
        fontSize: 22,
        color: '#555',
        textAlign:'center',
        
    },
    endTrip: {
        display: 'flex',
        top: '50%',
        height: '15%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        //top: '30%',
   
        borderRadius:20,
        borderBottomWidth: 0.5,
        borderBottomColor:'grey',
        borderTopWidth: 0.5,
        borderTopColor:'grey',
        borderLeftWidth: 0.5,
        borderLeftColor:'grey',
        borderRightWidth: 0.5,
        borderRightColor:'grey',
        backgroundColor: '#47525E',
        //shadowColor: '#47525E',
        shadowColor: 'white',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    passed:{
        display: 'flex',
        height: '15%',
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        //top: '30%',
   
        borderRadius:20,
        borderBottomWidth: 0.5,
        borderBottomColor:'grey',
        borderTopWidth: 0.5,
        borderTopColor:'grey',
        borderLeftWidth: 0.5,
        borderLeftColor:'grey',
        borderRightWidth: 0.5,
        borderRightColor:'grey',
        backgroundColor: '#47525E',
        //shadowColor: '#47525E',
        shadowColor: 'white',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    },
    endText: {
        fontSize: 20,
        color:'white',
        textAlign:'center',
    },
    endText2: {
        fontSize: 15,
        color:'white',
        textAlign:'center',
    },
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 100
    },
    close:{
        height: 36,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',

        borderRadius:20,
        borderBottomWidth: 0.5,
        borderBottomColor:'grey',
        borderTopWidth: 0.5,
        borderTopColor:'grey',
        borderLeftWidth: 0.5,
        borderLeftColor:'grey',
        borderRightWidth: 0.5,
        borderRightColor:'grey',
        backgroundColor: '#47525E',
        shadowColor: 'white',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
    }
});