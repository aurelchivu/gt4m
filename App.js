import { LogBox } from "react-native";
import _ from "lodash";

LogBox.ignoreLogs(["Warning:..."]); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
  if (message.indexOf("AsyncStorage has been") <= -1) {
    _console.warn(message);
  }
};

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
