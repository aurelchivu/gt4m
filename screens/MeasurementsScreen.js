import React from "react";
import { StyleSheet, Text, View } from "react-native";

const MeasurementsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Measurements Screen</Text>
    </View>
  );
};

export default MeasurementsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
