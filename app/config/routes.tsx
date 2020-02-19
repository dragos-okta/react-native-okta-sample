import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StyleSheet, View, Text, Platform, Image } from 'react-native';
import colors from './colors';
import SplashScreen from '../pages/SplashScreen';

const App = createStackNavigator(
  {
    Splash: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
  }
);

export default createAppContainer(App);

const routesStyles = StyleSheet.create({
  badge: {
    position: 'absolute',
    right: -8,
    height: 18,
    // width: 18,
    backgroundColor: colors.$DFS_red,
  },
  badgeText: {
    // position: "absolute",
    // height: 12,
    // width: 12,
    color: colors.$white3,
    fontSize: 10,
  },
});
