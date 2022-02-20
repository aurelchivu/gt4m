import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthenticatedUserContext } from "../auth/AuthenticatedUserProvider";
import { LinearGradient } from "expo-linear-gradient";
import color from "../config/color";

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext);
  // console.log(user);
  return (
    <LinearGradient
      style={styles.container}
      colors={[color.primary, color.secondary]}
    >
      <View style={styles.container}>
        <Text>{user.displayName ? user.displayName : "New User"}</Text>
      </View>
    </LinearGradient>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
