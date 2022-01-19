import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import CustomDrawer from "../components/CustomDrawer";

import BottomNavigator from "./BottomNavigator";
import WorkoutsNavigator from "./WorkoutsNavigator";
import MealsNavigator from "./MealsNavigator";
import MeasurementsNavigator from "./MeasurementsNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerLabelStyle: { marginLeft: -20, fontSize: 15 },
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#333",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={BottomNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          drawerActiveBackgroundColor: "#f4511e",
        }}
      />
      <Drawer.Screen
        name="Workouts"
        component={WorkoutsNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="weight-lifter"
              color={color}
              size={26}
            />
          ),
          headerStyle: {
            backgroundColor: "#009387",
          },
          drawerActiveBackgroundColor: "#009387",
        }}
      />
      <Drawer.Screen
        name="Meals"
        component={MealsNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="food-fork-drink"
              color={color}
              size={26}
            />
          ),
          headerStyle: {
            backgroundColor: "#1f65ff",
          },
          drawerActiveBackgroundColor: "#1f65ff",
        }}
      />
      <Drawer.Screen
        name="Measurements"
        component={MeasurementsNavigator}
        options={{
          drawerIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="tape-measure"
              color={color}
              size={26}
            />
          ),
          headerStyle: {
            backgroundColor: "#694fad",
          },
          drawerActiveBackgroundColor: "#694fad",
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
