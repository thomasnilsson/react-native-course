import { Navigation } from "react-native-navigation";

import AuthScreen from "./components/Auth";
import QuestionScreen from "./components/Question1";
import MainScreen from "./components/MainScreen";
import SecondScreen from "./components/SecondScreen";

Navigation.registerComponent("survey.AuthScreen", () => AuthScreen);
Navigation.registerComponent("survey.MainScreen", () => MainScreen);
Navigation.registerComponent("survey.SecondScreen", () => SecondScreen);
Navigation.registerComponent("survey.QuestionScreen", () => QuestionScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "survey.AuthScreen", // unique ID registered with Navigation.registerScreen
    title: "Welcome", // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});


