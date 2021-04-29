import React, { useState } from "react";
import { View, Text, StyleSheet} from "react-native";
import {TextInput} from 'react-native-paper';
import RoundedButton from './../Compnents/RoundedButton';

 const Focus = ({addSubject}) => {
   const [tmpItem, setTmpItem] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>What would u like to focus on ?</Text>
        <View style={styles.inputContainer}>
          <TextInput style={{flex:1,margin:20}} 
            onSubmitEditing={
              ({nativeEvent}) => {
                setTmpItem(nativeEvent.text)
              }
            }
          />
          <RoundedButton size={50} title="+"  onPress={()=> {addSubject(tmpItem)}}/>
        </View>
      </View>
    </View>
  );
};
export default Focus;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:60
  },
  titleContainer: {
    flex:0.5,
    padding:16,
    justifyContent:'center',
    
  },
  title: {
    color:'white',
    fontWeight:'bold',
    fontSize:25,
    textAlign:'center',
    paddingTop:30
  },
  inputContainer: {
    paddingTop:10,
    flexDirection:'row',
    alignItems:'center',
  },
});