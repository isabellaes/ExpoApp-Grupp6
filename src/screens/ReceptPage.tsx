import React from "react";
import {
  Button,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { data } from "../utils/mockData";

type Props = NativeStackScreenProps<RootStackParamList, "Recept">;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    width: "80%",
    height: "auto",
    padding: 20,
    borderRadius: 12,
    margin: 5,
    backgroundColor: "#A1A6AA",
  },
  title: {
    fontSize: 20,
    color: "black",
    margin: 5,
  },
  protein: {
    fontSize: 18,
    color: "black",
    margin: 5,
  },
  image: {
    width: "100%",
    height: 165,
  },
  description: {
    color: "black",
    margin: 5,
  },
  homeAndLogInButton: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
  },
});

export default function ReceptPage({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        {data.map((item) => (
          <View style={styles.item}>
            <Image style={styles.image} source={{ uri: item.receptImage }} />
            <Text style={styles.title}>{item.receptName}</Text>
            <Text style={styles.protein}>Protein: {item.protein}</Text>
            <Text numberOfLines={1} style={styles.description}>
              {item.receptDescription}
            </Text>
            <Button
              title="Details"
              onPress={() => navigation.navigate("Details")}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.homeAndLogInButton}>
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
        <Button title="Logg In" onPress={() => navigation.navigate("LoggIn")} />
      </View>
    </View>
  );
}
