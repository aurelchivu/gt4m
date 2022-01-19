import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MealsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Meals Screen</Text>
    </View>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
