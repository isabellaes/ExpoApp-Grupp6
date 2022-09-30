import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/homeScreen";
import LogInScreen from "./src/screens/loginScreen";
import RecipeScreen from "./src/screens/recipeScreen";
import SignUpScreen from "./src/screens/signUpScreen";
import FavoritScreen from "./src/screens/favoritScreen";
import DetailScreen from "./src/screens/detailScreen";

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
  Favorit: undefined;
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
          component={HomeScreen}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{ title: "Details" }}
        />
        <Stack.Screen
          name="LoggIn"
          component={LogInScreen}
          options={{ title: "LoggIn" }}
        />
        <Stack.Screen
          name="Recept"
          component={RecipeScreen}
          options={{ title: "Recept" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ title: "SignUp" }}
        />
        <Stack.Screen
          name="Favorit"
          component={FavoritScreen}
          options={{ title: "Favorit" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
