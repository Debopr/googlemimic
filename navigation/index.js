import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import routeNames from "./routeNames";

var linkingDeep={
  prefixes: ['mygoogle://'],  // Custom scheme for deep linking
  config: {
    screens: {
      [routeNames.SIGN_IN]: "SignIn",
      [routeNames.MAIN]: "Main",
      [routeNames.HOME]: "Home",
      [routeNames.SEARCH]: "Search",
      [routeNames.VOICE_SEARCH]: "VoiceSearch",
      [routeNames.IMAGE_SEARCH]: "ImageSearch",
      [routeNames.IMAGE_RESULT]: "ImageResult",
      [routeNames.IMAGE_RESULT_LIST]: "ImageResultList",
      [routeNames.PROFILE]: "Profile",
      [routeNames.SETTINGS]: "Settings",
      [routeNames.SAVED_SCREEN]: "SavedScreen",
      [routeNames.NOTIFICATIONS]: "Notifications",
    },
  },
}
// var linkingDeep = {
//   prefixes: ['mygoogle://'],
//   config: {
//     screens: {
//       // Open the BottomTabNavigator directly
//       [routeNames.MAIN]: {
//         path: "Main",  // A path to navigate to the bottom tabs
//         screens: {
//           [routeNames.HOME]: "Home",  // The Home screen
//           [routeNames.SEARCH]: "Search",  // Directly map to the Search tab
//           [routeNames.SAVED_SCREEN]: "SavedScreen",
//           [routeNames.NOTIFICATIONS]: "Notifications",
//         },
//       },
//       [routeNames.SIGN_IN]: "SignIn",
//       [routeNames.VOICE_SEARCH]: "VoiceSearch",
//       [routeNames.IMAGE_SEARCH]: "ImageSearch",
//       [routeNames.IMAGE_RESULT]: "ImageResult",
//       [routeNames.IMAGE_RESULT_LIST]: "ImageResultList",
//     },
//   },
// }


const Navigation = () => {
  return (
    <NavigationContainer linking={linkingDeep}>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
