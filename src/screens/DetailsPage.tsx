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
import Card from "../components/card";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsPage({ navigation, route }: Props) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
        <Card>
          <Text style={styles.id}>recipe nr.{route.params.id}</Text>
          <Image
            style={styles.image}
            source={{ uri: route.params.receptImage }}
          />
          <Text style={styles.title}>{route.params.receptName}</Text>
          <Text style={styles.protein}>{route.params.protein}</Text>
          <Text style={styles.titledescription}> Description:</Text>
          <Text style={styles.description}>
            {route.params.receptDescription}
          </Text>
          <Text style={styles.titleingridens}>Ingridiens: </Text>
          <Text style={styles.ingridiens}>
            {route.params.receptIngridients}
          </Text>
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
  container: {
    flex: 1,
  },
  id: {
    marginLeft: 5,
  },
  item: {
    width: "100%",
    height: "auto",
    padding: 20,
    backgroundColor: "#A1A6AA",
  },
  title: {
    fontSize: 22,
    color: "black",
    marginTop: 5,
    marginLeft: 5,
  },
  protein: {
    fontSize: 15,
    color: "black",
    margin: 5,
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    marginTop: 10,
  },
  titledescription: {
    fontSize: 17,
  },
  description: {
    fontSize: 15,
    color: "black",
    margin: 5,
    marginBottom: 15,
  },
  titleingridens: {
    fontSize: 17,
    marginLeft: 5,
  },
  ingridiens: {
    fontSize: 15,
    color: "black",
    margin: 5,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    backgroundColor: "#B0C2D4",
  },
});

//
