import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


const LoginForm = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const onSubmit = () => {
        console.log(`Email: ${email}, Password: ${password}`);
        navigation.navigate('Home')
    }
    return(
        
        <View style={styles.container}>
        <Text style={styles.subheading3}>Email Address</Text>
        <TextInput 
        value={email}
        style={styles.input}
        onChangeText={setEmail}/>
          <Text style={styles.subheading4}>Password</Text>
        <TextInput 
        value={password}
        style={styles.input}
        secureTextEntry= {true}
        onChangeText={setPassword}/>
        <View style={styles.container2}>
        <Button
        style={styles.button}
        labelStyle={styles.buttonText} 
        onPress={onSubmit}>
        Login
      </Button>
        </View>
    </View> 
    )
  
} 
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      text: {
        marginTop: 300,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 32,
        paddingBottom: 30},
    input: {
        borderWidth: 2,
        borderColor: '#F5A9B8',
        borderRadius: 10,
        width: '80%',
        marginBottom: 10,
        padding: 10,
        color: '#DE3163',
      },
    subheading3 : {
        textTransform: 'uppercase',
        paddingRight: 185,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F5A9B8'
      },
    subheading4 : {
        textTransform: 'uppercase',
        paddingRight: 210,
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F5A9B8'
      },
      container2: {
        paddingTop: 50
      },
      button: {
        padding: 10,
        backgroundColor: '#F5A9B8'
     }, 
     buttonText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: '#fff',
        textTransform: 'uppercase',
        
    },
   
})
export default LoginForm;