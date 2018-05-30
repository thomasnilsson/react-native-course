import { TouchableWithoutFeedback, View, Text } from "react-native";
import React, { Component } from "react";

import styles from "../../assets/styles";
const button = () => (
  <TouchableWithoutFeedback onPress={this.onLoginPressed}>
    <View style={styles.buttonView}>
      <Text style={{ color: "white" }}>Log In</Text>
    </View>
  </TouchableWithoutFeedback>
);

export default button;
