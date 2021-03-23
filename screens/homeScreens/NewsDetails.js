import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import { useSelector } from "react-redux";

const NewsDetails = (props) => {
  const { id, title } = props.route.params;
  useLayoutEffect(() => {
    props.navigation.setOptions(
      {
        headerTitle: title,
      },
      [props.navigation]
    );
  });

  const data = useSelector((state) => state.news.News.find((a) => a.id == id));
  return (
    <ScrollView style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ width: "100%", height: "50%" }}>
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: data.imgUri }}
          />
        </View>
        <View style={{ margin: 10, alignItems: "center", height: "10%" }}>
          <Text style={{ fontSize: 25, fontStyle: "italic" }}>
            {data.title}
          </Text>
        </View>

        <View style={{ margin: 10, alignItems: "center", height: "35%" }}>
          <Text style={{ fontSize: 20 }}>{data.description}</Text>
        </View>
        <View
          style={{
            margin: 10,
            alignItems: "flex-end",
            marginTop: 20,
            justifyContent: "flex-end",
            flex: 1,
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 16 }}>By Principal Of Daanish School </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NewsDetails;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
