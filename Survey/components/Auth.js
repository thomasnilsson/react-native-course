import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

import startMainTabs from "../components/startMainTabs";

class AuthScreen extends Component {
  onLoginPressed = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.parentContainer}>
        <Text>Login Screen</Text>
        <View style={styles.buttonContainer}>
          <TextInput style={styles.textField} placeholder="Username" />
          <TextInput style={styles.textField} placeholder="Password" />
          <Button onPress={this.onLoginPressed} title="Log in" />
        </View>
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
    alignItems: "center",
    width: "100%"
  },
  textField: {
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
    height: 30,
    borderWidth: 1
  }
});

export default AuthScreen;
