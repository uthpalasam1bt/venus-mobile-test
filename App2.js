import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import SampleForm from './containers/SampleForm';
import {Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PaperProvider>
        <SampleForm />
      </PaperProvider>
    </Provider>
  );
};

export default App;
