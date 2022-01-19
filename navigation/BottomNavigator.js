import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeNavigator from "./HomeNavigator";
import WorkoutsNavigator from "./WorkoutsNavigator";
import MealsNavigator from "./MealsNavigator";
import MeasurementsNavigator from "./MeasurementsNavigator";

const Tab = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: "tomato" }}
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
          tabBarColor: "#f4511e",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerStyle: {
            backgroundColor: "#009387",
          },
        }}
      />
      <Tab.Screen
        name="Workouts"
        component={WorkoutsNavigator}
        options={{
          tabBarLabel: "Workouts",
          tabBarColor: "#009387",
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
            backgroundColor: "#009387",
          },
          tabBarLabel: "Meals",
          tabBarColor: "#1f65ff",
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
          tabBarColor: "#694fad",
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
