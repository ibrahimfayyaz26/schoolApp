import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Screens import for main screen
import News from "../screens/homeScreens/News";
import NewsDetails from "../screens/homeScreens/NewsDetails";
import Leave from "../screens/homeScreens/Leave";
import Favourite from "../screens/homeScreens/Favourite";

const stack = createStackNavigator();
const tab = createBottomTabNavigator();

// Screen stacks

const NewsStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="News" component={News} />
      <stack.Screen name="NewsDetails" component={NewsDetails} />
    </stack.Navigator>
  );
};

const LeaveStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Leave" component={Leave} />
    </stack.Navigator>
  );
};

const FavouriteStack = () => {
  return (
    <stack.Navigator>
      <stack.Screen name="Favourite" component={Favourite} />
    </stack.Navigator>
  );
};

const HomeTab = () => {
  return (
    <tab.Navigator>
      <tab.Screen name="News" component={NewsStack} />
      <tab.Screen name="Leave" component={LeaveStack} />
      <tab.Screen name="Favourite" component={FavouriteStack} />
    </tab.Navigator>
  );
};

export default HomeTab;
