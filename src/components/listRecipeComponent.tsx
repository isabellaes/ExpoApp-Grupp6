import React, { FC } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Recipe from "../interfaces/recipeInterface";

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: "black",
    margin: 8,
  },
  protein: {
    fontSize: 18,
    color: "black",
    margin: 8,
  },
  image: {
    width: "100%",
    height: 165,
  },
  description: {
    color: "black",
    margin: 8,
  },
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});

const Item: FC<Recipe> = (props) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: props.recipeImage }} />
      <Text style={styles.title}>{props.recipeName}</Text>
      <Text style={styles.protein}>{props.protein}</Text>
      <Text numberOfLines={1} style={styles.description}>
        {props.recipeDescription}
      </Text>
    </View>
  );
};

export default Item;
