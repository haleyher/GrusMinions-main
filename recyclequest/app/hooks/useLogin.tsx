import { useState } from "react";
import axios from 'axios';
import {NavigationHelpersContext, useNavigation} from '@react-navigation/native';
let x;


export const useLogin = () => {
  const [error, setError] = useState<boolean | null>();
  const [isLoading, setIsLoading] = useState<boolean | null>();
  const navigation = useNavigation();
  

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

    const json = await response;
  

    if (x == 0) {
      setIsLoading(false);
      setError(json.error);
      alert("Bad Username or Password");
    }

    if (x == 1) {
      // save user to local storage
      // localStorage.setItem("user", JSON.stringify(json));
  
      navigation.navigate('home', { replace: true });
      setIsLoading(false);
    }

  };

  return { login, isLoading, error };
};