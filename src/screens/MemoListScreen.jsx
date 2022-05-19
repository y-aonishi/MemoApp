import React from "react";
import { StyleSheet, View } from 'react-native';

import AppBar from "../components/AppBar";
import MemoList from "../components/MemoList";
import CircleButton from "../components/CircleButton";

export default function MemoListScreen() {
    return (
      <View style={styles.container}>
  
        <AppBar />
        <MemoList />
        <CircleButton>+</CircleButton>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFE5E5',
    },
     
  });
  