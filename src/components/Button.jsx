import { string } from "prop-types";
import React from "react";
import { View,Text,StyleSheet } from "react-native";

export default function Button(props){
    const {label} = props;
    return(
        <View style={Styles.buttoncontainer}>
            <Text style={Styles.buttonlabel}>{label}</Text>
        </View>
    );
}

Button.prototype = {
    label:string.isRequired,
};

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


