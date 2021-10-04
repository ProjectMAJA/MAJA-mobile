import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native';

import Nav from './Nav';

const Home = ( {navigation} ) => {

  return (
    <View style={styles.home}>
      <Text>Page d'accueil</Text>
      <Nav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Home;