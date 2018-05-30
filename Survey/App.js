import { Navigation } from "react-native-navigation";

import AuthScreen from "./components/Auth";
import Question from "./components/Question1";
import MainScreen from "./components/MainScreen";
import SecondScreen from "./components/SecondScreen";

Navigation.registerComponent("survey.AuthScreen", () => AuthScreen);
Navigation.registerComponent("survey.MainScreen", () => MainScreen);
Navigation.registerComponent("survey.SecondScreen", () => SecondScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: "survey.AuthScreen", // unique ID registered with Navigation.registerScreen
    title: "Welcome", // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  }
});

// import React from "react";
// import { StyleSheet, Text, View, Button, NavigatorIOS } from "react-native";
// import Question from "./components/Question1.js";
// import survey from "./assets/surveys/survey1.json";
// import { StackNavigator } from "react-navigation";

// export default class App extends React.Component {
//   fetchJSONSurvey() {
//     return fetch("https://facebook.github.io/react-native/movies.json")
//       .then(response => response.json())
//       .then(responseJson => {
//         return responseJson.movies;
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }

//   answerHandler = answer => {
//     // let f = this.fetchJSONSurvey()
//     alert(answer);
//   };

//   render() {
//     let q = survey.questions[1];
//     return <Question question={q} onAnswerGiven={this.answerHandler} />;
//   }
// }
