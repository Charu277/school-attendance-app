import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen';
import SummaryScreen from './screens/SummaryScreen';
import AppHeader from './components/AppHeader';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';

export default  class App extends React.Component{
  
  render(){
    return(
      <View>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
}
var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen
})
const AppContainer=createAppContainer(AppNavigator);