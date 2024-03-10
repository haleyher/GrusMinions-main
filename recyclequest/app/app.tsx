import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./login";
import Signup from "./signup";
import Home from "./(tabs)/home";
import { useEffect, useState } from "react";
import { Stack } from 'expo-router';
import * as React from 'react';

function App() {
  const user  = useAuthContext();
  const [loggedIn, setLoggedIn] = useState(null);
  const Stack = createNativeStackNavigator();


  // makes sure that we check if the user is logged in, only if the user is logged in can be
  useEffect(() => {
    setLoggedIn(Boolean(user));
  }, [user]);

  return (
    <NavigationContainer>
      {loggedIn !== null && (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component = {Login}
            element={!user ? <Login /> : <Navigate to="/home" />}
          />
          <Stack.Screen
            exact
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/home" />}
          />

          <Stack.Screen
            exact
            path="/"
            element={!user ? <Navigate to="/login" /> : <Home />}
          />

          <Stack.Screen
            exact
            path="/generator"
            element={user ? <Generator /> : <Navigate to="/login" />}
          />

          <Stack.Screen
            exact
            path="/home"
            element={user ? <Home /> : <Navigate to="/login" />}
          />

          <Stack.Screen path="*" element={<Navigate to="/" />} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default App;