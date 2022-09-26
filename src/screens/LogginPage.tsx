import { Button, View, Text } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../App";

type Props = NativeStackScreenProps<RootStackParamList, "LoggIn">;

export default function LoggInPage({ navigation, route }: Props) {
  return (
    <View>
      <Text>LoggInPage</Text>
      <Button
        title="Off line mood"
        onPress={() => navigation.navigate("Recept")}
      />
      <Button title="Sign Up" onPress={() => navigation.navigate("SignUp")} />
    </View>
  );
}
