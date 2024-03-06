import { createContext, useReducer, useEffect } from 'react';
import React from 'react';



export const AuthContext = createContext({signed: true});

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}'); // the local storage is a json, we are making it into an object
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []); // firing a function when the component renders

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};