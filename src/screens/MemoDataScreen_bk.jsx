import React from "react";
import { View, Text, ScrollView } from "react-native";

import AppBar from "../components/AppBar";

export default function MemoDataScreen (){
    return(
        <View>
            <AppBar />
            <View>
                <Text>買い物リスト</Text>
                <Text>2022年5月15日 10:00</Text>
            </View>

            <ScrollView>
                <View>
                    <Text>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                    カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。なお、組見本の「組」とは文字組のことです。活字印刷時代の用語だったと思います。このダミーテキストは自由に改変することが出来ます。主に書籍やウェブページなどのデザインを作成する時によく使われます。書体やレイアウトなどを確認するために用います。
                    ダミーテキストはダミー文書やダミー文章とも呼ばれることがあります。カタカナ語が苦手な方は「組見本」と呼ぶとよいでしょう。主に書籍やウェブページなどのデザインを作成する時によく使われます。これは正式な文章の代わりに入れて使うダミーテキストです。
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
}
