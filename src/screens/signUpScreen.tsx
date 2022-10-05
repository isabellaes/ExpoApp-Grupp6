import React, { useEffect, useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";
import { Formik} from "formik";
import * as Yup from 'yup';
import { mockUser } from "../interfaces/userInterface";
import Recipe from "../interfaces/recipeInterface";






type User = {
  id: number,
  email: string,
  password: string,
  loggedIn: boolean,
  favoritRecipe: Recipe[],
}


type Props = NativeStackScreenProps<RootStackParamList, "SignUp">;


export default function SignUpScreen({ navigation }: Props) {

  let id = Math.random();

const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    (() => {
      setUsers(mockUser);
    })();
  }, []);

  const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email!').notOneOf(mockUser.map((values) => values.email) , 'Email already taken').required('Email is required!'),
  password: Yup.string()
    .trim()
    .min(4, 'Password is too short!').max(10, "Password should not excced 10 chars.")
    .required('Password is required!'),
  confirmPassword: Yup.string().required('Confirmation password is required').equals(
    [Yup.ref('password'), null],
    'Password does not match!'
  ),
});

function checkForOldUsers(values: User){
const user = users?.find((user) => user.email === values.email);
if(user)return true
return false
}
function validUserToSignUp(values: User){
if (!checkForOldUsers(values) && values.email.trim() && values.password.trim()){
  navigation.navigate('LoggIn')
  return true;
}else 
    return false 
}


function handleFormSubmit(values: User) {
    if(validUserToSignUp(values) === true)
    {
      Alert.alert('Your account has been created!! YEEEEEEEEEEEEEET')
      mockUser.push(values)
    }
    else{
      return false
    }
  }


  return (
    <View>
      
       <Formik
      initialValues={{ id , email: '', password: '', confirmPassword: '', loggedIn: false , favoritRecipe: []}}
       onSubmit={(values) => {
          handleFormSubmit(values);
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          handleSubmit,
          isValid,
        }) => (
          <View style={styles.formContainer}>

            <Text>Email</Text>
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
            <Text>Password</Text>
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
            <Text>Confirm Password</Text>
            <TextInput
              onChangeText={handleChange("confirmPassword")}
              onBlur={handleBlur("confirmPassword")}
              style={inputStyle}
              secureTextEntry={true}
              value={values.confirmPassword}
              placeholder="Confirm Password"
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                {errors.confirmPassword}
              </Text>
            )}
    
            <Button disabled={!isValid} onPress={() => { handleSubmit()
            ,handleFormSubmit(values);
           }} title="Submit"
            />
            
            <Button  onPress={() => navigation.navigate("Home")} title="Cancel"/>
          </View>
        )}
      </Formik>

    </View>
  );
}


const styles = StyleSheet.create({
  formContainer: {
    padding: 50,
  },
});
  
  const inputStyle = {
    borderWidth: 1,
    borderColor: "#4e4e4e",
    padding: 12,
    marginBottom: 5,
  };