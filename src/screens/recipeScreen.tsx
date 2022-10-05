import { FontAwesome } from "@expo/vector-icons";
import { useFocusEffect } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlashList } from "@shopify/flash-list";
import React, { useEffect, useState } from "react";
import { Button, Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import Input from "../components/inputComponent";
import Item from "../components/listRecipeComponent";
import Recipe from "../interfaces/recipeInterface";
import { mockUser, User } from "../interfaces/userInterface";
import { data } from "../utils/mockData";



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
  const [recipes, setRecipe] = useState<Recipe[] | null>(null);

  const [loggedInUser, setLoggedInUSer] =  useState<User>();


  console.log(loggedInUser?.id);

  useEffect(() => {
    (() => {
      setRecipe(data);
    })();
  },[]);

  useFocusEffect(() => {
    (() => {
      setLoggedInUSer(mockUser.find((user) => user.loggedIn === true));
    })();
  },);

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

  const handleSortAll = () => {
    const recipes: Recipe[] = data
    setRecipe(recipes);
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

  function loggOut() {
    if (loggedInUser?.loggedIn){
        alert("You are logged out!");
      return (loggedInUser.loggedIn = false);
    }
  }

  return (
    <View style={styles.container}>
      <View>
        <Input
          icon="md-search"
          placeholder="Search"
          onChangeText={(text) => handleSearch(text)}
        />
      </View>
      <ScrollView >
        <View style={styles.category}>
        <Button color="#8A8A8A" title="All" onPress={handleSortAll} />
          <Button color="#8A8A8A" title="Meat" onPress={handleSortMeatRecipe} />
          <Button color="#8A8A8A" title="Fish" onPress={handleSortFishRecipe} />
          <Button
            color="#8A8A8A"
            title="Vegetarian"
            onPress={handleSortVegetarian}
          />
        </View >
        <View style={{height: Dimensions.get("screen").height,  width: Dimensions.get("screen").width }}>
        <FlashList
          data={recipes}
          renderItem={({item}) => 
          <Text>
            <Item 
                id={item.id}
                recipeName={item.recipeName}
                recipeImage={item.recipeImage}
                protein={item.protein}
                recipeDescription={item.recipeDescription}
                recipeIngridients={item.recipeIngridients}
              />
              <Button
              title="Details"
              onPress={() => navigation.navigate("Details", item)}
            />
            </Text>}
          estimatedItemSize={200}
        />
        </View>
       
      </ScrollView>
      <View style={styles.homeAndLogInButton}>
        <FontAwesome
          name={loggedInUser?.loggedIn ? "sign-out" : "sign-in"}
          size={30}
          color="black"
          onPress={() => loggedInUser?.loggedIn ? ((navigation.navigate("Home", ),loggOut())) : navigation.navigate("LoggIn")}
        />
      </View>
    </View>
  );
}
