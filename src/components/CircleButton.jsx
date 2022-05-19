import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { string,shape } from 'prop-types';

export default function CircleButton(props) {
    const { children,style }= props;
    return (
        
        <View style={[styles.circle_button,style]}>
          <Text style={styles.circle_button_label}>{children}</Text>
        </View>

    );
  }

  CircleButton.prototype ={
      children: string.isRequired,
      style: shape(),
  };

  CircleButton.defaultProps={
    style:null,
  };

  const styles = StyleSheet.create({
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
  