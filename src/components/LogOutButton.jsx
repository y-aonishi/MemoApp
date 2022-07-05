import React from "react";
import { TouchableOpacity,Text,StyleSheet,Alert } from "react-native";
//import firebase from 'firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

export default function LogOutButton() {
  const auth = getAuth();
  const navigation = useNavigation();
  function handlePress() {
    signOut(auth)
    .then(() => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    })
    .catch((error) => {
        Alert.alert('ログアウトに失敗しました') ;    
    });
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
        <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );   
}

const styles = StyleSheet.create({
    container: {
        paddingHorizantal: 12,
        paddingVertical  : 4,
        
    },
    label:{
        fontsize: 14,
        color: 'rgba(255 255 255 0.7)',
    },
});
