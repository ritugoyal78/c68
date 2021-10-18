
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//import { StatusBar } from 'expo-status-bar';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Transaction from './screens/Transaction';
import Search from './screens/Search';

export default class App extends React.Component {
  render(){
  return (
     <AppContainer/>
  );
  }
}

const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})
const AppContainer=createAppContainer(TabNavigator)
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'red',
    alignItems:'center',
    justifyContent:'center',
  },
})