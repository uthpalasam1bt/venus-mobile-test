import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';

import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Schemes = ({navigation}) => {
  const [schemes, setSchemes] = useState([
    {id: 1, name: 'scheme 1'},
    {id: 2, name: 'scheme 2'},
    {id: 3, name: 'scheme 3'},
    {id: 4, name: 'scheme 4'},
    {id: 5, name: 'scheme 5'},
    {id: 6, name: 'scheme 6'},
    {id: 7, name: 'scheme 7'},
    {id: 8, name: 'scheme 8'},
    {id: 9, name: 'scheme 9'},
    {id: 10, name: 'scheme 10'},
  ]);

  return (
    <View style={styles.mainContainer}>
      <FlatList
        data={schemes}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              navigation.navigate('scheme', {
                schemeName: item.name,
                schemeId: item.id,
              });
            }}>
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  text: {
    color: '#2BABE2',
    fontSize: 20,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    margin: 20,
    padding: 20,
    borderColor: 'black',
    borderWidth: 0.5,
  },
});

export default Schemes;
