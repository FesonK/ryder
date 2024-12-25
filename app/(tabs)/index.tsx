import { Text, StatusBar } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <Text className={"text-red-200"}>Oopen up App.js</Text>
      <StatusBar style="dark-content" />
    </SafeAreaView>
  );
}
