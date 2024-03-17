import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {NavigationHelpersContext, useLinkProps, useNavigation} from '@react-navigation/native';



export type RootStackParamList = {

    Login: undefined;
    
    // Tabs: {userName: string} | undefined;
    
    Home: undefined;

    Signup: undefined;

    Results: undefined;

    Camera: undefined;

   
   };

   export type LoginScreenProps = NativeStackScreenProps< 

   RootStackParamList,
   
   "Login"
  
  >;
  
  
//   export type HomeScreenProps = NativeStackScreenProps<
   
//    RootStackParamList,
   
//    "Home"
  
//   >;
  