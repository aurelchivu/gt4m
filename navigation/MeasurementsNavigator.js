import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import color from "../config/color";

import MeasurementsScreen from "../screens/MeasurementsScreen";

const Stack = createNativeStackNavigator();

const MeasurementsNavigator = ({ navigation }) => {
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
          component={MeasurementsScreen}
          options={{
            title: "Measurements",
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

export default MeasurementsNavigator;
