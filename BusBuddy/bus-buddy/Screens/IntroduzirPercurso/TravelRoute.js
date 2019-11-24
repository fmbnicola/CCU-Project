import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, Image, ActivityIndicator } from 'react-native';


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
        };
    }


    passByBusStop(){

        //add stop to passed stops
        let new_passedStops = this.state.passedStops;
        new_passedStops.unshift(this.state.upcomingStop);
    
        //increment upcoming stop index
        let new_upcomingStop_i = this.state.upcomingStop_i + 1;

        //if the upcoming stop is the last then we are done, press Stop
        if(new_upcomingStop_i == this.state.allStops.length-1){
            this.pressStop();
        }
        //otherwise, get new upcoming stop
        let new_upcomingStop = this.state.allStops[new_upcomingStop_i];
     

        //update state and clean input buffer
        this.setState({
            passedStops:    new_passedStops,
            upcomingStop_i: new_upcomingStop_i,
            upcomingStop:   new_upcomingStop
        })
    }

    
    pressStop(){
        const {navigate} = this.props.navigation;

        lastStopName = this.state.upcomingStop.name;
        Alert.alert(
            'Próxima Paragem: ' + {lastStopName},
            'Pressione o botão de Stop do autocarro para terminar a sua viagem.',
            [
              {text: 'OK', onPress: () => {navigate('Home')}},
            ],
            {cancelable: false},
        );
    }

    render(){
        const {navigate} = this.props.navigation;


        const upcomingStop = <View style = {styles.upcomingStop}>
                                <Text> {this.state.upcomingStop.name} </Text> 
                            </View>
        return(
            <View>
                {upcomingStop}
                <Button title='Next' onPress={() => {this.passByBusStop()}}></Button>


                <TouchableOpacity onPress={() => {navigate('Home')}}>
                    <Text>Terminar Viagem</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    upcomingStop:{
        top: 100,
    },
});