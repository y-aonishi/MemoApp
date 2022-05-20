import React from "react";
import { Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import AppBar from "../components/AppBar";
import Button from "../components/Button";

export default function SignUpScreen(){
    return(
        <View style={StyleSheet.container}>
            <AppBar />
            <View style={Styles.inner}>
                <Text style={Styles.title}>Sign Up</Text>
                <TextInput value="Email address" style={Styles.input}></TextInput>
                <TextInput value="Passwowd" style={Styles.input}></TextInput>
                <Button label='Submit' onPress={() => {Alert.alert('Submit')}}/>
                <View style={Styles.fottor}>
                    <Text style={Styles.fottertext}>Already registered?</Text>
                    <TouchableOpacity>
                        <Text style={Styles.fotterlink}>Log In.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const Styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f0f4f8'
    
    },
    inner:{
        paddingHorizontal:27,
        paddingVertical:24,
    },
    title:{
        fontSize:24,
        lineHeight:32,
        fontWeight:'bold',
        marginBottom:24,
    },
    input:{
        fontSize:16,
        height:48,
        borderColor:'#dddddd',
        borderWidth:1,
        backgroundColor:'#ffffff',
        paddingHorizontal:8,
        marginBottom:16,
    },
    fottertext:{
        fontSize:14,
        lineHeight:24,
        marginRight:8,
    },
    fotterlink:{
        fontSize:14,
        lineHeight:24,
        color:'#467fd3',
    },
    fottor:{
        flexDirection:'row',
    },
});
