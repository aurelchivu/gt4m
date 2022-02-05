import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const TwitterLogin = () => {
  const onPress = () => {
    alert("Under Development");
  };

  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <Svg
        height={32}
        width={32}
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          d="M31.993 6.077a13.027 13.027 0 0 1-3.77 1.033 6.588 6.588 0 0 0 2.887-3.63 13.144 13.144 0 0 1-4.168 1.592A6.56 6.56 0 0 0 22.149 3a6.562 6.562 0 0 0-6.562 6.563c0 .514.057 1.016.169 1.496-5.455-.274-10.291-2.887-13.529-6.858a6.544 6.544 0 0 0-.888 3.3 6.564 6.564 0 0 0 2.919 5.464 6.544 6.544 0 0 1-2.972-.821l-.001.082a6.568 6.568 0 0 0 5.265 6.437 6.606 6.606 0 0 1-2.963.113 6.572 6.572 0 0 0 6.13 4.558 13.166 13.166 0 0 1-8.15 2.811c-.53 0-1.053-.031-1.566-.092A18.592 18.592 0 0 0 10.062 29c12.072 0 18.675-10.001 18.675-18.675 0-.284-.008-.568-.02-.85a13.315 13.315 0 0 0 3.276-3.398z"
          fill="#55ACEE"
        />
      </Svg>
    </TouchableOpacity>
  );
};

export default TwitterLogin;

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
