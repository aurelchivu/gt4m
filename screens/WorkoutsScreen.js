import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import color from "../config/color";

const WorkoutsScreen = ({ navigation, user }) => {
  return (
    <LinearGradient
      style={styles.container}
      colors={[color.primary, color.secondary]}
    >
      <View style={styles.container}>
        <Text>Workouts Screen</Text>
      </View>
    </LinearGradient>
  );
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
