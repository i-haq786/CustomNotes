import React from 'react';
import { View, Button, StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from '../misc/colors';

const RoundIconBtn = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}Go</Text>
      
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      elevation: 8,
      backgroundColor: colors.Alter,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 14,
      color: "#ffff",
      //fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  });

export default RoundIconBtn;