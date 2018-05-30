import { Navigation } from "react-native-navigation";

const startMainTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        label: "Survey",
        screen: "survey.MainScreen", // this is a registered name for a screen
        title: "Survey"
      },
      {
        label: "Data Collection",
        screen: "survey.SecondScreen", // this is a registered name for a screen
        title: "Data Collection"
      },
    ]
  });
};

export default startMainTabs;
