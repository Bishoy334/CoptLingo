
import { Header } from "react-native-elements";
const menuIcon = require('../assets/images/icons/menu_icon 1.png');
const profileIcon = require('../assets/images/icons/account_icon 1.png');
import { View, Text, Button } from 'react-native';
import{NavigationContainer} from '@react-navigation/native'
import  {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginForm from "./loginForm";
import Index from "./index";
import Profile from "./profile";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      independent={true}
    >
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="login"
      >
        <Stack.Screen
          name="login"
          component={LoginForm}
        />
        <Stack.Screen 
          name="Index"
          component={Index}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;