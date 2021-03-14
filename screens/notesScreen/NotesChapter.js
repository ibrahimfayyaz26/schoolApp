import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

const NotesChapter = () => {
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

export default NotesChapter;

const styles = StyleSheet.create({});
