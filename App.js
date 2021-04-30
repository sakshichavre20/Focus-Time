import React, { useState } from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import Focus from './Screens/Focus';
import Timer from './Screens/Timer';

export default function App() {
  const [focusSubject, setFocusSubject] = useState("Gardening"); 
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Timer focusSubject={focusSubject}/>
      ) : (
        <Focus addSubject={setFocusSubject} />
      )}
      <Text>{focusSubject}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111d5e",
    paddingTop:50
    
  },
});
