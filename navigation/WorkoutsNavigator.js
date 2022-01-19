import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import WorkoutsScreen from "../screens/WorkoutsScreen";

const Stack = createNativeStackNavigator();

const WorkoutsNavigator = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#009387",
          },
        }}
      >
        <Stack.Screen
          name="Workout"
          component={WorkoutsScreen}
          options={{
            title: "Workouts",
            headerStyle: {
              backgroundColor: "#009387",
            },
            headerLeft: () => (
              <MaterialCommunityIcons.Button
                name="menu"
                size={25}
                backgroundColor="#009387"
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
