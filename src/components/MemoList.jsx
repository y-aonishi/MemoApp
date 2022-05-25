import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function MemoList(){
    const navigation = useNavigation();
    return(

      <View>

        <TouchableOpacity
          style={styles.memo_list_item}
          onPress={() => {navigation.navigate('MemoData');}}
        >
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <TouchableOpacity
           style={styles.memo_delete}
           onPress={() => {Alert.alert('Are you sure?');}}>
            <Feather name='x' size={24} color='#b0b0b0' />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.memo_list_item}
          onPress={() => {navigation.navigate('MemoData');}}
        >
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <TouchableOpacity
           style={styles.memo_delete}
           onPress={() => {Alert.alert('Are you sure?');}}>
            <Feather name='x' size={24} color='#b0b0b0' />
          </TouchableOpacity>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.memo_list_item}
          onPress={() => {navigation.navigate('MemoData');}}
        >
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <TouchableOpacity
           style={styles.memo_delete}
           onPress={() => {Alert.alert('Are you sure?');}}>
            <Feather name='x' size={24} color='#b0b0b0' />
          </TouchableOpacity>
        </TouchableOpacity>


      </View>
    
    );
}

const styles = StyleSheet.create({
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
        fontSize:16,
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
