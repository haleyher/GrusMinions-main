import { StyleSheet, Pressable, TextInput, Button } from 'react-native';
import { Text, View} from '@/components/Themed';
import { Link } from 'expo-router';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import fetch from 'node-fetch-native';
import {useLogin} from './hooks/useLogin';


export default function TabTwoScreen() {

    const [userName, setUserName] = useState('');
    const [passwordAttempt, setPasswordAttempt] = useState('');
    const { login, error, isLoading } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        await login(userName, passwordAttempt);
      };
    
  
    return (
      <View style={styles.container} >
  
        <Text style={styles.h1}>RecycleQuest</Text>

      

        <View >
        <View style={styles.signin} >
          <View>
            <View>
            
              <TextInput
              style={styles.input}
                // value={userName}
                placeholder="Username"
                onChangeText={(text) => setUserName({userName:text})}
              />
            </View>
          </View>

          <View>
            <View>
             
              <TextInput
              style={styles.input}
                // value={passwordAttempt}
                placeholder="Password"
                onChangeText={(text) => setPasswordAttempt({passwordAttempt: text})}
              />
            </View>
          </View>
          <View>
            <Button title="Submit" /*</View>disabled={isLoading}*/ onPress={(e) => handleSubmit(e)}>
            <Text>Login</Text>
            </Button>
            {error && <div className="error">{error}</div>}
             <Link href="/signup"><Text style={styles.link}>Don't have an account? Sign Up!</Text></Link>
          </View>
        </View>
      </View>
       
     
      {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Username"
        />
        <TextInput
          secureTextEntry={true}
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Password"
          
          
        /> */}
  
      {/* <Link href="/home" asChild>
            <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
          </Link> */}


    {/* <Link href="/signup"><Text style={styles.link}>Don't have an account? Sign Up!</Text></Link> */}
  
     
       
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#EDFFCC',
    },
    signin:{
        alignItems: 'center',
    },

    link:{
        color: 'blue',

    },
    h1: {
        fontWeight: 'bold',
        fontSize: 16,
    
      },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      elevation: 3,
      backgroundColor: '#1B1F3B',
      
      marginBottom: 25,
      borderRadius: 12,
      color: "black",
  
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });
  