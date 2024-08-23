import React from "react";
import { Text } from "react-native-elements";
import { TextInput,StyleSheet,View} from "react-native";
import {evaluate} from 'mathjs';
  

const Result=({ResultValue,showInput,exp})=>{
    return (<View style={Styles.container}>
        <TextInput value={exp} readOnly={true} style={Styles.inputbox}/>
        <Text style={Styles.resultVal}>{ResultValue}</Text>
    </View>)
}

const Styles=StyleSheet.create({
    inputbox:{
        fontSize:27,
        borderWidth: 1,
        color:'black',
        padding:8,
        
    },
    container:{
        flex:1,
        margin:20,
        height:300,
    },
    resultVal:{
        marginTop:10,
        fontSize:30,
        fontWeight:800
    }
    
})
export default Result;