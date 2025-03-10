import { HapticTab } from "@/components/HapticTab";
import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: undefined,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "#0A090B",
          },
          default: {
            backgroundColor: "#0A090B",
          },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Главная",
        }}
      />
      <Tabs.Screen
        name="tournaments"
        options={{
          title: "Турниры",
        }}
      />
      <Tabs.Screen
        name="matches"
        options={{
          title: "Турниры",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Профиль",
        }}
      />
    </Tabs>
  );
}
