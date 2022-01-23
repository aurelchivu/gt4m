import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import routes from "../navigation/routes";

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Register Screen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate(routes.LOGIN)}
      ></Button>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
