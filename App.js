import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

const App = () => {
  const [inputValues, setInputValues] = useState({
    input1: '',
    input2: '',
    input3: '',
  });

  const inputChangehandler = (identifier, enteredValue) => {
    setInputValues(currentValues => {
      return {...currentValues, [identifier]: enteredValue};
    });
  };

  const submitHandler = () => {
    console.log(inputValues);
  };

  const actions = [
    {
      text: 'Accessibility',
      icon: require('./images/pngwing.png'),
      name: 'bt_accessibility',
      position: 2,
    },
    {
      text: 'Language',
      icon: require('./images/pngwing.png'),
      name: 'bt_language',
      position: 1,
    },
    {
      text: 'Location',
      icon: require('./images/pngwing.png'),
      name: 'bt_room',
      position: 3,
    },
    {
      text: 'Video',
      icon: require('./images/pngwing.png'),
      name: 'bt_videocam',
      position: 4,
    },
  ];

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Sample Form</Text>
        <TextInput
          value={inputValues.input1}
          placeholder="input 1"
          style={styles.textInput}
          onChangeText={inputChangehandler.bind(this, 'input1')}
        />
        <TextInput
          value={inputValues.input2}
          placeholder="input 2"
          style={styles.textInput}
          onChangeText={inputChangehandler.bind(this, 'input2')}
        />
        <TextInput
          value={inputValues.input3}
          placeholder="input 3"
          style={styles.textInput}
          onChangeText={inputChangehandler.bind(this, 'input3')}
        />
        <View style={styles.button}>
          <Button title="Button" color="#5e0acc" onPress={submitHandler} />
        </View>
      </View>
      <View>
        <FloatingAction
          actions={actions}
          color="#5e0acc"
          onPressItem={name => {
            console.log(`selected button: ${name}`);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    color: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '85%',
    padding: 8,
    margin: 10,
    color: 'black',
    fontSize: 15,
  },
  button: {
    width: 100,
    margin: 10,
  },
});

export default App;
