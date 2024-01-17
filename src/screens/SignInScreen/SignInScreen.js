import React, {useState} from "react";
import {View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, SafeAreaView} from 'react-native'
import CustomInput from "../../components/CustomInput";
import { NavigationContainer } from '@react-navigation/native';


const SignInScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            Login
            </Text>
            
            <CustomInput placeholder={"Email"} value={email} setValue={setEmail}/>
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
           
            <TouchableOpacity
                onPress={() => console.warn('Success')}
                style={styles.button1}>
                <Text style={{
            color: "white",
        }}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.button2}>
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.button2}>
                <Text>No Account? Click Here!</Text>
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
export default SignInScreen