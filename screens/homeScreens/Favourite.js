import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { useSelector } from "react-redux";
import NComp from "../../components/NewsComp";

const Favourite = () => {
  const data = useSelector((state) => state.news.favourite);
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NComp
            title={item.title}
            description={item.description}
            imgUri={item.imgUri}
            id={item.id}
          />
        )}
      />
    </View>
  );
};

export default Favourite;

const styles = StyleSheet.create({});
