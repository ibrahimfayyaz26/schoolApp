import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Tabs & stacks
import ExaminationTab from "./ExaminationTab";
import NotesStack from "./NotesStack";
import HomeTab from "./HomeTab";

const drawer = createDrawerNavigator();

const DrawerMain = () => {
  return (
    <drawer.Navigator>
      <drawer.Screen name="Home" component={HomeTab} />
      <drawer.Screen name="Notes" component={NotesStack} />
      <drawer.Screen name="Examination" component={ExaminationTab} />
    </drawer.Navigator>
  );
};

export default DrawerMain;
