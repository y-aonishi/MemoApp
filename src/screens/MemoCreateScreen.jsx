import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import CircleButton from "../components/CircleButton";

export default function MemoCreateScreen(props) {
    const {navigation} = props;
    return(
        <KeyboardAvoidingView style={Styles.conteiner} behavior='height'>
            <View style={Styles.inputconteiner}>
                <TextInput value="" multiline style={Styles.input} />
            </View>
            <CircleButton
             name='check'
             onPress={() => {navigation.goBack();}}
            />
        </KeyboardAvoidingView>
    );
}

const Styles = StyleSheet.create({
    conteiner: {
        flex: 1,
    },
    inputconteiner: {
        paddingHorizontal:27,
        paddingVertical:32,
        flex:1,
    },
    input: {
        flex:1,
        textAlignVertical:'top',
        fontSize:16,
        lineHeight:24,
    },
});
