import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, } from "react-native";

const CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return(
    <View style={styles.container}>
    <TextInput 
            value={value} 
            onChangeText={setValue} 
            placeholder={placeholder} 
            style={styles.input}
            secureTextEntry={secureTextEntry}
            />
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',

        borderColor: '#C7C7C7',
        borderWidth: 1,
        borderRadius: 5,

        paddingHorizontal: 10,
        marginVertical: 5,
    },
    input: {
        height: 40,
    },
})
export default CustomInput