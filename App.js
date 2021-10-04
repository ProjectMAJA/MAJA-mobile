import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import {
  StyleSheet,
  View,
  Text,
  Button
} from 'react-native';

// const { Navigator, Screen} = createBottomTabNavigator();

const { Navigator, Screen } = createStackNavigator();

// Screens
import Nav from './src/screens/Nav';
import Home from './src/screens/Home';
import Team from './src/screens/Team';
import Contact from './src/screens/Contact';


// Icons
import logo from './src/assets/nav/logo.svg';
import house from './src/assets/nav/house.svg';
import search from './src/assets/nav/search.svg';
import musicalNote from './src/assets/nav/musical-note.svg';
import avatar from './src/assets/nav/avatar.svg';
import glasses from './src/assets/nav/glasses.svg';
import contact from './src/assets/nav/contact.svg';
import logout from './src/assets/nav/logout.svg';

const App = () => {

  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} />
        <Screen name="Team" component={Team} />
        <Screen name="Contact" component={Contact} />
      </Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
});

export default App;