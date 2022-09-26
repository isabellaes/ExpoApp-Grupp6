import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/screens/HomePage";
import DetailsPage from "./src/screens/DetailsPage";
import React from "react";
import LoggInPage from "./src/screens/LogginPage";
import ReceptPage from "./src/screens/ReceptPage";
import SignUpPage from "./src/screens/signUpPage";

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  LoggIn: undefined;
  Recept: undefined;
  SignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#B0C2D4",
          },
          headerTintColor: "#EEE",
          animation: "slide_from_bottom",
          animationDuration: 2000,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Hem" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsPage}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="LoggIn"
          component={LoggInPage}
          options={{ title: "LoggIn" }}
        />
        <Stack.Screen
          name="Recept"
          component={ReceptPage}
          options={{ title: "Recept" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpPage}
          options={{ title: "SignUp" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
