import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens import for main screen
import NotesM from "../screens/notesScreen/NotesMain";
import NotesC from "../screens/notesScreen/NotesChapter";
import NotesS from "../screens/notesScreen/NotesSubject";
import NotesD from "../screens/notesScreen/NotesDetails";

const stack = createStackNavigator();

const NotesStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="NotesM" component={NotesM} />
      <stack.Screen name="NotesC" component={NotesC} />
      <stack.Screen name="NotesS" component={NotesS} />
      <stack.Screen name="NotesD" component={NotesD} />
    </stack.Navigator>
  );
};

export default NotesStack;
