import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

//this component is created as a const because it is stateless (no logic needed)
const Header = (props) => {

    return (
        <View style={styles.header}>
            <Text style={styles.title}> {props.title} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#171717',
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#F3f3f3',
        fontSize: 28,
        fontWeight: '900',
        textTransform: 'uppercase'
    }
});

//this enables us to access the 'header component' elsewhere
//imported in app.js
export default Header;