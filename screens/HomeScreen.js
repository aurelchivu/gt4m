import React, { useContext } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AuthenticatedUserContext } from "../auth/AuthenticatedUserProvider";

const HomeScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticatedUserContext);
  // console.log(user);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <MaterialCommunityIcons name="home" size={26} />
      </TouchableOpacity>
      <Text>{user.displayName ? user.displayName : "New User"}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
