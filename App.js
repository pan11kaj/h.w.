import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './Screens/Welcome';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import { StudentNavigator } from './components/StudentNavigator';
import { TeacherNavigator } from './components/TeacherNavigator';
import DoHomeWork from './StudentScreens/DoHomeWork';

export default function App() {
  return (
    <View style={{flex:1}}>
    <AppContainer/>
    </View>
  );
}
const Navigator = createSwitchNavigator({
  Welcome:WelcomeScreen,
  homework:DoHomeWork,
  tabs:{screen:StudentNavigator},
  tab2:{screen:TeacherNavigator},

})
const AppContainer = createAppContainer(Navigator)
