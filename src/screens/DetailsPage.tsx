import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Button,
  ScrollView,
} from "react-native";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Card from "../Components/Card";
import { data } from "../utils/mockData";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsPage({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Card style={styles.card}>
          {data.map((item) => (
            <View style={styles.item}>
              <Image style={styles.image} source={{ uri: item.receptImage }} />
              <Text style={styles.title}>{item.receptName}</Text>
              <Text style={styles.protein}>Protein: {item.protein}</Text>
              <Text style={styles.description}>
                Description: {item.receptDescription}
              </Text>
              <Text style={styles.ingridiens}>
                Ingridiens: {item.receptIngridients}
              </Text>
            </View>
          ))}
        </Card>
      </ScrollView>

      <View style={styles.buttons}>
        <Button title="Recept" onPress={() => navigation.navigate("Recept")} />
        <Button title="Home" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
  },
  container: {
    flex: 1,
  },
  item: {
    width: "100%",
    height: "auto",
    padding: 20,
    margin: 5,
    backgroundColor: "#A1A6AA",
  },
  title: {
    fontSize: 22,
    color: "black",
    margin: 5,
  },
  protein: {
    fontSize: 20,
    color: "black",
    margin: 5,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
  },
  description: {
    fontSize: 15,
    color: "black",
    marginTop: 15,
    margin: 5,
  },
  ingridiens: {
    fontSize: 15,
    color: "black",
    marginTop: 25,
    margin: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
  },
});
