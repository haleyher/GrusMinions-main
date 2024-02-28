import { StyleSheet, Pressable, Button} from 'react-native';
import { Text, View} from '@/components/Themed';
import { Link } from 'expo-router';


export default function TabOneScreen(props: { onPress: any; title?: "Sign In" | undefined; }) {
  const { onPress, title = 'Sign In' } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recycle Quest</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
      {/* <Button onPress={()=> navigation.navigate("two")} title="Enter" color="#841584" /> */}
      {/* <a onClick={() => { document.location.href = "three.tsx"; }}>Go to Profile</a>   */}
      {/* <Link href="/two" asChild> 
      <Pressable> <Text>About</Text> </Pressable></Link> */}
      
      <Link href="/two" asChild>
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
