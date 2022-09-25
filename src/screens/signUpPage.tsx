import React from "react";
import { Button, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

export default function SignUpPage({ navigation, route }: Props) {
  return (
    <View>
      SignUpPage
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
