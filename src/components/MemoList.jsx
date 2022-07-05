import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, FlatList } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';
import { format } from 'date-fns';
import { getAuth } from 'firebase/auth';
import { getFirestore, deleteDoc, doc } from "firebase/firestore";


export default function MemoList(props){
    const { memos } = props;
    const navigation = useNavigation();

    function deleteMemo(id) {
      const db = getFirestore();
      const auth = getAuth();
      const user  = auth.currentUser;
      if (user) {
          const ref = `users/${user.uid}/memos`;
//          Alert.alert('メモを削除します。よろしいですか？'[
//            {
//              text: 'キャンセル',
//              onPress: () => {},
//            },
//            {
//              text: '削除します',
//              style: 'destructive',
//               onPress: () => {
                deleteDoc(doc(db, ref, id))
                .catch((error) => {
                    Alert.alert('削除に失敗しました');
                })} 
//               }
//          ]);
//      }
    }

    function renderItem({ item }) {
      return(
        <TouchableOpacity
          style={styles.memo_list_item}
          onPress={() => {navigation.navigate('MemoData', {id: item.id});}}
        >
          <View>
            <Text style={styles.memo_list_item_title} numberOfLines={1}>{ item.bodyText }</Text>
            <Text style={styles.memo_list_item_date}>{ format(item.updatedAt, 'yyyy年M月dd日 HH時mm分') }</Text>
          </View>
          <TouchableOpacity
            style={styles.memo_delete}
            onPress={() => { deleteMemo(item.id); }}>
            <Feather name='x' size={24} color='#b0b0b0' />
          </TouchableOpacity>
        </TouchableOpacity>
      );
    }

    return(

      <View style={styles.container}>
        <FlatList
          data={memos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id }
        />
      </View>
    
    );
}


MemoList.propTypes = {
  memos: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),   
  })).isRequired,
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    memo_list_item:{
        backgroundColor: 'ffffff',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:16,
        paddingHorizontal:19,
        alignItems:'center',
        borderBottomWidth:1,
        borderColor:'rgba(0,0,0,0.15',
      },
      memo_list_item_title:{
        fontSize:20,
        lineHeight:32,
      },
      memo_list_item_date:{
        fontSize:12,
        lineHeight:16,
        color:'#848484',
      },
      memo_delete:{
        padding:8
      },
    
}); 
