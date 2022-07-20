import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Reports = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>Reports</Text>
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

export default Reports;
