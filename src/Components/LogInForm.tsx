import { Button, View, Text, TextInput, StyleSheet } from "react-native";
import * as yup from "yup";
import { Formik } from "formik";
import React from "react";

export const LogInForm = () => {
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 5,
  };
  return (
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
        setFieldTouched,
        touched,
        isValid,
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
            }}
            title="Submit"
            color="#3740FE"
          />
        </View>
      )}
    </Formik>
  );
};
const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});
