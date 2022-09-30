import React from "react";
import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;
//test
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logoImage: {
    width: 200,
    height: 130,
    margin: 40,
  },
  textStyle: {
    height: 50,
    width: "80%",
    margin: 15,
    backgroundColor: "grey",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 50,
    margin: 30,
    color: "#6A0617",
  },
  text: {
    color: "white",
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    margin: 15,
  },
  button: {
    width: "70%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#6A68F9",
    margin: 5,
  },
});

export default function HomePage({ navigation, route }: Props) {
  const image = require("../images/icon.png");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Easy Recept</Text>
      <Image source={image} style={styles.logoImage} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("LoggIn")}
      >
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Recept")}
      >
        <Text style={styles.text}>Use without sign in</Text>
      </Pressable>
    </View>
  );
}
