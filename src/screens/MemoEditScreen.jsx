import React from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import CircleButton from "../components/CircleButton";

export default function MemoEditScreen(props) {
    const {navigation} = props;
    return(
        <KeyboardAvoidingView style={Styles.conteiner} behavior='height'>
            <View style={Styles.inputconteiner}>
                <TextInput value="買い物リスト" multiline style={Styles.input} />
            </View>
            <CircleButton
             name='check' 
             onPress={() => { navigation.goBack();}}
            />
        </KeyboardAvoidingView>
    )    
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
