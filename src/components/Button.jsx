import { func, string } from "prop-types";
import React from "react";
import { View,Text,StyleSheet, TouchableOpacity } from "react-native";

export default function Button(props){
    const {label,onPress} = props;
    return(
        <TouchableOpacity style={Styles.buttoncontainer} onPress={onPress}>
            <Text style={Styles.buttonlabel}>{label}</Text>
        </TouchableOpacity>
    );
}

Button.prototype = {
    label:string.isRequired,
    onPress:func,
};

Button.defautProps = {
    onPress:null,
}

const Styles=StyleSheet.create({
    buttoncontainer:{
       backgroundColor:'#467fd3', 
       borderRadius:4,
       alignSelf:'flex-start',
       marginBottom:24,
    },
    buttonlabel:{
        fontSize:16,
        lineHeight:32,
        paddingHorizontal:32,
        paddingVertical:8,
        color:'#ffffff',
    },
});


