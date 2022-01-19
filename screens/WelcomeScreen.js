import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import routes from "../navigation/routes";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate(routes.LOGIN)}
      ></Button>
      <Button
        title="Go to Register"
        onPress={() => navigation.navigate(routes.REGISTER)}
      ></Button>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
