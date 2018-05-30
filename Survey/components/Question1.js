import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Question extends React.Component {
  state = {
    answer: ""
  };

  render() {
    let answers = this.props.question.answers;
    let text = this.props.question.text;

    answerGiven = answer => {
      this.props.onAnswerGiven(answer);
      console.log(this.props)
      this.setState({
        state: answer
      });
    };

    let buttons = answers.map((a, i) => (
      <Button key={i} title={a} onPress={() => answerGiven(a)} />
    ));
    return (
      <View style={styles.parentContainer}>
        <View style={styles.questionContainer}>
          <Text style={{ fontSize: 28 }}>{text}</Text>
        </View>
        <View style={styles.buttonContainer}>{buttons}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    margin: 20
  },
  questionContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 60
  },
  buttonContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

// export default question;
export default Question;
