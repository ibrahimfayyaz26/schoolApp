import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";
import NComp from "../../components/NewsComp";
import dataDum from "../../data/dummy";

const News = () => {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataDum}
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

export default News;

const styles = StyleSheet.create({});
