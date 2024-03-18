import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from "./login";
import Signup from "./signup";
import Results from "./results"
import Camera from "./(tabs)/camera"
import * as React from 'react';
import { RootStackParamList } from './hooks/types';
import tabs from './(tabs)/tabs'
import HomeScreen from './(tabs)/home';

function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
  
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component = {LoginScreen}
          />

          <Stack.Screen
            name="Signup"
            component = {Signup}
          />
          
          <Stack.Screen
           name="Results"
            component = {Results}
          />

          <Stack.Screen
            name = "Camera"
            component = {Camera}
      
          />

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            // options={{ headerShown: false }}
            
          />

        </Stack.Navigator>
     
    </NavigationContainer>
  );
}

export default App;