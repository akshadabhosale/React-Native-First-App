import Home from "./src/screens/Home";
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const navigation=createNativeStackNavigator({
  screens:{
    Home:Home
  },
  initialRouteName: 'Home',

});

const NavigationContainer=createStaticNavigation(navigation);


export default function App(){
  return <NavigationContainer/>
}

