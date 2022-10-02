import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { data } from "../utils/mockData";
import Recipe from "../interfaces/recipeInterface";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import Input from "../components/inputComponent";
import Item from "../components/listRecipeComponent";

type Props = NativeStackScreenProps<RootStackParamList, "Recipe">;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: "93%",
    padding: 20,
    borderRadius: 12,
    margin: 5,
    backgroundColor: "#A1A6AA",
  },
  homeAndLogInButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
    alignItems: "center",
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default function RecipeScreen({ navigation, route }: Props) {
  const [SearchQuery, setSearchQuery] = useState<string>("");
  const [recipes, setRecipe] = useState<Recipe[] | null>(null);

  useEffect(() => {
    (() => {
      setRecipe(data);
    })();
  }, []);

  const handleSearch = (text: any) => {
    if(text) {
      const recipes:Recipe[] = data.filter((recipe) => {
      const itemData = recipe.recipeName ? recipe.recipeName.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setRecipe(recipes);
    }
    else setRecipe(data);
  };

  const handleSortMeatRecipe = () => {
    const recipes: Recipe[] = data.filter(
      (recipe) => recipe.protein === "meat"
    );
    setRecipe(recipes);
  };

  const handleSortFishRecipe = () => {
    const recipes: Recipe[] = data.filter(
      (recipe) => recipe.protein === "fish"
    );
    setRecipe(recipes);
  };

  const handleSortVegetarian = () => {
    const recipes: Recipe[] = data.filter(
      (recipe) => recipe.protein === "vegetarian"
    );
    setRecipe(recipes);
  };

  return (
    <View style={styles.container}>
      <View>
        <Input
          icon="md-search"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>

      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <View style={styles.category}>
          <Button color="#8A8A8A" title="Meat" onPress={handleSortMeatRecipe} />
          <Button color="#8A8A8A" title="Fish" onPress={handleSortFishRecipe} />
          <Button
            color="#8A8A8A"
            title="Vegetarian"
            onPress={handleSortVegetarian}
          />
        </View>
        {recipes?.map((item) => (
          <View style={styles.item} key={item.id}>
            <Text>
              <Item
                id={item.id}
                recipeName={item.recipeName}
                recipeImage={item.recipeImage}
                protein={item.protein}
                recipeDescription={item.recipeDescription}
                recipeIngridients={item.recipeIngridients}
              />
            </Text>
            <Button
              title="Details"
              onPress={() => navigation.navigate("Details", item)}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.homeAndLogInButton}>
        <Entypo
          name="home"
          size={30}
          color="black"
          onPress={() => navigation.navigate("Home")}
        />
        <FontAwesome
          name="sign-in"
          size={30}
          color="black"
          onPress={() => navigation.navigate("LoggIn")}
        />
      </View>
    </View>
  );
}
