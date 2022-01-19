import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WorkoutsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Workouts Screen</Text>
    </View>
  );
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
