/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * 
 */
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import testtest from "./testtest";
import formScreen from "./src/screens/formScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Component : ComponentScreen,
    test : testtest,
    Form : formScreen
  },
  //first object
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
  //second object
); 

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};



