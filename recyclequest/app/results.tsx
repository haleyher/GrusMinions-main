
import { StyleSheet, Button, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, {useState} from 'react';
import axios from 'axios';

var inputData = "/Users/honiluna/Desktop/GrusMinions-main/recyclequest/waterbottle.png";

export default function ModalScreen() {

  const [prediction, setPrediction] = useState('');

  const sendRequest = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/predict', {
        input: inputData,  // Pass input data to the Flask server
      });
      setPrediction(response.data.prediction);
    } catch (error) {
      console.log('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>results...</Text>
      <View>
      <Button title="Send Request" onPress={sendRequest} />
      <Text>{prediction}</Text>  
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
  newcontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFCC',
    marginTop: -30,
    marginLeft: -30,
    marginRight: -30,
    marginBottom: -60,
    paddingTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 450,

    

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
});
