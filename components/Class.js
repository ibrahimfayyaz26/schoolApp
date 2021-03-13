import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const Class = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ flex: 1 }}
      onPress={props.press}
    >
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image style={styles.image} source={{ uri: props.img }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>{props.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Class;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 10,
    width: "90%",
    backgroundColor: "white",
    height: 280,
  },
  imgContainer: {
    width: "100%",
    height: "80%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: "20%",
  },
  text: {
    fontSize: 20,
  },
});
