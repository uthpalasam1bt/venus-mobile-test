import React, {useState} from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Field, reduxForm} from 'redux-form';
import InputField from '../../components/InputField';

const SampleForm = props => {
  const onSubmit = values => {
    console.log(values);
    props.reset();
  };

  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
    <Provider>
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
      </View>

      <Portal>
        <FAB.Group
          fabStyle={{backgroundColor: '#00AA55'}}
          color="white"
          open={open}
          icon={open ? 'close' : 'plus'}
          actions={[
            {
              icon: 'content-save-outline',
              label: 'Save',
              onPress: () => console.log('Pressed Save'),
              style: {backgroundColor: '#333B46'},
              color: 'white',
              labelStyle: {backgroundColor: '#333B46', borderRadius: 50},
              labelTextColor: 'white',
            },
            {
              icon: 'clipboard-edit-outline',
              label: 'Request',
              onPress: () => console.log('Pressed Request'),
              style: {backgroundColor: '#333B46'},
              color: 'white',
              labelStyle: {backgroundColor: '#333B46', borderRadius: 50},
              labelTextColor: 'white',
            },
            {
              icon: 'folder-download-outline',
              label: 'Download',
              onPress: () => console.log('Pressed Download'),
              style: {backgroundColor: '#333B46'},
              color: 'white',
              labelStyle: {backgroundColor: '#333B46', borderRadius: 50},
              labelTextColor: 'white',
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </Provider>
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
