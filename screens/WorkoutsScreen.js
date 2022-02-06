import React from "react";
import { StyleSheet, Text, View } from "react-native";

const WorkoutsScreen = ({ navigation, user }) => {
  return (
    <View style={styles.container}>
      <Text>{user}</Text>
    </View>
  );
};

export default WorkoutsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
