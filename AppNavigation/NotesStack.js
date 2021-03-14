import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// Screens import for main screen
import NotesM from "../screens/notesScreen/NotesMain";
import NotesC from "../screens/notesScreen/NotesChapter";
import NotesS from "../screens/notesScreen/NotesSubject";
import NotesD from "../screens/notesScreen/NotesDetails";

const stack = createStackNavigator();

const NotesStack = () => {
  const navigation = useNavigation();
  return (
    <stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <MaterialIcons
              name="menu"
              size={24}
              onPress={() => {
                navigation.openDrawer();
              }}
            />
          </View>
        ),
        headerTitleAlign: "center",
      }}
    >
      <stack.Screen
        name="NotesM"
        component={NotesM}
        options={{
          title: "Notes",
        }}
      />
      <stack.Screen
        name="NotesC"
        component={NotesC}
        options={(props) => ({
          headerTitle: props.route.params.name + " Notes",
        })}
      />
      <stack.Screen
        name="NotesS"
        component={NotesS}
        options={(props) => ({
          headerTitle: props.route.params.class + " Notes",
        })}
      />
      <stack.Screen name="NotesD" component={NotesD} />
    </stack.Navigator>
  );
};

export default NotesStack;
