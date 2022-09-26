import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";
import { LogInForm } from "../Components/LogInForm";

type Props = NativeStackScreenProps<RootStackParamList, "LoggIn">;

interface Values {
  email: string;
  password: string;
}

export default function LoggInPage({ navigation, route }: Props) {
  function handleFormSubmit() {
    navigation.navigate("Recept");
  }

  return (
    <View>
      <Text>LoggInPage</Text>
      <LogInForm></LogInForm>
      <Button
        title="Offline mood"
        onPress={() => navigation.navigate("Recept")}
      />
      <Button
        title="Dont have an account yet? Sign up here!"
        onPress={() => navigation.navigate("SignUp")}
      />
    </View>
  );
}
