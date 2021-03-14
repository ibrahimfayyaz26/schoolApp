import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import NotesSubj from "../../components/NotesSub";
import data from "../../data/NotesSubj";

const NotesSubject = (props) => {
  const className = props.route.params.class;
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NotesSubj
            name={item.name}
            press={() =>
              props.navigation.navigate("NotesC", {
                name: item.name,
                subjId: item.id,
              })
            }
          />
        )}
      />
    </View>
  );
};

export default NotesSubject;

const styles = StyleSheet.create({});
