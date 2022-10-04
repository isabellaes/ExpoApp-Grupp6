import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./src/screens/homeScreen";
import LogInScreen from "./src/screens/loginScreen";
import RecipeScreen from "./src/screens/recipeScreen";
import SignUpScreen from "./src/screens/signUpScreen";
import FavoritScreen from "./src/screens/favoritScreen";
import DetailScreen from "./src/screens/detailScreen";
import { FontAwesome } from "@expo/vector-icons";
import { mockUser } from "./src/interfaces/userInterface";

export type RootStackParamList = {
  Home: undefined;
  Details: {
    id: number;
    protein: string;
    recipeImage: string;
    recipeName: string;
    recipeDescription: string;
    recipeIngridients: string;
  };
  LoggIn: undefined;
  Recipe: undefined;
  SignUp: undefined;
  Favorit: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
const loggedInUser = mockUser.find((user) => user.loggedIn === true);
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#B0C2D4",
          },
          headerTintColor: "black",
          animation: "slide_from_left",
          animationDuration: 700,
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
          name="Recipe"
          component={RecipeScreen}
            options={({navigation}) => ({
            title: "Recipe",
            headerRight: () => (
              <FontAwesome
              name="heart"
              size={25}
              color="black"
              onPress={() => loggedInUser ? navigation.navigate("Favorit") : navigation.navigate("LoggIn")}
            />
            )})
          }
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
