import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";

import Animated, {
  BounceInDown,
  BounceInRight,
  BounceIn,
  FadeInLeft,
} from "react-native-reanimated";

import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Feather } from "react-native-vector-icons";
import { useTheme } from "react-native-paper";

import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import SocialLogin from "../components/SocialLogin";

const RegisterScreen = ({ navigation }) => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    checkTextInputChange: false,
    secureTextEntry: true,
    confirmSecureTextEntry: true,
  });

  const handleUsernameChange = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        username: val,
        checkTextInputChange: true,
      });
    } else {
      setData({
        ...data,
        username: val,
        checkTextInputChange: false,
      });
    }
  };

  const handleEmailChange = (val) => {
    if (val.length >= 4) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirmSecureTextEntry: !data.confirmSecureTextEntry,
    });
  };

  const register = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(auth.currentUser, {
        displayName: data.username,
      });

      // console.log(user);
    } catch (error) {
      alert(error.message);
      console.log(error.message);
    }
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   keyboardVerticalOffset={headerHeight}
    //   style={{ flex: 1 }}
    // >
    <View style={{ flex: 1 }}>
      <LinearGradient style={styles.container} colors={["#087ee1", "#05e8ba"]}>
        <StatusBar backgroundColor="#087ee1" barStyle="light-content" />
        <Animated.View
          style={styles.header}
          entering={BounceInRight.duration(2500)}
        >
          <Text style={styles.textHeader}>Register Now!</Text>
        </Animated.View>
        <Animated.View
          entering={BounceInDown.duration(2500)}
          style={styles.main}
        >
          <ScrollView style={{ flex: 1 }}>
            <Text style={styles.textMain}>Username</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Choose an username"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handleUsernameChange(val)}
              />
              {data.checkTextInputChange ? (
                <Animated.View entering={BounceIn}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animated.View>
              ) : (
                <Animated.View entering={BounceIn}>
                  <Feather name="minus-circle" color="gray" size={20} />
                </Animated.View>
              )}
            </View>
            <Text style={styles.textMain}>Email</Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Email"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handleEmailChange(val)}
              />
              {data.checkTextInputChange ? (
                <Animated.View entering={BounceIn}>
                  <Feather name="check-circle" color="green" size={20} />
                </Animated.View>
              ) : (
                <Animated.View entering={BounceIn}>
                  <Feather name="minus-circle" color="gray" size={20} />
                </Animated.View>
              )}
            </View>
            <Text
              style={[
                styles.textMain,
                {
                  marginTop: 35,
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Your Password"
                secureTextEntry={data.secureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handlePasswordChange(val)}
              />
              <TouchableOpacity onPress={updateSecureTextEntry}>
                {data.secureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="green" size={20} />
                )}
              </TouchableOpacity>
            </View>

            <Text
              style={[
                styles.textMain,
                {
                  marginTop: 35,
                },
              ]}
            >
              Confirm Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color="#05375a" size={20} />
              <TextInput
                placeholder="Confirm Your Password"
                secureTextEntry={data.confirmSecureTextEntry ? true : false}
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => handleConfirmPasswordChange(val)}
              />
              <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
                {data.confirmSecureTextEntry ? (
                  <Feather name="eye-off" color="grey" size={20} />
                ) : (
                  <Feather name="eye" color="green" size={20} />
                )}
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <TouchableOpacity style={styles.signIn} onPress={register}>
                <LinearGradient
                  colors={["#087ee1", "#087ee1"]}
                  style={styles.signIn}
                >
                  <Text
                    style={[
                      styles.textSign,
                      {
                        color: "#fff",
                      },
                    ]}
                  >
                    Register
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Login")}
                style={[
                  styles.signIn,
                  {
                    borderColor: "#087ee1",
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: "#087ee1",
                    },
                  ]}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </Animated.View>
        <Animated.View
          entering={BounceInRight.duration(2500)}
          style={styles.footer}
        >
          <SocialLogin />
        </Animated.View>
        <View style={{ height: 60 }}></View>
      </LinearGradient>
    </View>
    // </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  main: {
    flex: Platform.OS === "ios" ? 4 : 7,
    backgroundColor: "#fff",
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  footer: {
    flex: 1,
    marginTop: 20,
  },
  textHeader: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  textMain: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
