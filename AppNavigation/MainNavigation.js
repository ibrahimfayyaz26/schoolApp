import React from "react";
import { NavigationContainer } from "@react-navigation/native";

// drawer import
import Drawer from "./DrawerMain";

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
};

export default MainNavigation;
