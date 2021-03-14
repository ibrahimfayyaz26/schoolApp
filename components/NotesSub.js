import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const NotesSubj = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{ flex: 1 }}
      onPress={props.press}
    >
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default NotesSubj;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 35,
    borderRadius: 35,
    width: "90%",
    backgroundColor: "white",
    height: 100,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  text: {
    fontSize: 25,
  },
});
