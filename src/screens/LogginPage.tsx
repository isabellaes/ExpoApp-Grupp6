import { Button, View, Text, TextInput } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from "formik";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList, "LoggIn">;

interface Values {
  email: string;
  password: string;
}

function handleFormSubmit(values) {
  navigation.navigate("Recept");
}
export default function LoggInPage({ navigation, route }: Props) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values) => console.log(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
          />
          <TextInput
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
          />
          <Button onPress={handleSubmit} title="Submit" />

          <View>
            <Text>LoggInPage</Text>

            <Button
              title="Off line mood"
              onPress={() => navigation.navigate("Recept")}
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate("SignUp")}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
