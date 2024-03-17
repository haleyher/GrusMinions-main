import { StyleSheet, Pressable, Button} from 'react-native';
import { Text, View} from '@/components/Themed';
import { Link } from 'expo-router';


export default function TabOneScreen(props: { onPress: any; title?: "Sign In" | undefined; }) {
  const { onPress, title = 'Recycle!' } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recycle Quest</Text>
       <Link href="/login" asChild>
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
    backgroundColor: '#EDFFCC',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 25,
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
    backgroundColor: '#3B5704',
    marginVertical: 30,
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
