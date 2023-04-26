import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import Login from './Login';
import Register from './Register';
import React from 'react';
const Sign = () => {
    return(
        <View style={styles.container}>
            <Image source={require('../assets/login.png')} style={styles.image}/>
            <View style={styles.container2}>
             <Login/>
             </View>
            <View style={styles.container3}>
            <Register/>
            </View>
            
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFAFA'
    },
    container2: {
        position: 'absolute',
        top: 200,
        width: '100%',
        alignItems: 'center',
        marginTop: 200
    },
    image: {
        marginBottom:300,
        width: 200,
        height: 200 
    },
    container3: {
        position: 'absolute',
        bottom: 100,
        width: '100%',
        alignItems: 'center',
        marginBottom: 100
    },
})
export default Sign;