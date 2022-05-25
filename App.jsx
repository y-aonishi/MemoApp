/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import LoginScreen from './src/screens/LoginScreen';
import MemoCreateScreen from './src/screens/MemoCreateScreen';
import MemoDataScreen from './src/screens/MemoDataScreen';
import MemoEditScreen from './src/screens/MemoEditScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import MemoListScreen from './src/screens/MemoListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { CardStyleInterpolators } from '@react-navigation/stack';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='SignUp'
        screenOptions={{
          headerStyle: {backgroundColor: '#467fd3'},
          headerTitleStyle:{color:'#ffffff'},
          headerTitle:'Memo App',
          headerTintColor:'#ffffff',
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          qestureEnabled:true,
          qestureDirection: 'horizontal',
        }}>
         <Stack.Screen name = 'MemoCreate' component={MemoCreateScreen} />
         <Stack.Screen name = 'MemoList' component={MemoListScreen} />
         <Stack.Screen name = 'MemoData' component={MemoDataScreen} />
         <Stack.Screen name = 'MemoEdit' component={MemoEditScreen} />
         <Stack.Screen
           name = 'Login'
           component={LoginScreen}
           options={{
             cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid,
           }}
          />
         <Stack.Screen
           name = 'SignUp'
           component={SignUpScreen}
           options={{
            cardStyleInterpolator:CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>

    );
}
