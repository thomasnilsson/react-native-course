import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Question from "./components/Question1.js";

export default class App extends React.Component {
  answerHandler = () => {
    alert("answerhandler called");
  };
  
  render() {
    let q = {
      text: "This is a question text",
      answers: ["Answer One", "Answer Two", "Answer Three"]
    };

    return <Question question={q} onAnswerGiven={this.answerHandler} />;
  }
}
