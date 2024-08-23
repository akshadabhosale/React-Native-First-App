import { TouchableOpacity, Text, ScrollView } from "react-native";
import { buttons } from "../screens/button.const";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-navigation";

const KeyPadButton = ({ addChar }) => {
  const keyPad = buttons.map((item) => {
    return (
      <TouchableOpacity
        key={item}
        style={Styles.btn}
        onPress={() => addChar(item)}
        type="outline"
        title={item}
      >
        {item != "back" && <Text>{item}</Text>}
        {item == "back" && (
          <AntDesign name="caretleft" size={24} color="black" />
        )}
      </TouchableOpacity>
    );
  });

  return (<View style={Styles.keypadContainer}>{keyPad}</View>
    
  );
};

const Styles = StyleSheet.create({
  keypadContainer: {
    marginBottom: 40,
    flexDirection:'row',
    flexWrap: "wrap",
    marginTop:40,
    gap:8
  },
  btn: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "thistle",
    borderRadius: 50,

  },
});

export default KeyPadButton;
