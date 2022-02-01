import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import Animated, {
  BounceInDown,
  BounceInRight,
  BounceIn,
  FadeInLeft,
} from "react-native-reanimated";

import { useTheme } from "react-native-paper";

const WelcomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <LinearGradient style={styles.container} colors={["#087ee1", "#05e8ba"]}>
      <StatusBar backgroundColor="#087ee1" barStyle="light-content" />
      <View style={styles.header}></View>
      <Animated.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        entering={BounceInDown.duration(2500)}
      >
        <Text style={styles.title}>Let's build some muscles!</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              colors={["#087ee1", "#087ee1"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </LinearGradient>
  );
};

export default WelcomeScreen;

const { height } = Dimensions.get("screen");
const logoHeight = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: logoHeight,
    height: logoHeight,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    flexDirection: "row",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});

/*
background-color: #f6fba2;
background-image: linear-gradient(315deg, #f6fba2 0%, #20ded3 74%);


background-color: #feae96;
background-image: linear-gradient(315deg, #feae96 0%, #fe0944 74%);


background-color: #05e8ba;
background-image: linear-gradient(315deg, #05e8ba 0%, #087ee1 74%);


background-color: #d3d3d3;
background-image: linear-gradient(315deg, #d3d3d3 0%, #57606f 74%);

*/
