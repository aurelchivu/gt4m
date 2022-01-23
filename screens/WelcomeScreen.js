import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <LinearGradient style={styles.container} colors={["#cc2b5e", "#753a88"]}>
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
