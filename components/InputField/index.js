import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputField = props => {
  return (
    <TextInput
      {...props}
      style={styles.textInput}
      value={props.input.value}
      onChangeText={props.input.onChange}
      onFocus={props.input.onFocus}
      onBlur={props.input.onBlur}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '85%',
    padding: 8,
    margin: 10,
    color: 'black',
    fontSize: 15,
  },
});

export default InputField;
