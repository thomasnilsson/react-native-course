import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

class SecondScreen extends Component {

  render() {
    return (
      <View style={styles.parentContainer}>
        <Text>Second Screen</Text>
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
  }
});

export default SecondScreen;
