import React,{ useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import CountDown from './../Compnents/CountDown';
import RoundedButton from './../Compnents/RoundedButton';

const Timer = ({ focusSubject }) => {
  const [isStarted ,setIsStarted] =useState(false);
  return (
    <View style={styles.container}>
      <View styles={styles.countdown}>
        <CountDown isPaused={!isStarted} />
      </View>
      <View style={{ paddingTop: 50 }}>
        <Text style={styles.title}>We are focusing on : </Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.button}>
      {isStarted ? (
        <RoundedButton
          title="Pause"
          size={50}
          onPress={() => setIsStarted(false)}
        />
      ) : (
        <RoundedButton
          title="Start"
          size={50}
          onPress={() => setIsStarted(true)}
        />
      )}
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
  },
  button:{
    flex:0.3,
    padding:15,
    justifyContent:'center',
    alignItems:'center',
  }
});
