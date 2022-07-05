import React, {useState } from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView, Alert } from "react-native";
import CircleButton from "../components/CircleButton";
import { shape, string } from "prop-types";
import { getAuth } from 'firebase/auth';
import { getFirestore, updateDoc, doc } from "firebase/firestore";

export default function MemoEditScreen(props) {
    const {navigation, route} = props;
    const {id, bodyText } = route.params;
    const [body, setBody] =useState(bodyText);

    function handlePress() {
        const db = getFirestore();
        const auth = getAuth();
        const user  = auth.currentUser;
        if (user) {
            const ref = `users/${user.uid}/memos`;
            updateDoc(doc(db, ref, id),{
              bodyText: body,
              updatedAt: new Date(),  
            })
            .then(() => {
                navigation.goBack();
            })
            .catch((error) => {
                Alert.alert(error.code);
            });            
        }
    }

    return(
        <KeyboardAvoidingView style={Styles.conteiner} behavior='height'>
            <View style={Styles.inputconteiner}>
                <TextInput
                  value = {body}
                  multiline style={Styles.input}
                  onChangeText={(text) => { setBody(text);}}
                 />
            </View>
            <CircleButton
             name='check' 
             onPress={handlePress}
            />
        </KeyboardAvoidingView>
    )    
}

MemoEditScreen.propTypes = {
    route: shape({
        params: shape({ id: string, bodyText: string }),
    }).isRequired,
};


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
