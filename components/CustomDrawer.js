import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { getAuth, signOut } from "firebase/auth";

const CustomDrawer = (props) => {
  const auth = getAuth();
  const signout = () => {
    signOut(auth)
      .then(() => {
        props.navigate("WelcomeScreen");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 18, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={signout} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <MaterialCommunityIcons name="logout" size={22} />
            <Text
              style={{
                fontSize: 15,
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;
