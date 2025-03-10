import { HapticTab } from "@/components/HapticTab";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#fff",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: undefined,
        tabBarStyle: {
          backgroundColor: "#0A090B",
          borderTopColor: "#0A090B",
          borderTopWidth: 0,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "600",
          lineHeight: 12,
        },
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
          title: "Матчи",
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
};

export default TabLayout;
