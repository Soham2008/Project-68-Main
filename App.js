import React from "react";
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './screens/fb';
import Instagram from './screens/in';
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaProvider>
      <AppContainer/>
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:Facebook},
  Instagram:{screen:Instagram}
});

const AppContainer = createAppContainer(TabNavigator);