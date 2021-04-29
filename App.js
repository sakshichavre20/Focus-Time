import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Focus from './Screens/Focus';

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null); 
  return (
    <View style={styles.container}>
      {focusSubject ? (
        <Text> Here i'am going to build a timer</Text>
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
    paddingTop:100
  },
});
