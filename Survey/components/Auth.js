import React, { Component } from "react";
import {
  TouchableWithoutFeedback,
  Image,
  TextInput,
  View,
  Text,
  Button
} from "react-native";

import startMainTabs from "../components/startMainTabs";
import survey from "../assets/surveys/survey1.json";
import styles from "../assets/styles";

class AuthScreen extends Component {
  authenticate = async () => {
    const token = "ebf60685-186a-4138-9567-099ab31ed341";
    const url =
      "https://sandbox.carp.cachet.dk/auth-service/auth/api/users?access_token=" +
      token;
    const rawResponse = await fetch(url, {
      method: "GET"
    });
    return rawResponse.json();
  };

  onLoginPressed = async () => {
    let result = await this.authenticate();
    // console.log(result)
    if (result) {
      startMainTabs();
    }
  };

  render() {
    return (
      <View style={styles.parentContainer}>
        <Text>Login Screen</Text>
        <View style={styles.buttonContainer}>
          <Image
            source={require("../assets/img/logo.png")}
            style={{ width: "100%", height: 300, resizeMode: "contain" }}
          />
          <TextInput
            style={styles.textField}
            textAlign={"center"}
            placeholder="Username"
          />
          <TextInput
            style={styles.textField}
            textAlign={"center"}
            placeholder="Password"
          />
          <Button onPress={this.onLoginPressed} title="Login"/>
        </View>
      </View>
    );
  }
}

export default AuthScreen;
