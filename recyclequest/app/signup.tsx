import { StyleSheet, Pressable, TextInput,Button  } from 'react-native';
import { Text, View} from '@/components/Themed';
import { Link } from 'expo-router';
import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import fetch from 'node-fetch-native';
import {useSignup} from './hooks/useSignup';

export default function TabTwoScreen(props: { onPress: any; title?: "Sign In" | undefined; }) {
  const { onPress, title = 'Sign Up' } = props;
  const [displayName, setDisplayName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [county, setCounty] = useState('');
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(displayName, userName, password, county);
  };


  

  return (
    <View style={styles.container}>

      <Text style={styles.h1}>RecycleQuest</Text>
     
      <View >
        <View  >

        <View>
            <View style = {styles.box}>
            
              <TextInput
              style={styles.input}
                placeholder="Display Name"
                onChangeText={(text) => setDisplayName({displayName:text})}
              />
            </View>
          </View>
          <View>
            <View style = {styles.box}>
            
              <TextInput
              style={styles.input}
                placeholder="Username"
                onChangeText={(text) => setUserName({userName:text})}
              />
            </View>
          </View>

          <View>
            <View style = {styles.box}>
             
              <TextInput
              secureTextEntry={true}
              style={styles.input}
                placeholder="Password"
                onChangeText={(text) => setPassword({password: text})}
              />
            </View>
          </View>

          <View>
            <View style = {styles.box}>
            
              <TextInput
              style={styles.input}
                placeholder="County"
                onChangeText={(text) => setCounty({county:text})}
              />
            </View>
          </View>


          <View style = {styles.box}>
            <Button title="Submit" /*</View>disabled={isLoading}*/ onPress={(e) => handleSubmit(e)}>
            <Text>Login</Text>
            </Button>
            {error && <div className="error">{error}</div>}
             <Link href="/login"><Text style={styles.link}>Already have an account? Log in!</Text></Link>
          </View>
        </View>
      </View>
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
  box:{
    backgroundColor: '#EDFFCC',
  },
   
 
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "white",
 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  h1: {
    fontWeight: 'bold',
    fontSize: 16,

  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  link:{
    color: 'blue',

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
