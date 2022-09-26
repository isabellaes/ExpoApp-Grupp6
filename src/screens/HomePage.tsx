import React from "react";
import { Button, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomePage({ navigation, route }: Props) {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Gå till detaljvyn"
        onPress={() => navigation.navigate("Details")}
      />
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("LoggIn")}
      />
      <Button
        title="Off line mood"
        onPress={() => navigation.navigate("Recept")}
      />
    </View>
  );
}
