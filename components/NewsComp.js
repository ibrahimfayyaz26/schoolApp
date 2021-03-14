import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const NewsComp = (props) => {
  const [isFav, setIsFav] = useState(false);
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.press}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: props.imgUri,
            }}
          />
        </View>
        <View style={styles.headContainer}>
          <Text style={styles.title}>
            {props.title.length > 15
              ? props.title.slice(0, 15) + "..."
              : props.title}
          </Text>
          <MaterialIcons
            name={isFav ? "favorite" : "favorite-border"}
            size={28}
            color="#72bcd4"
            onPress={() => console.log("hello")}
          />
        </View>
        <View style={styles.desContainer}>
          <Text style={styles.des}>
            {props.description && props.description.length > 25
              ? props.description.slice(0, 25) + "..."
              : props.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 10,
    width: "90%",
    backgroundColor: "white",
    height: 350,
  },
  imgContainer: {
    width: "100%",
    height: "75%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  img: { width: "100%", height: "100%" },
  headContainer: {
    marginStart: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    height: "10%",
    marginEnd: 10,
  },
  title: {
    fontSize: 22,
  },
  desContainer: { height: "15%", marginTop: 5 },
  des: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default NewsComp;
