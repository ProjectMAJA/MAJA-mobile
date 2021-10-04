import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import Nav from './Nav';

const Contact = ({ navigation }) => {

  return (
    <View style={styles.contact}>
      <Text>Page de contact</Text>
      <Nav navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default Contact;