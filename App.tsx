import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./src/screens/homePage";
import DetailsPage from "./src/screens/detailPage";
import React from "react";
import LoggInPage from "./src/screens/logginPage";
import ReceptPage from "./src/screens/receptPage";
import SignUpPage from "./src/screens/signUpPage";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    id: number;
    protein: string;
    receptImage: string;
    receptName: string;
    receptDescription: string;
    receptIngridients: string;
  };
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
          headerTintColor: "#385AF0",
          animation: "slide_from_bottom",
          animationDuration: 1000,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Home" }}
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
