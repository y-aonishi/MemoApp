/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <View style={styles.appbar_inner}>
          <Text style={styles.appbar_title}>Memo App</Text>
          <Text style={styles.appbar_right}>ログアウト</Text>
        </View>
      </View>

      <View>

        <View style={styles.memo_list_item}>
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memo_list_item}>
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

        <View style={styles.memo_list_item}>
          <View>
            <Text style={styles.memo_list_item_title}>お買い物リスト</Text>
            <Text style={styles.memo_list_item_date}>2022年5月15日 10:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>       
      </View>
      <View style={styles.circle_button}>
        <Text style={styles.circle_button_label}>+</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFE5E5',
  },
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
  circle_button: {
    backgroundColor:'#467FD3',
    width:64,
    height:64,
    borderRadius:32,
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    right:40,
    bottom:40,
    shadowColor:'#000000',
    shadowOffset:{width:0,height:8},
    shadowOpacity:0.25,
    shadowRadius:8,
    elevation:8,
  },
  circle_button_label: {
    color:'#ffffff',
    fontSize:40,
    lineHeight:40,
  },  
});
