import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

// Screens import for main screen
import News from "../screens/homeScreens/News";
import NewsDetails from "../screens/homeScreens/NewsDetails";
import Leave from "../screens/homeScreens/Leave";
import Favourite from "../screens/homeScreens/Favourite";

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

const NewsStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return <HeaderLeft />;
        },
        headerTitleAlign: "center",
      }}
    >
      <stack.Screen name="News" component={News} />
      <stack.Screen name="NewsDetails" component={NewsDetails} />
    </stack.Navigator>
  );
};

const LeaveStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return <HeaderLeft />;
        },
        headerTitleAlign: "center",
      }}
    >
      <stack.Screen name="Leave" component={Leave} />
    </stack.Navigator>
  );
};

const FavouriteStack = () => {
  return (
    <stack.Navigator
      screenOptions={{
        headerLeft: () => {
          return <HeaderLeft />;
        },
        headerTitleAlign: "center",
      }}
    >
      <stack.Screen name="Favourite" component={Favourite} />
    </stack.Navigator>
  );
};

const HomeTab = () => {
  return (
    <tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "News") {
            iconName = "home";
          } else if (route.name === "Leave") {
            iconName = "leave-bags-at-home";
          } else if (route.name === "Favourite") {
            iconName = "favorite";
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={25} color="black" />;
        },
      })}
    >
      <tab.Screen name="News" component={NewsStack} />
      <tab.Screen name="Favourite" component={FavouriteStack} />
      <tab.Screen name="Leave" component={LeaveStack} />
    </tab.Navigator>
  );
};

export default HomeTab;
