import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoDataScreen (){
    return(
        <View style={styles.container}>
            <AppBar />
            <View style={styles.memoheader}>
                <Text style={styles.memotitle}>買い物リスト</Text>
                <Text style={styles.memodate}>2022年5月15日 10:00</Text>
            </View>

            <ScrollView style={styles.memobody}>
                <View>
                    <Text style={styles.container.memotext}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
                    ダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。
                    </Text>
                </View>
            </ScrollView>
            <CircleButton style={{top:160,bottom:'auto'}} name='edit-2' />
        </View>
    );
}

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

