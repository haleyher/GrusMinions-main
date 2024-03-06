import { useState } from "react";
import { useAuthContext } from './useAuthContext';
import { AuthContextProvider } from "../context/AuthContext";
import fetch from 'node-fetch-native';


export const useLogin = () => {
  const [error, setError] = useState<boolean | null>();
  const [isLoading, setIsLoading] = useState<boolean | null>();
  const dispatch = useAuthContext();

  const login = async(userName, passwordAttempt) => {
    console.log(userName, passwordAttempt);
    setIsLoading(true);
    setError(null);

    // const data = {


    //         {userName},
    //         {passwordAttempt},
         
    //     }

    const response = await fetch("https://vectorapi-y9k3.onrender.com/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( userName, passwordAttempt ),
    }).then(response => {
            console.log(response.json());
          });

    // return response.json();

    console.log(response.json());
   



    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save user to local storage
      localStorage.setItem("user", JSON.stringify(json));

     
      {dispatch}({ type: "LOGIN", payload: json });

      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};