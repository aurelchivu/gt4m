import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import color from "../config/color";

import WorkoutsScreen from "../screens/WorkoutsScreen";

const Stack = createNativeStackNavigator();

const WorkoutsNavigator = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: color.primary,
          },
        }}
      >
        <Stack.Screen
          name="Workout"
          component={WorkoutsScreen}
          options={{
            title: "Workouts",
            headerStyle: {
              backgroundColor: color.primary,
            },
            headerLeft: () => (
              <MaterialCommunityIcons.Button
                name="menu"
                size={25}
                backgroundColor={color.primary}
                onPress={() => navigation.openDrawer()}
              ></MaterialCommunityIcons.Button>
            ),
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default WorkoutsNavigator;
