import React from "react";
import {
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  View,
  StatusBar,
} from "react-native";
import Component from "./Component";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Visit Component"
        onPress={() => {
          navigation.navigate("Component");
        }}
      ></Button>
      <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Friend List</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    flex: 1,
    flexDirection: "row",
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default HomeScreen;
