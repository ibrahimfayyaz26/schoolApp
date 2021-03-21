import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, Button, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

const ImagePiker = (props) => {
  const [imgUri, setImgUri] = useState();
  const askPer = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA_ROLL,
      Permissions.CALENDAR
    );
    if (result.status !== "granted") {
      Alert.alert("Permission error", "Please give permission to use camera", [
        { text: "OK" },
      ]);
      return false;
    }
    return true;
  };

  const ImagePike = async () => {
    const result = await askPer();
    if (!result) {
      return;
    }
    const img = await ImagePicker.launchCameraAsync({
      mediaTypes: "Images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    setImgUri(img.uri);
    console.log(imgUri);
    props.imgFun(imgUri);
  };
  return (
    <View style={{ alignItems: "center", fkex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 200,
          marginBottom: 10,
          justifyContent: "center",
          alignItems: "center",
          borderColor: "#ccc",
          borderWidth: 1,
        }}
      >
        {!imgUri ? (
          <Text>No image picked yet.</Text>
        ) : (
          <Image
            style={{ width: "100%", height: "100%" }}
            source={{ uri: imgUri }}
          />
        )}
      </View>
      <Button title="Take Image" onPress={() => ImagePike()} />
    </View>
  );
};

export default ImagePiker;

const styles = StyleSheet.create({});
