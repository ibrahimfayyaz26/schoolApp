import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens import for main screen
import DateSheetMain from "../screens/ExaminationScreen/DateSheetMain";
import DateSheet from "../screens/ExaminationScreen/DateSheet";
import SyllabusMain from "../screens/ExaminationScreen/SyllabusMain";
import Syllabus from "../screens/ExaminationScreen/syllabus";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

// Screen stacks

const SyllabusStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="SyllabusMain" component={SyllabusMain} />
      <stack.Screen name="Syllabus" component={Syllabus} />
    </stack.Navigator>
  );
};

const DateSheetStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="DateSheetMain" component={DateSheetMain} />
      <stack.Screen name="DateSheet" component={DateSheet} />
    </stack.Navigator>
  );
};

const ExaminationTab = () => {
  return (
    <tab.Navigator>
      <tab.Screen name="Syllabus" component={SyllabusStack} />
      <tab.Screen name="DateSheet" component={DateSheetStack} />
    </tab.Navigator>
  );
};

export default ExaminationTab;
