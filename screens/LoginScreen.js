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

import { auth } from "../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Feather } from "react-native-vector-icons";
import { useTheme } from "react-native-paper";

import SocialLogin from "../components/SocialLogin";

import color from "../config/color";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = useState({
    email: "",
    password: "",
    checkTextInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        checkTextInputChange: true,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        checkTextInputChange: false,
        isValidUser: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const loginHandler = () => {
    if (data.email.length == 0 || data.password.length == 0) {
      Alert.alert(
        "Wrong Input!",
        "Username or password field cannot be empty.",
        [{ text: "Okay" }]
      );
      return;
    }
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => console.log(userCredential.user))
      .catch((error) => alert(error.message));
  };

  return (
    // <KeyboardAvoidingView
    //   behavior={Platform.OS === "ios" ? "padding" : "height"}
    //   keyboardVerticalOffset={headerHeight}
    //   style={{ flex: 1 }}
    // >

    <View style={{ flex: 1 }}>
      <LinearGradient
        style={styles.container}
        colors={[color.primary, color.secondary]}
      >
        <StatusBar backgroundColor={color.primary} barStyle="light-content" />

        <Animated.View
          style={styles.header}
          entering={BounceInRight.duration(2500)}
        >
          <Text style={styles.textHeader}>Welcome!</Text>
        </Animated.View>
        <Animated.View
          entering={BounceInDown.duration(2500)}
          style={styles.main}
        >
          <ScrollView style={{ flex: 1 }}>
            <Text
              style={[
                styles.mainText,
                {
                  color: colors.text,
                },
              ]}
            >
              Email
            </Text>
            <View style={styles.action}>
              <FontAwesome name="user-o" color={colors.text} size={20} />
              <TextInput
                placeholder="Your Email"
                placeholderTextColor="#666666"
                style={styles.textInput}
                autoCapitalize="none"
                onChangeText={(val) => textInputChange(val)}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
            {data.isValidUser ? null : (
              <Animated.View entering={BounceInRight.duration(500)}>
                <Text style={styles.errorMsg}>
                  Username must be 4 characters long.
                </Text>
              </Animated.View>
            )}
            <Text
              style={[
                styles.mainText,
                {
                  color: colors.text,
                  marginTop: 35,
                },
              ]}
            >
              Password
            </Text>
            <View style={styles.action}>
              <Feather name="lock" color={colors.text} size={20} />
              <TextInput
                placeholder="Your Password"
                placeholderTextColor="#666666"
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
            {data.isValidPassword ? null : (
              <Animated.View entering={FadeInLeft.duration(500)}>
                <Text style={styles.errorMsg}>
                  Password must be 8 characters long.
                </Text>
              </Animated.View>
            )}
            <TouchableOpacity>
              <Text style={{ color: color.primary, marginTop: 15 }}>
                Forgot password?
              </Text>
            </TouchableOpacity>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.signIn}
                onPress={() => {
                  loginHandler();
                }}
              >
                <LinearGradient
                  colors={[color.primary, color.primary]}
                  style={styles.signIn}
                >
                  <Text
                    style={[
                      styles.textSignIn,
                      {
                        color: "#fff",
                      },
                    ]}
                  >
                    Login
                  </Text>
                </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate("Register")}
                style={[
                  styles.signIn,
                  {
                    borderColor: color.primary,
                    borderWidth: 1,
                    marginTop: 15,
                  },
                ]}
              >
                <Text
                  style={[
                    styles.textSignIn,
                    {
                      color: color.primary,
                    },
                  ]}
                >
                  Register
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

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  main: {
    flex: Platform.OS === "ios" ? 3 : 5,
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
  mainText: {
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
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
    // borderBottomWidth: 0.2,
    // marginLeft: 5,
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
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
  textSignIn: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
