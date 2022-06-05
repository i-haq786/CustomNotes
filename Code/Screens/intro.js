import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from'react';
import { View, StyleSheet, Text, TextInput, StatusBar, Dimensions } from 'react-native';
import { logToConsole } from 'react-native/Libraries/Utilities/RCTLog';
import RoundIconBtn from '../components/RoundIconBtn';
import colors from '../misc/colors';
//import { useState } from 'react/cjs/react.production.min';
//import StepForwardOutlined, { RightCircleFilled } from '@ant-design/icons';

const Intro= () => {
        const[name,setName]=useState('');
        const handleOnChangeText= text => setName (text);

        const handleSubmit =async() => {
            const user = { name: name};
             await AsyncStorage.setItem('user', JSON.stringfy(user));
        };

    return(
        <>
        <StatusBar hidden />
        <View style={styles.container}>
            <Text style={styles.inputTitle} > Enter Your Name to Continue...</Text>
            
            <TextInput 
            value={name} 
            onChangeText={handleOnChangeText} 
            placeholder='E.g: Inzamam-ul-Haq' 
            style={styles.textInput} 
            />
           {name.trim().length >=3 ?(
                <RoundIconBtn onPress={handleSubmit}/>
           ) : null}
        </View>
        </>
    );
};

const width = Dimensions.get('window').width -50;
console.log(width)
const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.BGC,
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    inputTitle: {
        alignSelf: 'flex-start',
        paddingLeft: 30,
        marginBottom: 5,
        fontSize: 18,
        fontStyle: 'normal',
        fontFamily: "Cochin",
    },
    textInput: {        
        borderWidth: 2,
        borderColor: colors.PRIMARY,
        width,
        height:40,
        borderRadius: 12,
        paddingLeft: 20,
        fontSize: 13,
        marginBottom:15,
    },
});

export default Intro;