import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import Class from "../../components/Class";
import Cat from "../../data/MainNotesCat";

const NotesMain = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Cat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Class
            name={item.name}
            img={item.img}
            press={() =>
              props.navigation.navigate("NotesS", {
                classId: item.id,
                class: item.name,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default NotesMain;

const styles = StyleSheet.create({});
