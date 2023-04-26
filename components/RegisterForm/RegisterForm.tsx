import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const RegisterForm = () =>{
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const onSubmit = () => {
        console.log(`Email: ${email}, Password: ${password}`);
    }
    return(
        
            <View style={styles.container}>
            <Text style={styles.subheading1}>First Name</Text>
            <TextInput 
            style={styles.input}
            value={firstname}
            onChangeText={setFirstname}
            />
            <Text style={styles.subheading2}>Last Name</Text>
            <TextInput 
            style={styles.input}
            value={lastname}
            onChangeText={setLastname}
            />
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
            Register
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
        color: '#DE3163'
      },
      subheading1 : {
        textTransform: 'uppercase',
        paddingRight: 200,
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#F5A9B8'
      },
      subheading2 : {
        textTransform: 'uppercase',
        paddingRight: 210,
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#F5A9B8'
      },
    subheading3 : {
        textTransform: 'uppercase',
        paddingRight: 185,
        paddingLeft: 10,
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#F5A9B8'
      },
    subheading4 : {
        textTransform: 'uppercase',
        paddingRight: 210,
        paddingTop: 10,
        paddingBottom: 5,
        fontSize: 15,
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
export default RegisterForm;