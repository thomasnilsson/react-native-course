import React, { Component } from "react";
import { StyleSheet, TextInput, View, Text, Button } from "react-native";

class MainScreen extends Component {

  startSurvey = () => {
    alert("survey start")
  }

  render() {
    return (
      <View style={styles.parentContainer}>
        <Text>Main Screen</Text>
        <Button 
        title="Go to Survey"
        onPress={this.startSurvey}/>
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

export default MainScreen;
