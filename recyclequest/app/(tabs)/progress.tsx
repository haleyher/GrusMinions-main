import { StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';

export default function TabTwoScreen() {

  const arr = [
    ["Name", "Level", "Points"],
    ["William", " 7", " 120"],
    ["John", " 7", " 114"],
    ["Kelly", " 4", " 70"],
    ["Haley", " 3", " 20"],
    ["JC", " 3", " 18"],
    ["Tim", " 3", " 16"],
    ["Jacob", " 2", " 8"],
    ["Fred", " 2", " 5"],
    ["Bob", " 1", " 2"]
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>State Leaderboard</Text>
      <View style={styles.separator} lightColor="#3B5704" darkColor="#3B5704" />
      {arr.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.name}>{item[0]}</Text>
          <Text style={styles.level}>{item[1]}</Text>
          <Text style={styles.points}>{item[2]}</Text>
        </View>
      ))}

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
    color: '#3B5704',
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
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: -3,
    borderColor: "#446e00",
    borderWidth: 3,
    padding: 10,
    backgroundColor: "#b8dc80",
    

  },
  name: {
    flex: 1,
    fontWeight: "bold",
  },
  level: {
    flex: 1,
    textAlign: 'center',
    fontWeight: "bold",
  },
  points: {
    flex: 1,
    textAlign: 'right',
    fontWeight: "bold",
  },
});
