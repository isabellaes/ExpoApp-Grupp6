import React, { useCallback, useEffect } from "react";
import { Pressable, View, Text, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';


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

export default function HomeScreen({ navigation, route }: Props) {
  const image = require("../images/icon.png");
  const [fontsLoaded] = useFonts({
    'Srpingtime-Romance': require('../font/SpringtimeRomance.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={{ fontFamily: 'Srpingtime-Romance', fontSize: 60, color: "#6A0617" }}>Easy Recipe</Text>
      <Image source={image} style={styles.logoImage} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("LoggIn")}
      >
        <Text style={styles.text}>Sign in</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Recipe")}
      >
        <Text style={styles.text}>Use without sign in</Text>
      </Pressable>
    </View>
  );
}
