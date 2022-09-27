import React, { FC } from "react";
import {
    Button,
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
  } from "react-native";
import Recept from "../Interfaces/receptInterface";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { data } from "../utils/mockData";
import Input from "../Components/Input"

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
    }
  });
  
const Item : FC<Recept> = (props) => {
    return (
             <View>
            <Image style={styles.image} source={{ uri: props.receptImage }} />
            <Text style={styles.title}>{props.receptName}</Text>
            <Text style={styles.protein}>{props.protein}</Text>
            <Text numberOfLines={1} style={styles.description}>
              {props.receptDescription}
            </Text>
          </View>       
    )}

export default Item;