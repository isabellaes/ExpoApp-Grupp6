import React from "react";
import { Button, View, Text, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0CF7E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoImage: {
    width: 200,
    height: 130,
    margin: 40
  },
  textStyle: {
    height: 50,
    width: '80%',
    margin: 15,
    backgroundColor: 'grey',
    justifyContent: 'center',
    textAlign: 'center', 
    alignItems: 'center'
  },
  title: {
    fontSize: 50,
    margin: 30,
    color: '#6A0617'
  }
});

export default function HomePage({ navigation, route }: Props) {
  const image = require('../images/icon.png')
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Easy Recept</Text>
      <Image source={image} style={styles.logoImage}/>
      <Button title="Log-In" onPress={() => navigation.navigate("LoggIn")}/>
      <Button title="Use Without Log-In" onPress={() => navigation.navigate("Recept")}/>
    </View>
  )};
