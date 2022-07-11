import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import InputField from '../../components/InputField';
import FolatingButton from '../../components/FloatingButton';
import Sidebar from '../../components/Sidebar';

const SampleForm = props => {
  const onSubmit = values => {
    console.log(values);
    props.reset();
  };

  return (
    <>
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>Sample Form</Text>
        <Field component={InputField} placeholder="Input 1" name="Input1" />
        <Field component={InputField} placeholder="Input 2" name="Input2" />
        <Field component={InputField} placeholder="Input 3" name="Input3" />
        <View style={styles.button}>
          <Button
            title="Button"
            color="#00AA55"
            onPress={props.handleSubmit(onSubmit)}
          />
        </View>
        <Sidebar />
      </View>

      <FolatingButton />
    </>
  );
};

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
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
    borderRadius: '50%',
    margin: 10,
  },
});

export default reduxForm({
  form: 'SampleForm',
})(SampleForm);
