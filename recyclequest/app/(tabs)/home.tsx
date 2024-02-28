import { StyleSheet, SafeAreaView } from 'react-native';
import { Text, View } from '@/components/Themed';
// import { StreamApp } from 'expo-activity-feed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.title}>Home</Text>  

      {/* <SafeAreaView style={{ flex: 1 }}>
      <StreamApp apiKey='dz5f4d5kzrue' appId='102254' token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZmFsbGluZy1wb2V0cnktNyIsImV4cCI6MTcwODkxNzA0OH0.la7sB2GKVppsmt2XsgzEWI1Z9qFWDzbR3IvgPA_ZTUM' />
    </SafeAreaView>   */}
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
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
