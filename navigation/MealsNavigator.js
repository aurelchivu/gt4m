import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MealsScreen from "../screens/MealsScreen";

import color from "../config/color";

const Stack = createNativeStackNavigator();

const MealsNavigator = ({ navigation }) => {
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
          name="Meal"
          component={MealsScreen}
          options={{
            title: "Meals",
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

export default MealsNavigator;
