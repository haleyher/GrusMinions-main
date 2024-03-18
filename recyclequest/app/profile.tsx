import { StatusBar } from 'expo-status-bar';
import { Image, Platform, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import axios from "axios";
import {useState} from 'react';

export default function ProfileScreen() {
  var userName = "haleyher";

  const [rankkkk, setRank] = useState('');
  const [usernameee, setUsername] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [county, setCounty] = useState('');
  const [pointssss, setPoints] = useState('');
  const [recycle, setRecycle] = useState('');
  const [trash, setTrash] = useState('');

  let completeUrl = 'https://vectorapi-y9k3.onrender.com/api/profile/haleyher'

  const response = axios.get(completeUrl, {
    params: {
      userName: userName
    }
  })
  .then(function (response) {
    var userInfo = response.data;
    console.log(userInfo)
   
    setPoints(userInfo.userPoints); 
    setRecycle(userInfo.userRecycle);
    setTrash(userInfo.userTrash);
   setRank(userInfo.userLevel); 
   setUsername(userInfo.username);
   setDisplayName(userInfo.displayName);
   setCounty(userInfo.userCounty)
  
    
  });


  var rank = 'Rank ' + rankkkk;
  var usernamee = "@" + usernameee;
  var recycled = "Recycle Items Collected: " + recycle;
  var trashed = "Trash Items Collected: " + trash;
  var countyname = county + " County"
  var display = displayName; 
  var pointsdisplay = "Total Points: " +  pointssss;
  

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Profile</Text>
      <Image style={styles.tinyLogo} source= {{uri: 'https://i.imgur.com/U3bYw4F.png',}}/>
      <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704"  />

      <View style={styles.newcontainer}>
        <Text style={styles.title}>{displayName} </Text>
        <Text>{usernamee} </Text>
      <Text>{rank}</Text>
      <Text>{countyname}</Text>

      
      </View>
      <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704" />
      <Text style={styles.title}>Points Summary</Text>

    

      <View style = {styles.containerr}> 
        <Text style = {styles.textt}> {pointsdisplay} </Text>
        <Text style = {styles.textt}> {recycled} </Text>
        <Text style = {styles.textt}> {trashed}</Text>
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
    backgroundColor: '#EDFFCC',
  
  },
  containerr:{

    backgroundColor: '#EDFFCC',

  },
  textt: {

    fontSize: 20,
    paddingBottom: 20,
    color: "#3B5704",
    fontWeight: "bold",
    

  },
  tinyLogo: {
    width: 20,

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
    paddingLeft: 150,
    paddingRight: 150,
    paddingBottom: 70,
  

    

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#3B5704",
    paddingBottom: 20,
  },
  separator: {
    marginVertical: 30,
    height: 2,
    width: '100%',
  },
});
