import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React,{useState,useEffect} from 'react';
import colors from '../misc/colors';

const NoteScreen = () => {
    const [greet, setGreet]= useState('Evening');
    const [name, setName]= useState('Inzamam');

    const findGreet = () => {
        const hrs= new Date().getHours()
         if(hrs==0 || hrs <12)return setGreet('Morning');
         if(hrs==1 || hrs<17)return setGreet('Afternoon');
         console.log(hrs);
         setGreet('Evening');
    }

    useEffect(() => {
      findGreet();
      }, [])
    
  return (
      <>
      <StatusBar barStyle= 'dark-content' backgroundColor={colors.LIGHT} />
      <View style={styles.container}>
      <Text style={styles.header}>{`Good ${greet} ${name}` }</Text>
    </View>
    </>
  )
} 

const styles = StyleSheet.create({
    header:{
        //fontFamily: "Monospace",
        fontsize: 50,
        paddingTop: 50,
        paddingLeft:40,
        fontWeight: 'normal',
        
    },
});
export default NoteScreen;