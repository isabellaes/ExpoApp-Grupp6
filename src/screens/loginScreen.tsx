import { NativeStackScreenProps } from "@react-navigation/native-stack";
import * as ScreenOrientation from "expo-screen-orientation";
import { Formik } from "formik";
import React, { useEffect } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import * as yup from "yup";
import { RootStackParamList } from "../../App";
import { mockUser } from "../interfaces/userInterface";

type Props = NativeStackScreenProps<RootStackParamList, "LoggIn">;

interface Values {
  email: string;
  password: string;
}

export default function LogInScreen({ navigation, route }: Props) {
  let loggedInUser = mockUser.find((user) => user.loggedIn === true);

  useEffect(() => {
    (() => {
      loggedInUser = mockUser.find((user) => user.loggedIn === true);
    })();
  }, []);

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

      return true;
    } else return false;
  }
  function handleFormSubmit(values: Values) {
    if (validateUser(values)) navigation.navigate("Recipe");
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
        onSubmit={(values) => {
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
          onPress={() => navigation.navigate("Recipe")}
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

const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});
