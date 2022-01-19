import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import MeasurementsScreen from "../screens/MeasurementsScreen";

const Stack = createNativeStackNavigator();

const MeasurementsNavigator = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#694fad",
          },
        }}
      >
        <Stack.Screen
          name="Workout"
          component={MeasurementsScreen}
          options={{
            title: "Measurements",
            headerStyle: {
              backgroundColor: "#694fad",
            },
            headerLeft: () => (
              <MaterialCommunityIcons.Button
                name="menu"
                size={25}
                backgroundColor="#694fad"
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
