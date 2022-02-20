import React, { useContext } from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeNavigator from "./HomeNavigator";
import WorkoutsNavigator from "./WorkoutsNavigator";
import MealsNavigator from "./MealsNavigator";
import MeasurementsNavigator from "./MeasurementsNavigator";

const Tab = createMaterialBottomTabNavigator();

import color from "../config/color";

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: color.secondary }}
      screenOptions={{
        tabBarOptions: {
          scrollEnabled: true,
        },
      }}
    >
      <Tab.Screen
        name="Feed"
        component={HomeNavigator}
        options={{
          tabBarLabel: "Home",
          tabBarColor: color.secondary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerStyle: {
            backgroundColor: color.secondary,
          },
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsNavigator}
        options={{
          tabBarLabel: "Workouts",
          tabBarColor: color.secondary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          headerStyle: {
            backgroundColor: color.secondary,
          },
          tabBarLabel: "Meals",
          tabBarColor: color.secondary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="<Measurements>"
        component={MeasurementsNavigator}
        options={{
          tabBarLabel: "Measurements",
          tabBarColor: color.secondary,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tape-measure"
              color={color}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
