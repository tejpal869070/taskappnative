import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserProfile from "./UserProfile";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import WalletIndex from "../Wallet/WalletIndex";
import MyTask from "../Tasks/MyTask";

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Tasks"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color="black" size={20} />
          ),
        }}
      >
        {() => <MyTask />}
      </Tab.Screen>

      <Tab.Screen
        name="Peofile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color="black" size={20} />
          ),
        }}
      >
        {() => <UserProfile />}
      </Tab.Screen>
      <Tab.Screen
        name="Wallet"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="wallet" color="black" size={20} />
          ),
          headerShown:false
        }}
      >
        {() => <WalletIndex />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}
