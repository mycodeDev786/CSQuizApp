import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Nav } from "./index";
import { HomeScreen } from "../Screens/Home/home";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Nav} />
    </Tab.Navigator>
  );
};
export { BottomTabNavigator };
