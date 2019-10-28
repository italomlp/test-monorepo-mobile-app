/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from "react";
import { SafeAreaView, Text } from "react-native";

const App: () => React$Node = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>Shared code between Android, iOS and Web!</Text>
    </SafeAreaView>
  );
};

export default App;
