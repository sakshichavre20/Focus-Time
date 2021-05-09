import React from "react";
import { StyleSheet, Text, View } from "react-native";

import CountDown from './../Compnents/CountDown';

const Timer = ({ focusSubject }) => {
  return (
    <View style={styles.container}>
      <View styles={styles.countdown}>
        <CountDown />
      </View>
      <View style={{ paddingTop: 50 }}>
        <Text style={styles.title}>We are focusing on : </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
  },
  task: {
    color: "white",
    textAlign: "center",
    fontSize:18
  },
  countdown: {
    flex:0.5,
    alignItems:'center',
    justifyContent:'center'
}
});
