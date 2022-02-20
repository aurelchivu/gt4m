import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import color from "../config/color";

const MealsScreen = () => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[color.primary, color.secondary]}
    >
      <View style={styles.container}>
        <Text>Meals Screen</Text>
      </View>
    </LinearGradient>
  );
};

export default MealsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
