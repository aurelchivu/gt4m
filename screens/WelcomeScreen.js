import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient style={styles.container} colors={["#087ee1", "#05e8ba"]}>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate(routes.LOGIN)}
      ></Button>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate(routes.REGISTER)}
      ></Button>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});

/*
background-color: #f6fba2;
background-image: linear-gradient(315deg, #f6fba2 0%, #20ded3 74%);


background-color: #feae96;
background-image: linear-gradient(315deg, #feae96 0%, #fe0944 74%);


background-color: #05e8ba;
background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);


background-color: #d3d3d3;
background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);

*/
