import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: '#F5A9B8', // set the primary color of the theme
    },
  };
  const Register = () => {
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const handleButtonPress = () => {
      navigation.navigate("RegisterForm");
  }    
    return (
      
        <PaperProvider theme={theme}>
          <Button
            style={styles.button}
            labelStyle={styles.buttonText}
            mode="contained"
            onPress={() => {
              handleButtonPress();
              console.log('Pressed')}}
          >
            Register
          </Button>
        </PaperProvider>
      
    );
  };
  
const styles = StyleSheet.create({
 button: {
    padding: 10,
 }, 
buttonText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: '#f8f8ff',
    textTransform: 'uppercase',
},
  });
  
  
export default Register;