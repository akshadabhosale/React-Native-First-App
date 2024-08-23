import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Result from "../Component/Result";
import KeyPadButton from "../Component/KeyPadButton";
import { column, evaluate } from "mathjs";

export default function Home() {
  const [exp, setExp] = useState("");
  const [showInput, setShowInput] = useState(true);
  const [ResultValue, setResultValue] = useState(null);

  const addNewCharToExp = (char) => {
    switch (char) {
      case "back":
        return setExp((exp) => {
          return exp.slice(0, exp.length - 1);
        });
      case "AC":
        setResultValue(null);
        return setExp("");
      case "=":
        return setShowInput(false);
      default:
        let arr=['+','-','*','/','.','='] 
        if(exp[exp.length-1]===char && arr.includes(char) &&arr.includes(exp[exp.length-1])){
            return
        }
        setExp(exp + "" + char);
    }
  };

  setResultValueFunction = () => {
    if (
      exp[exp.length - 1] != "*" &&
      exp[exp.length - 1] != "+" &&
      exp[exp.length - 1] != "-" &&
      exp[exp.length - 1] != "/"
    ) {
      setResultValue(evaluate(exp));
      console.log("exp", ResultValue);
    }
  };

  useEffect(() => {
    setResultValueFunction();
  }, [exp]);
  return (<View style={styles.container}>
        <Result ResultValue={ResultValue} showInput={showInput} exp={exp} />
        <KeyPadButton addChar={addNewCharToExp} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection:'column',
    justifyContent:'space-between',
    flex:1
  },
});
