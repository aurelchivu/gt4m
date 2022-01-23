import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import AuthNavigator from "./navigation/AuthNavigator";

function App() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
