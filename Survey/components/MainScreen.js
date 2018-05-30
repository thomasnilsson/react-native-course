import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";
import styles from "../assets/styles";

class MainScreen extends Component {

  answerHandler = (answer) => {
    alert(answer)
  }

  fetchSurvey = async () => {
    const url =
      "https://raw.githubusercontent.com/thomasnilsson/react-native-course/master/Survey/assets/surveys/survey1.json";
    const rawResponse = await fetch(url, {
      method: "GET"
    });
    return rawResponse.json();
  };

  startSurvey = async () => {
    let s = await this.fetchSurvey();
    console.log(s);
    let q = s.questions[0]

    this.props.navigator.push({
      screen: 'survey.QuestionScreen',
      passProps: {
        question: q,
        onAnswerGiven: this.answerHandler
      }
    })

  };

  render() {
    return (
      <View style={styles.parentContainer}>
        <View style={styles.buttonContainer}>
          <Text>We require your consent</Text>
          <Button title="Give Constent" onPress={this.startSurvey} />
        </View>
      </View>
    );
  }
}

export default MainScreen;
