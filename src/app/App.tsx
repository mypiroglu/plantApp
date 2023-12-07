import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import AppStack from './navigators/app-stack';

const App: React.FC = () => {
  return (
    <View style={style.root}>
      <StatusBar animated={true} hidden={true} />
      <Provider store={store}>
        <AppStack />
      </Provider>
    </View>
  );
};

const style = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
