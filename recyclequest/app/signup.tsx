import { StyleSheet, Pressable, TextInput } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View} from '@/components/Themed';
import { Link } from 'expo-router';
import React from 'react';
import axios from 'axios';
import fetch from 'node-fetch-native';


const data = {


    displayName: 'Fred Flintstone',
    userName: 'bob',
    password: 'Flintstone',
    county: 'jones'
 
}



// axios.post('https://vectorapi-y9k3.onrender.com/api/users', data, 
// {"headers": {
    
//   "content-type": "application/json",
  
//   },
  
//   })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error("Error sending data: ", error);
//   });

//   const apiUrl = 'https://vectorapi-y9k3.onrender.com/api/profile/jacob';


  // fetch(apiUrl)
  // .then(response => {
  //   if (!response.ok) {
  //     throw new Error('Network response was not ok');
  //   }
  //   return response.json();
  // })
  // .then(userName => {
  //   // Process the retrieved user data
  //   console.log('User Data:', userName);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });


  

// const TextInputExample = () => {
//   const [text, onChangeText] = React.useState('Useless Text');
// //   const [number, onChangeNumber] = React.useState('');

  
// };



export default function TabTwoScreen(props: { onPress: any; title?: "Sign In" | undefined; }) {
  const { onPress, title = 'Sign Up' } = props;
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  

  return (
    <View style={styles.container}>

      <Text style={styles.h1}>RecycleQuest</Text>
     
   
    <TextInput
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
        
        
      />

    <Link href="/home" asChild>
          <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{title}</Text>
        </Pressable>
        </Link>

        <Link href="/login"><Text>Already have an account? Log in!</Text></Link>
  
     
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  h1: {
    fontWeight: 'bold',
    fontSize: 16,

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
