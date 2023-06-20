import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Home from './components/Home/Home';
import ShoppingLists from './components/ShoppingLists';
import PrepareGuestList from './components/PrepareGuestList';
import PlanBudget from './components/PlanBudget';
import MakeNotes from './components/MakeNotes';
import Sign from './components/Sign';
import LoginForm from './components/LoginForm/LoginForm';
import RegisterForm from './components/RegisterForm/RegisterForm';
import Carousel from 'react-native-snap-carousel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Notepad from './components/MakeNotes';

const Stack = createStackNavigator();

const App = () => {
  return(
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen
       name="HomeScreen" 
       component={HomeScreen} 
       options={{ headerShown: false }} 
      />
      <Stack.Screen
       name="LoginForm" 
       component={LoginForm} 
       options={{ headerShown: false }} 
      />
      <Stack.Screen
       name="RegisterForm" 
       component={RegisterForm} 
       options={{ headerShown: false }} 
      />
      <Stack.Screen
       name="Sign" 
       component={Sign} 
       options={{ headerShown: false }} 
      />
      <Stack.Screen
       name="Home"
       component={Home}
       options={{headerShown: false}}
      />
      <Stack.Screen
       name="ShoppingList"
       component={ShoppingLists}
       options={{headerShown: false}}
      />
      <Stack.Screen
       name="GuestList"
       component={PrepareGuestList}
       options={{headerShown: false}}
      />
      <Stack.Screen
       name="PlanBudget"
       component={PlanBudget}
       options={{headerShown: false}}
      />
      <Stack.Screen
       name="Notepad"
       component={Notepad}
       options={{headerShown: false}}
      />
     </Stack.Navigator>
    </NavigationContainer>
  );
};
function HomeScreen () {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const handleTextPress = () => {
    navigation.navigate('Sign', {});
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={require('./assets/upcoming.png')} />
        <Text style={styles.headerText}>PlanEasy!</Text>
        <TouchableOpacity style={styles.headerButton}>
          <Text style={styles.headerButtonText} onPress={handleTextPress}>Sign In</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>Hello, Welcome!</Text>
        <Carousel
          layout={'default'}
          data={[
            { image: require('./assets/gift.jpg') },
            { image: require('./assets/cake.jpg') },
            { image: require('./assets/balloons.jpg') },
          ]}
          renderItem={({ item }) => (
            <Image source={item.image} style={styles.carousel} />
          )}
          sliderWidth={300}
          itemWidth={300}
          loop={true}
          autoplay={true}
          autoplayInterval={3000}
        />
        <View style={styles.footer}>
        <Text style={styles.title}>Plan Your Perfect Occasion</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 40,
    width: '100%',
    height: 80,
    backgroundColor: '#F5A9B8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  logo: {
    width: 50,
    height: 50,
    
  },
  headerText:{
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  headerButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F5A9B8',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  contentText : {
    paddingTop: 30,
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F5A9B8',
  },
  carousel: {
    marginTop: 50,
    width: 300,
    height: 330,
     
  },
  footer: {
    marginBottom: 50
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#F5A9B8',
  },
  button: {
    backgroundColor: '#F5A9B8',
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center'
  },
});

export default App;