import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// Screens import for main screen
import DateSheetMain from "../screens/ExaminationScreen/DateSheetMain";
import DateSheet from "../screens/ExaminationScreen/DateSheet";
import SyllabusMain from "../screens/ExaminationScreen/SyllabusMain";
import Syllabus from "../screens/ExaminationScreen/syllabus";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

// Screen stacks

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginLeft: 10 }}>
      <MaterialIcons
        name="menu"
        size={24}
        onPress={() => {
          navigation.openDrawer();
        }}
      />
    </View>
  );
};

const SyllabusStack = () => {
  navigation = useNavigation();
  return (
    <stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return <HeaderLeft />;
        },
        headerTitleAlign: "center",
      }}
    >
      <stack.Screen name="SyllabusMain" component={SyllabusMain} />
      <stack.Screen name="Syllabus" component={Syllabus} />
    </stack.Navigator>
  );
};

const DateSheetStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return <HeaderLeft />;
        },
        headerTitleAlign: "center",
      }}
    >
      <stack.Screen name="DateSheetMain" component={DateSheetMain} />
      <stack.Screen name="DateSheet" component={DateSheet} />
    </stack.Navigator>
  );
};

const ExaminationTab = () => {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Syllabus") {
            iconName = "newspaper-sharp";
          } else if (route.name === "DateSheet") {
            iconName = "ios-calendar";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={24} color="black" />;
        },
      })}
    >
      <tab.Screen name="Syllabus" component={SyllabusStack} />
      <tab.Screen name="DateSheet" component={DateSheetStack} />
    </tab.Navigator>
  );
};

export default ExaminationTab;
