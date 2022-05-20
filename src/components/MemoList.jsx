import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';

export default function MemoList(){
    return(
        <View>

        <View style={styles.memo_list_item}>
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name='x' size={16} color='#b0b0b0' />
          </TouchableOpacity>
        </View>

        <View style={styles.memo_list_item}>
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name='x' size={16} color='#b0b0b0' />
          </TouchableOpacity>
        </View>

        <View style={styles.memo_list_item}>
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <TouchableOpacity>
            <Feather name='x' size={16} color='#b0b0b0' />
          </TouchableOpacity>
        </View>       
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
    
});   
