import react from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
} from "react-native";

const FlatListExample = () => {
  const friends = [
    {
      name: "Sharad",
      age: "40",
    },
    {
      name: "AKshada",
      age: 30,
    },
  ];

  const list = (
    <FlatList
      data={friends}
      renderItem={({ item }) => <Text style={styles.text}>{item.name}</Text>}
    ></FlatList>
  );

  return (
    <SafeAreaView style={[styles.container,styles.centerEl]}>
      <Text style={styles.heading}>Your friends list</Text>
      <View style={styles.centerEl}>{list}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    margin: 2,
    fontWeight: '800',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
    marginTop: 10,
  },
  centerEl: {
    marginLeft: "auto",
    marginRight:"auto"
  },
});

export default FlatListExample;
