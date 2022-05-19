import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppBar(){
    return(
        <View style={styles.appbar}>
        <View style={styles.appbar_inner}>
          <Text style={styles.appbar_title}>Memo App</Text>
          <Text style={styles.appbar_right}>ログアウト</Text>
        </View>
      </View>

    );

}

const styles = StyleSheet.create({
    appbar: {
        width: '100%',
        height:104,
        backgroundColor: '#467FD3',
        justifyContent: 'flex-end',
      },
      appbar_inner: {
        alignItems:'center'
      },
      appbar_right: {
        position: 'absolute',
        right:19,
        bottom:16,
        color:'rgba(255,255,255, 0.8)',
      },
      appbar_title: {
        marginBottom:8,
        fontSize:22,
        lineHeight:32,
        color: '#ffffff',
        fontWeight:'bold',
      },
    
});
