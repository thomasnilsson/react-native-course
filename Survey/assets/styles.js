import { StyleSheet } from "react-native";

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
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 10
  },
  buttonView: {
    width: "100%",
    height: 50,
    backgroundColor: "#61c3d9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin: 20
  }
});

export default styles;