import React, { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, ActivityIndicator } from "react-native";

import { getAuth, onAuthStateChanged } from "firebase/auth";

import { AuthenticatedUserContext } from "../auth/AuthenticatedUserProvider";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        try {
          await (authenticatedUser
            ? setUser(authenticatedUser)
            : setUser(null));
          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      }
    );

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, [user]);

  return (
    <>
      {isLoading ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <NavigationContainer>
          {user ? <DrawerNavigator user={user} /> : <AuthNavigator />}
        </NavigationContainer>
      )}
    </>
  );
};

export default RootNavigator;
