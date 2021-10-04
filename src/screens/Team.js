import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Nav from './Nav';

const Team = ({ navigation }) => {

  return (
    <View style={styles.team}>
      <Text>Page de l'équipe</Text>
      <Nav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  team: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Team;