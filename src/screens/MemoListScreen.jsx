import React from "react";
import { StyleSheet, View, Alert } from 'react-native';
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";
import LogOutButton from "../components/LogOutButton";
import { useEffect, useState } from "react";
import { getAuth } from 'firebase/auth';
import { collection, getFirestore, onSnapshot, query, orderBy } from "firebase/firestore";

export default function MemoListScreen(props) {
  const {navigation}=props;
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    }); 
  },[]);
  
  useEffect(() => {
    const db = getFirestore();
    const auth = getAuth();
    const user  = auth.currentUser;
    let unsubscribe = () => {};
    if (user) {
//      const ref = collection(db, `users/${user.uid}/memos`);
      const ref = query(collection(db, `users/${user.uid}/memos`), orderBy('updatedAt', 'desc'));
      unsubscribe = onSnapshot(ref, (snapshot) => {
        const userMemos = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userMemos.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setMemos(userMemos);
      }, (error) => {
        console.log(error);
        Alert.alert('データの読み込みに失敗しました。');
      });
    }
    return unsubscribe;
  },[]); 
  
  return (
    <View style={styles.container}>
      <MemoList memos={memos} />
      <CircleButton
       name='plus'
       onPress={() => {navigation.navigate('MemoCreate');}} 
      />
        
    </View>
  );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFE5E5',
    },
     
  });
  