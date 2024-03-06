import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';



export default function ModalScreen() {

  function generateRanNum(min, max) {
    var minn = min; 
    var maxx = max; 
    const randomNum = Math.floor(Math.random() * (maxx - minn + 1)) + minn; 
    return randomNum
  };
  var number = generateRanNum(0,2);

  var questions = ["Which of the following can NOT be Recycled?", "Which of the following is true about plastic water bottles?", "Why is it important to recycle?"]
  var answers = [
    ["Plastic Bottles", // Answer choice 1
    "Plastic Bags", //Answer choice 2 -- Correct Asnwer
    "Food Cans", // Answer choice 3
    "Flatten Cardboard"], //Answer choice 4
    ["They don't need to be recycled because we have already recycled too many of them",
     "They cannot be recycled", 
     "We need to remember to recycle water bottles, as they are quickly filling our landfills",// correct answer
      "None of these options are correct"], 
    ["Recycling uses up a lot of energy people need", 
    "Recycling is bad for the environment", 
    "Recycling makes our landfills overflow",
    "Recycling conserves our natural resources"]
  ]
  var answerKey = [
    [false, true, false, false ],
    [false, false, true, false], 
    []
  ]

  const trivia = ()=> {


  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Trivia Question of the Day!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.newcontainer}>
        
        <Text> {number}</Text> 
      
        <Text style={styles.questions}>{questions[number]} </Text> 
       

        
        <Text style={styles.answers}> { answers[number][0]}</Text>
        <Text style={styles.answers}>{ answers[number][1]}</Text>
        <Text style={styles.answers}>{ answers[number][2]}</Text>
        <Text style={styles.answers}>{ answers[number][3]}</Text> 
       
     
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
  answers: {
   backgroundColor: 'green',
   padding: 5,

  },
  questions: {
    
    padding: 5,
 
   },

});
