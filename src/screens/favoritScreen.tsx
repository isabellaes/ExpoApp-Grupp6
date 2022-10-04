import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Text,
  ScrollView,
  Image,
} from "react-native";
import { RootStackParamList } from "../../App";
import * as Speech from "expo-speech";
import { mockUser } from "../interfaces/userInterface";
import Item from "../components/listRecipeComponent";
import Card from "../components/cardComponent";

type Props = NativeStackScreenProps<RootStackParamList, "Favorit">;

export default function FavoritScreen({ navigation, route }: Props) {
  const speak = () => {
    const thingToSay = "Haj, and welcome to your side";
    Speech.speak(thingToSay);
  };
  const loggedInUser = mockUser.find((user) => user.loggedIn === true);
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.speak}>
          <Button title="Welcome message 🗯 Press hear!" onPress={speak} />
        </View>
        <Card>
          {loggedInUser?.favoritRecipe.map((item) => (
            <View style={styles.containerInfo}>
              <Text onPress={() => navigation.navigate("Details", item)}>
                <Item
                  id={item.id}
                  recipeName={item.recipeName}
                  recipeImage={item.recipeImage}
                  protein={item.protein}
                  recipeDescription={item.recipeDescription}
                  recipeIngridients={item.recipeIngridients}
                />
              </Text>
            </View>
          ))}
        </Card>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Recipe" onPress={() => navigation.navigate("Recipe")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  speak: {
    marginTop: 10,
    backgroundColor: "#A1A6AA",
    padding: 7,
    paddingLeft: 40,
    paddingRight: 40,
    borderRadius: 15,
  },
  containerInfo: {
    padding: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
  },
});
