import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const GoogleLogin = () => {
  const onPress = () => {
    alert("Under Development");
  };
  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <Svg
        viewBox="0 0 128 128"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <G clipRule="evenodd">
          <Path fill="none" d="M0 0h128v128H0z" />
          <Path
            d="M27.585 64c0-4.157.69-8.143 1.923-11.881L7.938 35.648C3.734 44.183 1.366 53.801 1.366 64c0 10.191 2.366 19.802 6.563 28.332l21.558-16.503A37.86 37.86 0 0 1 27.585 64"
            fill="#FBBC05"
            fillRule="evenodd"
          />
          <Path
            d="M65.457 26.182c9.031 0 17.188 3.2 23.597 8.436L107.698 16C96.337 6.109 81.771 0 65.457 0 40.129 0 18.361 14.484 7.938 35.648l21.569 16.471a37.77 37.77 0 0 1 35.95-25.937"
            fill="#EA4335"
            fillRule="evenodd"
          />
          <Path
            d="M65.457 101.818a37.77 37.77 0 0 1-35.949-25.937L7.938 92.349C18.361 113.516 40.129 128 65.457 128c15.632 0 30.557-5.551 41.758-15.951L86.741 96.221c-5.777 3.639-13.052 5.597-21.284 5.597"
            fill="#34A853"
            fillRule="evenodd"
          />
          <Path
            d="M126.634 64c0-3.782-.583-7.855-1.457-11.636h-59.72v24.727h34.376c-1.719 8.431-6.397 14.912-13.092 19.13l20.474 15.828c11.766-10.92 19.419-27.188 19.419-48.049"
            fill="#4285F4"
            fillRule="evenodd"
          />
        </G>
      </Svg>
    </TouchableOpacity>
  );
};

export default GoogleLogin;

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
