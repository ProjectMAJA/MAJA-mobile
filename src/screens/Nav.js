import React from 'react';
import {
  StyleSheet,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

import Svg, { Path } from 'react-native-svg';

import logo from '../assets/nav/logo.svg';

const fullScreenWidth = Dimensions.get('window').width;

const Nav = ({ navigation }) => {

  return (
    <View style={styles.nav}>
      <TouchableOpacity onPress={() => {navigation.navigate('Home')}}>
        <Image
          style={styles.logo}
          source={require('../assets/nav/logo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Team')}}>
        <Image
          style={styles.logo}
          source={require('../assets/nav/logo.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Contact')}}>
        <Image
          style={styles.logo}
          source={require('../assets/nav/logo.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    position: 'absolute',
    bottom: 0,
    width: fullScreenWidth,
    backgroundColor: 'black',
    flexDirection: 'row'
  },
  logo: {
    height: 50,
    width: 50
  }
});

export default Nav;