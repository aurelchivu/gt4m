import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import Svg, { G, Path } from "react-native-svg";

const Facebook = () => (
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
);

const Google = () => (
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
);

const Twitter = () => (
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
);

const SocialIcon = ({ children }) => {
  return <TouchableOpacity style={styles.icon}>{children}</TouchableOpacity>;
};

const SocialLogin = () => {
  return (
    <View style={styles.container}>
      <SocialIcon>
        <Facebook />
      </SocialIcon>
      <SocialIcon>
        <Google />
      </SocialIcon>
      <SocialIcon>
        <Twitter />
      </SocialIcon>
    </View>
  );
};

export default SocialLogin;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
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
