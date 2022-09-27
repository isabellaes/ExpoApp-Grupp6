import React, {FC} from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    icon: string;
    placeholder: string;
    onChangeText: (text: string) => void;
}

const Input: FC<Props> = (props) => {
    return (
        <View style={styles.container}>
            <View>
                <Ionicons name={props.icon} size={22} color="#555"/>
            </View>
            <View>
                <TextInput placeholderTextColor="#555" placeholder={props.placeholder} onChangeText={props.onChangeText}/>
            </View>
        </View>
    )
}
export default Input;

const styles = StyleSheet.create({
        container: {
            flexDirection: "row",
            alignItems: 'center',
            height: 50,
            backgroundColor: "#E2E4E5"
            
        }
    })
