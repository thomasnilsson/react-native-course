import React from "react";
import { StyleSheet, Text, View, Button, NavigatorIOS } from "react-native";
import Question from "./components/Question1.js";
import survey from "./assets/surveys/survey1.json";
import { StackNavigator } from "react-navigation";

export default class App extends React.Component {
  fetchJSONSurvey() {
    return fetch("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.movies;
      })
      .catch(error => {
        console.error(error);
      });
  }

  answerHandler = answer => {
    // let f = this.fetchJSONSurvey()
    alert(answer);
  };

  render() {
    let q = survey.questions[1];
    return <Question question={q} onAnswerGiven={this.answerHandler} />;
  }
}

