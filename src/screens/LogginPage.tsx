import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList, "LoggIn">;

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});

export default function LoggInPage({ navigation, route }: Props) {
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 5,
  };
  function handleFormSubmit() {
    navigation.navigate("Recept");
  }

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup
            .string()
            .min(4)
            .max(10, "Password should not excced 10 chars.")
            .required(),
        })}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          handleSubmit,
        }) => (
          <View style={styles.formContainer}>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              style={inputStyle}
              value={values.email}
              placeholder="E-mail"
            />
            {touched.email && errors.email && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.email}
              </Text>
            )}

            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              style={inputStyle}
              value={values.password}
              placeholder="Password"
            />
            {touched.password && errors.password && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.password}
              </Text>
            )}
            <Button
              onPress={() => {
                handleSubmit();
                handleFormSubmit();
              }}
              title="Submit"
              color="#3740FE"
            />
          </View>
        )}
      </Formik>

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
