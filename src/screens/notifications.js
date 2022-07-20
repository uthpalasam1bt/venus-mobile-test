import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Notifications = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
  },
});

export default Notifications;
