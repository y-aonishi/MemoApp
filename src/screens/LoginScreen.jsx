import React, {useState,useEffect} from "react";
import { Text, TextInput, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import Button from "../components/Button";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

export default function LoginScreen(props){
    const {navigation} = props;
    const [email, setEmail] = useState('');
    const [pasword, setpasword] =useState('');
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth,(user) => {
            if (user) {
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Memolist'}],
                });
            }
        });
    });


    const handlePress = async () => {
        signInWithEmailAndPassword(auth, email, pasword)
        .then((userCredential) => {
            const user = userCredential;
            navigation.reset({
            index: 0,
            routes:[{name:'MemoList'}],
            });
        })
        .catch((error) => {
            console.log(error.msessage);
            Alert.alert(error.code);
        });
    }

    return(
        <View style={StyleSheet.container}>
            <View style={Styles.inner}>
                <Text style={Styles.title}>Log In</Text>
                <TextInput
                  style={Styles.input}
                  value={email}
                  onChangeText={(text) => {setEmail(text);}}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  placeholder="Email Address"
                  textContentType="emailAddress"
                  />
                <TextInput
                  style={Styles.input}
                  value={pasword}
                  onChangeText={(text) => {setpasword(text);}}
                  autoCapitalize="none"
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                />
                <Button
                 label='Submit'
                 onPress={handlePress}
                />
                <View style={Styles.fottor}>
                    <Text style={Styles.fottertext}>Not registered?</Text>
                    <TouchableOpacity
                       onPress={() => {navigation.reset({
                        index:0,
                        routes:[{name:'SignUp'}]
                      })}}>                
                      <Text style={Styles.fotterlink}>Sign up here!</Text>
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
