import {
  Button,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import * as yup from "yup";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import { mockUser } from "../interfaces/userInterface";
import * as ScreenOrientation from "expo-screen-orientation";

type Props = NativeStackScreenProps<RootStackParamList, "LoggIn">;

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});
interface Values {
  email: string;
  password: string;
}

export default function LogInScreen({ navigation, route }: Props) {
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 5,
  };
  function validateUser(values: Values) {
    const user = mockUser?.find(
      (user) => user.email == values.email && user.password == values.password
    );
    if (user != undefined) {
      user.loggedIn = true;
      console.log(user.loggedIn);
      return true;
    } else return false;
  }
  function handleFormSubmit(values: Values) {
    // let error = values.email
    if (validateUser(values)) {
     return navigation.navigate("Recept");
    }
  }

  async function changeScreenOrientationLandscape() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }
  async function changeScreenOrientationPortrait() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP
    );
  }

  return (
    <ScrollView>
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
      <View>
        <Button
          title="Offline mood"
          onPress={() => navigation.navigate("Recept")}
        />
        <Button
          title="Dont have an account yet? Sign up here!"
          onPress={() => navigation.navigate("SignUp")}
        />
        <Button
          title="Landscape Screen"
          onPress={() => changeScreenOrientationLandscape()}
        ></Button>
        <Button
          title="Portrait Screen"
          onPress={() => changeScreenOrientationPortrait()}
        ></Button>
      </View>
    </ScrollView>
  );
}
