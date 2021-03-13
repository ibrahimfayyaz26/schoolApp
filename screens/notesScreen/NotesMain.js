import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Class from "../../components/Class";
import Cat from "../../data/MainNotesCat";

const NotesMain = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Cat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Class
            name={item.name}
            img={item.img}
            press={() => console.log("hello")}
          />
        )}
      />
    </View>
  );
};

export default NotesMain;

const styles = StyleSheet.create({});
