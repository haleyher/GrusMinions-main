import { StyleSheet, Pressable, TextInput } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View} from '@/components/Themed';
import { Link } from 'expo-router';
import React from 'react';
import axios from 'axios';

const TextInputExample = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </View>
  );
};

export default function TabTwoScreen(props: { onPress: any; title?: "Sign In" | undefined; }) {
  const { onPress, title = 'Sign In' } = props;
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  

  return (
    <View style={styles.container}>
     

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
    shadowColor: 'darkorange',
    shadowOffset: {height: -10, width: 100},
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
