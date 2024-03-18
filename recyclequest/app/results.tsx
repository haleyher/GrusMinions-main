
import { StyleSheet, Button, Alert } from 'react-native';
import { Text, View } from '@/components/Themed';
import React, {useState} from 'react';
import axios from 'axios';
import { useRoute } from "@react-navigation/native";
import { useContext } from "react";
import photoContext from "./hooks/photoContext";



export default function Results({navigation}) {

  const [prediction, setPrediction] = useState('');
  const [name, setName] = useState('');
  const [accuracy, setAccuracy] = useState('');
  const [secondMeessage, setSecondMessage] = useState('');
  const [disable, setDisable] = React.useState(false);

  var inputData = "/Users/honiluna/Desktop/GrusMinions-main/recyclequest/waterbottle.png";
  const route = useRoute()

  const MyComponent = () =>{
  const currentuser = useContext(photoContext);
  console.log(currentuser?.photo);

  }
  

  const data = {
   
    file: "/Users/honiluna/Desktop/GrusMinions-main/recyclequest/waterbottle.png",
    

  };  



  const sendRequest = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:8000/api/predict', data, 
      {"headers": {
      
        "content-type": "application/json",
      
        },
      });
      // setPrediction(response.data);
      console.log(response.data)


    console.log(response.data.prediction.class_name);
    setName(response.data.prediction.class_name);
    setAccuracy(response.data.prediction.probability);

    if (name === "plastic"){
      setSecondMessage("Congrats! You have earned 4 points for finding an object most likely recyclable. Be sure to deposit it correctly! ")
      
      let data = {
        userName : "haleyher",
        recycledItems: "1",
        disposedItems: "0",
        triviaCompletion : "0",
        questPoints : "0"
      }


      axios.post('https://vectorapi-y9k3.onrender.com/api/points', data, 
      {"headers": {
    
        "content-type": "application/json",
        
        },
      })
      .then(response => {
        console.log(response.data);
        const myJSON = response.data; 
        
      })
      .catch(error => {
        console.error("Error sending data: ", error);
      }); 


    } 
    
    else {
      setSecondMessage("ruh roh.")
  
    }


    } catch (error) {
      console.log('Error', error);
    };

    

  };

  var stringMessage = "This is " + name + ". Accuracy: " + accuracy;

  var test = name;
  console.log(test);

  
  



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Results</Text>
      <Text style = {styles.texttt}>Find out if your object is cardboard, compost, glass, metal, paper, plastic, or trash with an overall 98% accuracy. (Using an open-source machine learning model that can classify waste images by RootStrap.) </Text>
      <View>
        <View style = {styles.spacing}>
      <Button  disabled={disable}  title="Send Request to the AI" onPress={sendRequest} />
      </View>
      <Text style = {styles.text}>{stringMessage}</Text>  
    </View>
    <Text style = {styles.texttt}>{secondMeessage} </Text>
   
      
    </View>
  );
}

const styles = StyleSheet.create({
  texttt: {
    margin: 7,
    padding: 20,
    color: "#3B5704",


  },
  spacing: {
    paddingBottom: 10,
    backgroundColor: '#EDFFCC',

  },
  text: {
    backgroundColor: '#EDFFCC',
    padding: 10,
    borderColor: 'black',
    borderWidth: 2,

  },
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
    color: "#3B5704",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
