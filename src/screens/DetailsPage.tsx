import React from "react";
import { View, Image, StyleSheet, Text, Button } from "react-native";
import { RootStackParamList } from "../../App";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Card from "../Components/Card";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function DetailsPage({ navigation, route }: Props) {
  return (
    <View>
      <Card>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: "https://www.matratt.se/wp-content/uploads/2021/07/DSC09555-2-1536x1536.jpg",
          }}
        />
        <Text>
          Hej
          jaskjfkdjkfjaksjkjkfdjsakljfkljfkjfkljsdakjfkljfkjsdaklfjkladjfkjsdakljfkadjfkljkfldjklfjkljfkljkljklajkldjflkjaflkjflkdsj
        </Text>
      </Card>

      <Button title="Recept" onPress={() => navigation.navigate("Recept")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
