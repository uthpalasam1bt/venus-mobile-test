import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Scheme = ({route}) => {
  console.log(route);
  const name = route.params.schemeName;
  const id = route.params.schemeId;
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>{name}</Text>
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

export default Scheme;
