import React from 'react';
interface photoContextType {
    photo: string;
  }
const photoContext = React.createContext<photoContextType | null>(null);
export default photoContext