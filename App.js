import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/DrawerNavigator";
import AuthNavigator from "./navigation/AuthNavigator";
import Routes from "./navigation";

const App = () => {
  return <Routes />;
};

export default App;

// Form validation