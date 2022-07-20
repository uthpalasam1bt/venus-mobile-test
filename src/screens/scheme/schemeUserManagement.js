import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const SchemeUserManagement = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Scheme UserManagement</Text>
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

export default SchemeUserManagement;
