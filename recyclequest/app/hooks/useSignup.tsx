import { useState } from "react";
import fetch from 'node-fetch-native';
import axios from 'axios';

export const useSignup = () => {
  const [error, setError] = useState<boolean | null>();
  const [isLoading, setIsLoading] = useState<boolean | null>();


  const signup = async (displayName, userName, password, county) => {
    console.log(displayName, userName, password, county);
    setIsLoading(true);
    setError(null);

    const mergedJSON = Object.assign({}, displayName, userName, password, county); 

    console.log(mergedJSON)

 
const response = axios.post('https://vectorapi-y9k3.onrender.com/api/users', mergedJSON, 
{"headers": {
    
  "content-type": "application/json",
  
  },
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error("Error sending data: ", error);
}); 

    const json = await response;

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      setIsLoading(false);
      return true;
    }
  };

  return { signup, isLoading, error };
};