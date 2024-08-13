import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import Component from "./src/screens/Component";
import FlatListExample from "./src/screens/List";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component:Component,
    List:FlatListExample
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
