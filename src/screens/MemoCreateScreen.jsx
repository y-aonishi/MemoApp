import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TextInput, KeyboardAvoidingView } from "react-native";
import CircleButton from "../components/CircleButton";
import { getAuth } from 'firebase/auth';
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function MemoCreateScreen(props) {
    const {navigation} = props;
    const [bodyText, setBodyText] = useState(' ');

    function handlePress() {
        try {
        const db = getFirestore();
        const auth = getAuth();
        const user  = auth.currentUser;
        const { email } = user.email;
        const colRef = collection(db, `users/${ user.uid }/memos`);
//        const docRef = doc(colRef,'memod');
        const data = {
            bodyText,
            updatedAt: new Date(),
        }
    
        addDoc(colRef, data);
        
        console.log('Created!',colRef.data());
        } catch (error) {
          console.log('Error!',error);
        }
        
        navigation.goBack();
    }

    return(
        <KeyboardAvoidingView style={Styles.conteiner} behavior='height'>
            <View style={Styles.inputconteiner}>
                <TextInput  
                    value={bodyText} multiline style={Styles.input}
                    onChangeText={(text) => { setBodyText(text); }}
                    autoFocus
                />
            </View>
            <CircleButton
             name='check'
             onPress={handlePress}
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
