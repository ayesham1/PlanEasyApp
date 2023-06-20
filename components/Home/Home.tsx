import React from 'react';
import {
    StyleSheet,Text,View,Image,TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
const images = [
  { id: 1, source: require('../../assets/shopping.jpg') },
  { id: 2, source: require('../../assets/calculator.jpg') },
  { id: 3, source: require('../../assets/guest-list.jpg') },
  { id: 4, source: require('../../assets/notes.jpg') },
];

const Home = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
    const handleButtonPress = () => {
        navigation.navigate('ShoppingList');
    }          
    const handleGuestPress = () => {
      navigation.navigate('GuestList');
  }   
  const handlePlanBudget =() => {
    navigation.navigate('PlanBudget')
  } 
  const handleMakeNotes =() => {
    navigation.navigate('Notepad')
  }             
  return (
    <View style={styles.container1}>
    <Text style={styles.text}>Special day ahead?!</Text>
    <Text style={styles.text}>We've got you!</Text>
      <View style={styles.container2}>
        <View style={styles.column}>
          <TouchableOpacity style={styles.imageContainer} onPress={handleButtonPress}>
            <View style={styles.card}>
              <Image style={styles.images} source={images[0].source} />
              <Text style={styles.imageText}>Make Shopping Lists</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer} onPress={handlePlanBudget}>
            <View style={styles.card}>
              <Image style={styles.images} source={images[1].source} />
              <Text style={styles.imageText}>Plan Budget</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.column}>
          <TouchableOpacity style={styles.imageContainer} onPress={handleGuestPress}>
            <View style={styles.card}>
              <Image style={styles.images} source={images[2].source} />
              <Text style={styles.imageText}>Prepare Guest Lists</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.imageContainer} onPress={handleMakeNotes}>
            <View style={styles.card}>
              <Image style={styles.images} source={images[3].source} />
              <Text style={styles.imageText}>Take Notes</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text : {
    fontSize: 28,
    fontWeight: 'normal',
    color: '#ffa0b2',
  },
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 60,
    width: '100%',
  },
  images: {
    width: 140,
    height: 140,
    borderRadius: 8,
    overflow: 'hidden',
  },
  column: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    margin: 10,
  },
  card: {
    backgroundColor: '#F5A9B8',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  imageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    color: '#fff'
  },
});

export default Home;
