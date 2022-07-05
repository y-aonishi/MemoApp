import React, {useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { shape, string } from "prop-types";
import CircleButton from "../components/CircleButton";
import { getAuth } from 'firebase/auth';
import { getFirestore, onSnapshot, doc } from "firebase/firestore";
import { format } from 'date-fns';

export default function MemoDataScreen (props){
    const {navigation, route} = props;
    const { id } = route.params;
    console.log(id);
    const [memo, setMemo] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const auth = getAuth();
        const user  = auth.currentUser;
        let unsubscribe = () => {};
        if (user) {
            const ref = `users/${user.uid}/memos`;
            unsubscribe = onSnapshot(doc(db, ref, id), (doc) => {
                console.log(doc.id, doc.data());
                const data = doc.data();
                setMemo({
                    id: id,
                    bodyText: data.bodyText,
                    updatedAt: data.updatedAt.toDate(),
                });
            });
        }
        return unsubscribe;    
    },[]);

    return(
        <View style={styles.container}>
            <View style={styles.memoheader}>
                <Text style={styles.memotitle} numberOfLines={2}>{memo && memo.bodyText}</Text>
                <Text style={styles.memodate}>{ memo && format(memo.updatedAt, 'yyyy年M月dd日 HH時mm分') }</Text>
            </View>

            <ScrollView style={styles.memobody}>
                <View>
                    <Text style={styles.container.memotext}>
                        {memo && memo.bodyText}
                    </Text>
                </View>
            </ScrollView>
            <CircleButton
              style={{top:60,bottom:'auto'}}
              name='edit-2'
              onPress={() => {navigation.navigate('MemoEdit', { id: memo.id, bodyText: memo.bodyText});}}
            />
        </View>
    );
}

MemoDataScreen.propTypes = {
    route: shape({
        params: shape({ id: string}),
    }).isRequired,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFE5E5',
    },
    memoheader:{
        backgroundColor: '#467FD3',
        height:96,
        justifyContent:"center",
        paddingVertical:24,
        paddingHorizontal:19,
    },
    memotitle:{
        color:'#ffffff',
        fontSize:20,
        lineHeight:32,
        fontWeight:"bold",
    },
    memodate:{
        color:'#ffffff',
        fontSize:12,
        lineHeight:16,
    },
    memobody:{
        paddingVertical:32,
        paddingHorizontal:27,
    },
    memotext:{
        fontSize:16,
        lineHeight:24,
    },

     
});
