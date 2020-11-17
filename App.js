/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * 
 */

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen, 
    Component : ComponentScreen
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

export default App;

