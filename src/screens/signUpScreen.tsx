import React from "react";
import { Button, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;

export default function SignUpScreen({ navigation, route }: Props) {
  return (
    <View>
      <Text>SignUpPage</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
