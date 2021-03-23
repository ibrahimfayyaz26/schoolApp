import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import ImagePik from "../../components/ImagePiker";

let schema = yup.object().shape({
  name: yup.string().required().min(5).max(35),
  number: yup.number().required(),
  class: yup.string().required().max(15),
  section: yup.string().required().min(5).max(20),
  classIncharge: yup.string().required().min(2).max(30),
  reason: yup.string().required().min(20).max(200),
  imgUri: yup.string(),
});

const Leave = (props) => {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        class: "",
        section: "",
        classIncharge: "",
        reason: "",
        imgUri: "",
      }}
      validationSchema={schema}
      onSubmit={(values) => {
        console.log(values);
        Alert.alert("Leave", `Mr.${values.name} your leave is submitted`, [
          {
            text: "OK",
          },
        ]);
      }}
    >
      {(props) => {
        const imgtaker = (imgUri) => {
          props.values.imgUri = imgUri;
        };
        return (
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
            keyboardVerticalOffset={90}
            style={{
              flex: 1,
              backgroundColor: "white",
            }}
          >
            <ScrollView
              style={{
                flex: 1,
              }}
            >
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                  <View style={styles.container}>
                    <TextInput
                      placeholder="Full Name"
                      value={props.values.name}
                      onChangeText={props.handleChange("name")}
                      onBlur={props.handleBlur("name")}
                      style={styles.textI}
                    />
                    <Text style={styles.er}>
                      {props.touched.name && props.errors.name}
                    </Text>
                    <TextInput
                      placeholder="Phone Number"
                      value={props.values.number}
                      onChangeText={props.handleChange("number")}
                      onBlur={props.handleBlur("number")}
                      keyboardType="number-pad"
                      style={styles.textI}
                    />
                    <Text style={styles.er}>
                      {props.touched.number && props.errors.number}
                    </Text>
                    <TextInput
                      placeholder="Class"
                      value={props.values.class}
                      onChangeText={props.handleChange("class")}
                      onBlur={props.handleBlur("class")}
                      style={styles.textI}
                    />
                    <Text style={styles.er}>
                      {props.touched.class && props.errors.class}
                    </Text>
                    <TextInput
                      placeholder="Section"
                      value={props.values.section}
                      onChangeText={props.handleChange("section")}
                      onBlur={props.handleBlur("section")}
                      style={styles.textI}
                    />
                    <Text style={styles.er}>
                      {props.touched.section && props.errors.section}
                    </Text>
                    <TextInput
                      placeholder="Class Incharge"
                      value={props.values.classIncharge}
                      onChangeText={props.handleChange("classIncharge")}
                      onBlur={props.handleBlur("classIncharge")}
                      style={styles.textI}
                    />
                    <Text style={styles.er}>
                      {props.touched.classIncharge &&
                        props.errors.classIncharge}
                    </Text>
                    <TextInput
                      placeholder="Reason for leave"
                      value={props.values.reason}
                      onChangeText={props.handleChange("reason")}
                      onBlur={props.handleBlur("reason")}
                      multiline={true}
                      style={styles.leave}
                    />
                    <Text style={styles.er}>
                      {props.touched.reason && props.errors.reason}
                    </Text>
                    <View style={{ width: "90%" }}>
                      <ImagePik imgFun={imgtaker} />
                    </View>
                    <View style={{ marginTop: 10 }}>
                      <Button
                        title="Submit Leave"
                        onPress={props.handleSubmit}
                        color="purple"
                      />
                    </View>
                  </View>
                  <Text style={{ height: 100 }} />
                </View>
              </TouchableWithoutFeedback>
            </ScrollView>
          </KeyboardAvoidingView>
        );
      }}
    </Formik>
  );
};

export default Leave;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 10,
  },
  textI: {
    flex: 1,
    margin: 10,
    elevation: 7,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 35,
    borderRadius: 35,
    width: "90%",
    backgroundColor: "white",
    height: 60,
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },
  leave: {
    flex: 1,
    margin: 10,
    elevation: 6,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    borderRadius: 10,
    width: "90%",
    backgroundColor: "white",
    height: 120,
    textAlignVertical: "top",
    fontSize: 18,
    padding: 5,
  },
  er: {
    color: "red",
    textAlign: "center",
    marginBottom: 10,
    fontSize: 14,
  },
});
