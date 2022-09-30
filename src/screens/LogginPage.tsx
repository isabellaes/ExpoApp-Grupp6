import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import * as yup from "yup";
import { Formik } from "formik";
import React, { useState } from "react";
import { mockUser, User } from "../interfaces/userInterface";
import { useRoute } from "@react-navigation/native";

type Props = NativeStackScreenProps<RootStackParamList, "LoggIn">;

//test
interface Values {
  email: string;
  password: string;
}

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});

export default function LoggInPage({ navigation, route }: Props) {
  const [user, setUser] = useState<User | null>(null);

  function changeUser(user: User) {
    setUser(user);
  }
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 5,
  };
  function handleFormSubmit(values: Values) {
    if (validateUser(values)) {
      navigation.navigate("Recept");
    }
  }
  function validateUser(values: Values) {
    const user = mockUser.find(
      (user) => user.email == values.email && user.password == values.password
    );
    if (user) {
      changeUser(user);
      return true;
    } else return false;
  }

  return (
    <View>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, formikActions) => {
          handleFormSubmit(values);
        }}
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
              secureTextEntry={true}
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
                handleFormSubmit(values);
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
