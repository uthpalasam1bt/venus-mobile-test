import React, {useState} from 'react';
import {FAB, Portal, Provider} from 'react-native-paper';
import {StyleSheet} from 'react-native';

const FolatingButton = props => {
  const [state, setState] = useState({open: false});

  const onStateChange = ({open}) => setState({open});

  const {open} = state;

  return (
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
  );
};

const styles = StyleSheet.create({});

export default FolatingButton;
