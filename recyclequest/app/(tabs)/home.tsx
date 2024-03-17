import { Image, StyleSheet, Animated, ScrollView} from 'react-native';
import { Text, View } from '@/components/Themed';
import * as Progress from 'react-native-progress';
import axios from 'axios';
import { NavigationHelpersContext, useNavigation} from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as RootNavigation from '../hooks/RootNavigation';
import {Link} from 'expo-router';
import { LoginScreenProps, RootStackParamList } from "../hooks/types";
import React from 'react';
import {useState} from 'react';

type Props = NativeStackScreenProps<RootStackParamList, "Home">


let county;
 let level; 
 let pointdecimal;

export default function HomeScreen() {
  const [rankkkk, setRank] = useState<string>('');
  const [pointssss, setPoints] = useState('');
  const [pointdeci, setPointDecimal] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [divider, setDivider] = useState('');
  // const username = route;

  // console.log(username);

  // var userName=global.userName;
  let userName = "haleyher";
  
  // let pt1 = 'https://vectorapi-y9k3.onrender.com/api/profile/';
  // let pt2 = userName.userName;
  // let completeUrl = pt1.concat(pt2)
  // console.log(completeUrl);
  let completeUrl = 'https://vectorapi-y9k3.onrender.com/api/profile/haleyher'

  const response = axios.get(completeUrl, {
    params: {
      userName: userName
    }
  })
  .then(function (response) {
    console.log(response.data);
    var userInfo = response.data;
 
    setRank(userInfo.userLevel);
    setPoints(userInfo.userPoints);
    setDisplayName(userInfo.displayName);
    

    console.log(rankkkk)
 
  });

  var rankString = 'Rank ';
  var rank = rankString+ rankkkk;


  var pointsString = ' Points Total';


  var points = parseInt(pointssss);
  console.log("points: " + points)
  var point = pointssss + pointsString;

  var hi = 'Welcome to RecycleQuest, '
  var exclamation = '!'
  var welcomeMessage = hi + displayName + exclamation;

// if (points > 25){

//   var thing = points/50;
//  const thinggg = thing.toString();
//   setDivider(thinggg);
//   console.log("hi")
// }

  // if (rankkkk == "1"){
    

  //    pointdecimal = points / 3;
  //   console.log("display" + pointdecimal);

  //   setPointDecimal(pointdecimal);

  // }
  // if (rankkkk == "2"){
  //   pointdecimal = points / 10;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);

    
  // }
  // if (rankkkk == "3"){
  //   var points = parseInt(pointssss);
  //   pointdecimal = points / 25;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
  //   console.log("display" + pointdecimal);
    
  // }
  // if (rankkkk == '4'){
   
  //   var points = parseInt(pointssss);
  //   console.log(points)
  //   pointdecimal = points / 50;
  //   console.log("display" + pointdecimal);
  //   setPointDecimal(pointdecimal);
  //   console.log("display" + pointdecimal);
    
  // }
  // if (rankkkk == "5"){
  //   pointdecimal = points / 75;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "6"){ 
  //   pointdecimal = points / 100;
  // console.log(pointdecimal);
  // setPointDecimal(pointdecimal);

    
  // }
  // if (rankkkk == "7"){
  //   pointdecimal = points / 150;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "8"){
  //   pointdecimal = points / 200;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "9"){
  //   pointdecimal = points / 250;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "10"){
  //   pointdecimal = points / 300;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
  // }
  // if ( rankkkk == "11"){
  //   pointdecimal = points / 350;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "12"){
  //   pointdecimal = points / 400;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "13"){
  //   pointdecimal = points / 450;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "14"){
  //   pointdecimal = points / 500;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "15"){
  //   pointdecimal = points / 550;
  //   console.log(pointdecimal);
  //   setPointDecimal(pointdecimal);
    
  // }
  // if (rankkkk == "16"){ 
  //   pointdecimal = points / 10000000;
  // console.log(pointdecimal);
  // setPointDecimal(pointdecimal);
    
  // } else {
  //   console.log("bad")
  // }

  // var decimal = parseFloat(pointdeci)

  // console.log( "pls display " + pointdeci)

  return (
    <ScrollView style={styles.container}>


       

      <Text style={styles.wmessage}>{welcomeMessage}</Text>
      <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704" />

      <Text style={styles.title}>{rank}</Text>

      <Text style={styles.pointcount}>{point}</Text>

        <View style = {styles.progressbar}>
          <Progress.Bar progress={parseInt(pointssss)/50} height={13} width={300} color={"#3B5704"} unfilledColor={"#81B622"}/>
        </View>

      <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704" />

     

      

      <Text style={styles.title}>Recycle Quests</Text>

      <View style={styles.container2}>
      <Link href="/trivia">
      <View style={styles.trivia}>
        <Text>DAILY TRIVIA CHALLENGE</Text>
      </View>
      </Link>
    </View>

      <View style={styles.questline}>
        <Text style={styles.quest}>Recycle 10 Cans</Text>
        <Text style={styles.questamount}>9/10</Text>
      </View>
      <View style={styles.questline}>
        <Text style={styles.questDone}>Recycle 20 Anything        </Text>
        <Text style={styles.questamountDone}>+10 Points 5/5</Text>
      </View>
      <View style={styles.questline}>
        <Text style={styles.quest}>Recycle 2 Bottles</Text>
        <Text style={styles.questamount}>1/2</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wmessage:{
    textAlign: 'center', 
    paddingTop: 10,
    fontWeight: 'bold',
    marginBottom: -15,

  },
  trivia: {
    padding: 10,
    backgroundColor: '#5DA35B',
    marginTop: 10,
  },
  container2:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EDFFCC',
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#EDFFCC',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 50,
    color: '#3B5704',
  },
  pointcount:{
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: 50,
  },
  questline:{
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
    backgroundColor: "transparent",
  },
  quest:{
    paddingTop: 0,
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 50,
    color: '#3B5704',
  },
  questamount:{
    paddingTop: 0,
    fontSize: 15,
    fontWeight: 'normal',
    paddingRight: 50,
    color: "#3B5704",
  },
  questDone:{
    paddingTop: 0,
    fontSize: 15,
    fontWeight: 'normal',
    paddingLeft: 50,
    color: '#3B5704',
    textDecorationLine: 'line-through'
  },
  questamountDone:{
    paddingTop: 0,
    fontSize: 15,
    fontWeight: 'normal',
    paddingRight: 50,
    color: "#3B5704",
    textDecorationLine: 'line-through',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '100%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    alignItems: 'center',
  },
  progressbar: {
    height: 10,
    width: "100%",
    alignItems: "center",
    backgroundColor: "#EDFFCC"
  },
  topbar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  topbarlineleft:{
    height: 2,
    width: '40%',
    alignItems: 'center',
    paddingRight: 10,
  },
  topbarlineright:{
    height: 2,
    width: '40%',
    alignItems: 'center',
    paddingLeft: 10,
  },
  topbarlogo:{
    width: "50%",
    height: "50%",
  }
});
