import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react/cjs/react.production.min';
import Intro from './Code/Screens/intro';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
   const findUser = async () => {
      const result = await AsyncStorage.getItem('user');
      console.log(result);
    };

    useEffect (() => {
      findUser();
    }, []);

 return <Intro /> ;
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor:'#ffff',
    alignItems:'center',
    justifyContent:'center',
 },
});