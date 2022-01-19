import React from "react";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

const HomeNavigator = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerLeft: () => (
              <MaterialCommunityIcons.Button
                name="menu"
                size={25}
                backgroundColor="#f4511e"
                onPress={() => navigation.openDrawer()}
              ></MaterialCommunityIcons.Button>
            ),
          }}
        />
      </Stack.Navigator>
    </View>
  );
};

export default HomeNavigator;
