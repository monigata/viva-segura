import 'react-native-gesture-handler';
import React from "react";
import { PaperProvider } from "react-native-paper";
import { LogBox } from 'react-native';
import RootNavigator from "./src/app/navigation/RootNavigator";

LogBox.ignoreLogs(['Text strings must be rendered within a <Text> component', 'expo-notifications: Android Push notifications', '`expo-notifications` functionality is not fully supported in Expo Go']);

export default function App() {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
}
