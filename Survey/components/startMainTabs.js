import { Navigation } from "react-native-navigation";

const startMainTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "Tab pme",
        screen: "survey.MainScreen", // this is a registered name for a screen
        title: "Screen One"
      },
      {
        label: "Tab two",
        screen: "survey.SecondScreen", // this is a registered name for a screen
        title: "Screen Two"
      },
      {
        label: "Tab three",
        screen: "survey.SecondScreen", // this is a registered name for a screen
        title: "Screen Two"
      },
      {
        label: "Tab four",
        screen: "survey.SecondScreen", // this is a registered name for a screen
        title: "Screen Two"
      },
    ]
  });
};

export default startMainTabs;
