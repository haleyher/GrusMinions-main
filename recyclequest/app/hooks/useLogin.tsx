import { useState } from "react";
import axios from 'axios';
import {NavigationHelpersContext, useLinkProps, useNavigation} from '@react-navigation/native';
import { LoginScreenProps, RootStackParamList } from "./types";
import * as RootNavigation from './RootNavigation';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'; 


let x;

export const useLogin = () => {
  const [error, setError] = useState<boolean | null>();
  const [isLoading, setIsLoading] = useState<boolean | null>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const login = async(userName, passwordAttempt) => {
    setIsLoading(true);
    setError(null);

    const mergedJSON = Object.assign({},userName, passwordAttempt); 
    console.log(mergedJSON)

    const response =  axios.post('https://vectorapi-y9k3.onrender.com/api/login', mergedJSON, 
    {"headers": {
  
      "content-type": "application/json",
      
      },
    })
    .then(response => {
      console.log(response.data);
      const myJSON = response.data; 
      x = myJSON.loginStatus
    })
    .catch(error => {
      console.error("Error sending data: ", error);
    }); 

    const data = response;
    console.log(data);
    const json = await response;
    console.log(x);

    if (x == 0) {
      setIsLoading(false);
      setError(json.error);
      alert("Bad Username or Password");
    }

    if (x == 1) {
      console.log(userName.userName);
      var bob = userName.userName;
      console.log(bob);
    
      // navigation.navigate('Tabs', {
      //   screen: 'Home', 
      //   params: {userName:bob},
      // });


      navigation.navigate('home');

      setIsLoading(false);
    }

  };

  return { login, isLoading, error };
};