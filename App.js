import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from "./src/screens/SearchScreen"

const navigator = createStackNavigator({
 // need one screen
  Search: SearchScreen, // key can be anything we want.
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: "Business Search"
  } //can customize header
});

export default createAppContainer(navigator); // when we start up anything we export from this file is taken by react-native and shown so we need to export a component from this file. so we export navigator using createAppContainer which creates a default component.