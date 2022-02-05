import { StyleSheet, View } from "react-native";
import React from "react";
import FacebookLogin from "./FacebookLogin";
import GooleLogin from "./GoogleLogin";
import TwitterLogin from "./TwitterLogin";

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <FacebookLogin />
      <GooleLogin />
      <TwitterLogin />
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
