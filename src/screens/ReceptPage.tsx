import React from "react";
import { Button, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Recept">;

export default function ReceptPage({ navigation, route }: Props) {
  return (
    <View>
      ReceptPage
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Logg In" onPress={() => navigation.navigate("LoggIn")} />
    </View>
  );
}
