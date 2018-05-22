import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Question from "./components/Question1.js";

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

  answerHandler = () => {
    // let f = this.fetchJSONSurvey()
  };

  render() {
    let s = {
      studyName: "Test Study",
      questions: [
        {
          type: "singleAnswer",
          text: "This is a question text",
          answers: ["Answer One", "Answer Two", "Answer Three"]
        },
        {
          type: "singleAnswer",
          text: "This is a another question text",
          answers: ["Answer One", "Answer Two", "Answer Three"]
        },
        {
          type: "singleAnswer",
          text: "This is a yet another question text",
          answers: ["Answer One", "Answer Two", "Answer Three"]
        }
      ]
    };

    let q = s.questions[1]

    return <Question question={q} onAnswerGiven={this.answerHandler} />;
  }
}
