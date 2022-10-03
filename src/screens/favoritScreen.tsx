import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useCallback, useState } from "react";
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
import { AntDesign } from "@expo/vector-icons";

type Props = NativeStackScreenProps<RootStackParamList, "Favorit">;

export default function FavoritScreen({ navigation, route }: Props) {
  const speak = () => {
    const thingToSay = "Haj, and welcome to your side";
    Speech.speak(thingToSay);
  };
  const [isFavorite, setIsFavorite] = useState(false);
  const [isEnabled, setIsEnabled] = useState(true);
  const loggedInUser = mockUser.find((user) => user.loggedIn === true);

  function removeRecipe() {
    return loggedInUser?.favoritRecipe.splice(0, 1);
  }

  const handleToggleFavorite = useCallback(async () => {
    setIsFavorite((val) => !val);

    if (isEnabled) {
      removeRecipe();
    } else {
      console.log("funkar inte");
    }
  }, [removeRecipe, isEnabled, isFavorite]);

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
              <AntDesign
                style={styles.garbage}
                onPress={handleToggleFavorite}
                name="delete"
                size={24}
                color="black"
              />
            </View>
          ))}
        </Card>
      </ScrollView>
      <View style={styles.buttons}>
        <Button title="Recipe" onPress={() => navigation.navigate("Recipe")} />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
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
  garbage: {
    marginLeft: 5,
  },
});
