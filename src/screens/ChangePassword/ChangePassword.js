import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import CustomInput from "../../components/CustomInput";
import { NavigationContainer } from '@react-navigation/native';


const ChangePassword = ({navigation}) => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [code, setCode] = useState('');
    return (
        <SafeAreaView>
        <View style={styles.root}>
        <Text style={{
            alignSelf: "center",
            fontSize: 24,
            fontWeight: 'bold',
            color: '#016838',
            marginBottom: 10,
        }}>
            Change Password
            </Text>
            
            <CustomInput placeholder={"Code"} value={code} setValue={setCode}/>
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder={"Confirm Password"} value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true}/>
            <TouchableOpacity
                onPress={() => console.warn('Success')}
                style={styles.button1}>
                <Text style={{
            color: "white",
        }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.button2}>
                <Text>Back to Sign In</Text>
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    root: {
        alignIterms: 'center',
        // justifyContent: 'center',
        // textAlign: 'center',
        padding: 20,
    },
    button1: {
        alignItems: 'center',
        backgroundColor: '#016838',
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
    },
    button2: {
        alignItems: 'center',
    padding: 10,
    },
});
export default ChangePassword