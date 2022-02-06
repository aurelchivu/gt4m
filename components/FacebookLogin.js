import { StyleSheet, TouchableOpacity, Platform } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import {
  onAuthStateChanged,
  FacebookAuthProvider,
  signInWithCredential,
} from "firebase/auth";

import Constants from "expo-constants";

import { auth } from "../config/firebase";

import * as Facebook from "expo-facebook";

const FacebookLogin = () => {
  // Listen for authentication state to change.
  onAuthStateChanged(auth, (user) => {
    if (user != null) {
      console.log("We are authenticated now!");
    }

    // Do other things
  });

  const login = async () => {
    try {
      const appId = Constants.manifest.extra.facebookAppId;
      const appName = "gt4m";
      const options =
        Platform.OS === "android"
          ? { appId }
          : {
              appId,
              appName,
            };
      // let options = null;
      // if (Platform.OS === "android") {
      //   options = { appId };
      // } else {
      //   options = {
      //     appId,
      //     appName,
      //   };
      // }
      await Facebook.initializeAsync(options);

      const { type, token } = await Facebook.logInWithReadPermissionsAsync({
        permissions: ["public_profile", "email"],
      });

      if (type === "success") {
        // Build Firebase credential with the Facebook access token.

        const credential = FacebookAuthProvider.credential(token);

        // Sign in with credential from the Facebook user.
        const facebookProfileData = await signInWithCredential(
          auth,
          credential
        );
        // console.log(facebookProfileData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TouchableOpacity style={styles.icon} onPress={login}>
      <Svg
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="m374.245 285.825 14.104-91.961h-88.233v-59.677c0-25.159 12.325-49.682 51.845-49.682h40.117V6.214S355.67 0 320.864 0c-72.67 0-120.165 44.042-120.165 123.775v70.089h-80.777v91.961h80.777v222.31A320.442 320.442 0 0 0 250.408 512a320.42 320.42 0 0 0 49.708-3.865v-222.31h74.129Z"
          style={{
            fill: "#1877f2",
            fillRule: "nonzero",
          }}
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default FacebookLogin;

const styles = StyleSheet.create({
  icon: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 10,
  },
});
