import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import React from 'react';
import { createIconSetFromFontello } from '@expo/vector-icons';
import axios from 'axios';



export default function ModalScreen() {

  function generateRanNum(min, max) {
    var minn = min; 
    var maxx = max; 
    const randomNum = Math.floor(Math.random() * (maxx - minn + 1)) + minn; 
    return randomNum
  };
  const [disable, setDisable] = React.useState(false);
  var number = generateRanNum(0,2);
  var message = "Disables after one try!";
  // let message;

  var questions = 
  ["Which of the following can NOT be Recycled?", 

  "Which of the following is true about plastic water bottles?", 

  "What should you do with lids and caps when recycling bottles",

"Which of the following is able to be recycled",
"Once recyclables are collected and transported to the recycling sorting facility, they are:",
"Recycling...",
"Which do not belong in the recycling bin?"
]

  var answers = [
    ["Plastic Bottles", // Answer choice 1
    "Plastic Bags", //Answer choice 2 -- Correct Asnwer
    "Food Cans", // Answer choice 3
    "Flatten Cardboard"], //Answer choice 4

    ["They don't need to be recycled because we have already recycled too many of them",
     "They cannot be recycled", 
     "We need to remember to recycle water bottles, as they are quickly filling our landfills",// correct answer
      "None of these options are correct"], 

    ["They should be removed", 
    "They should be kept on", 
    "They should be thrown away in trash can",
    "None of the above"],

    ["Plastic bottles",
  "Jugs",
"Tubs",
"All of the Above"],

["Hand-sorted to remove problem materials",
"Mechanically sorted with magnets, screens, and optical sorters",
"Compressed into large bricks called bales and sold to companies that clean and convert them into new products",
"All of the above"],

["Saves energy",
"Creates Jobs",
"Conserves Natural Resources",
"All of the above"],
["Glass Jars",
"Pie Pan and Foil",
"Plastic Wrap",
"Cardboard"]
  ];
  var answerKey = [
    [false, true, false, false ],
    [false, false, true, false], 
    [false, true, false, false],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, false, true],
    [false, false, true, false]

  ];

  const check0 = async ( e) => {
    // e.handleDefault();

    let arr = answers[number][0];
    console.log(arr);
    setDisable(true)

    let data = {
      userName : "haleyher",
      recycledItems: "0",
      disposedItems: "0",
      triviaCompletion : "1",
      questPoints : "0"
    }

    if (answerKey[number][0] == true){
      console.log("You got it right! You will now earn 2 points.")
      message = "You got it right! You will now earn 2 points.";

      

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




    } else {
      console.log("You got it wrong! No points for you!")
      message = "You got it wrong! No points for you!";
    };

  };
  const check1 = async ( e) => {
    // e.handleDefault();

    let arr = answers[number][1];
    console.log(arr);
    setDisable(true)

    let data = {
      userName : "haleyher",
      recycledItems: "0",
      disposedItems: "0",
      triviaCompletion : "1",
      questPoints : "0"
    }

    if (answerKey[number][1] == true){
      console.log("You got it right! You will now earn 2 points.")
      message = "You got it right! You will now earn 2 points.";


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




    } else {
      console.log("You got it wrong! No points for you!")
      message = "You got it wrong! No points for you!";
    };

  };
  const check2 = async ( e) => {

    let arr = answers[number][2];
    console.log(arr);
    setDisable(true)

    let data = {
      userName : "haleyher",
      recycledItems: "0",
      disposedItems: "0",
      triviaCompletion : "1",
      questPoints : "0"
    }

    if (answerKey[number][2] == true){
      console.log("You got it right! You will now earn 2 points.")
      message = "You got it right! You will now earn 2 points.";



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






    } else {
      console.log("You got it wrong! No points for you!")
      message = "You got it wrong! No points for you!";
    };

  };
  const check3 = async ( e) => {
    // e.handleDefault();

    let arr = answers[number][3];
    console.log(arr);
    setDisable(true)

    let data = {
      userName : "haleyher",
      recycledItems: "0",
      disposedItems: "0",
      triviaCompletion : "1",
      questPoints : "0"
    }

    if (answerKey[number][3] == true){
      console.log("You got it right! You will now earn 2 points.")
      message = "You got it right! You will now earn 2 points.";



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




    } else {
      console.log("You got it wrong! No points for you!")

      message = "You got it wrong! No points for you!";
    };

  };
  

  return (

    <View style={styles.container}>
    <View>
    <Text style={styles.title}>Trivia Question of the Day!</Text>
    </View>
      <View style={styles.newcontainer}>
      <Text style={styles.title}>Trivia Question of the Day!</Text>
      
        <Text style={styles.questions}>{questions[number]} </Text> 
       

        <View style={styles.answerbox}>

        <Pressable disabled={disable} onPress={(e) => check0(e) }>
          <Text style={styles.answers}> { answers[number][0]}</Text>
          </Pressable>

          <Pressable disabled={disable} onPress={(e) => check1(e) }>
        <Text style={styles.answers}>{ answers[number][1]}</Text>
        </Pressable>

        <Pressable disabled={disable} onPress={(e) => check2(e) }>
        <Text style={styles.answers}>{ answers[number][2]}</Text>
        </Pressable>

        <Pressable disabled={disable} onPress={(e) => check3(e) }>
        <Text style={styles.answers}>{ answers[number][3]}</Text> 
        </Pressable>
        </View>

        <Text>{message}</Text>
     
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  answerbox:{
    backgroundColor: '#EDFFCC',

  },
  newcontainer:{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFCC',
    marginTop: -30,
    marginLeft: -40,
    marginRight: -40,
    marginBottom: -60,
    paddingTop: 20,
    paddingLeft: 100,
    paddingRight: 100,
    paddingBottom: 450,

    

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    backgroundColor: '#EDFFCC',
    marginTop: 60,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  answers: {
   backgroundColor: '#5DA35B',
   padding: 5,
   marginBottom: 20,


  },
  questions: {
    
    padding: 5,
 
   },

});