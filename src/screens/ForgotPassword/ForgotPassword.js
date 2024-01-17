import React, {useState} from "react";
import {View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native'
import CustomInput from "../../components/CustomInput";
import { NavigationContainer } from '@react-navigation/native';


const ForgotPassword = ({navigation}) => {
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
            Reset Your Password
            </Text>
            
            <CustomInput placeholder={"Email"} value={email} setValue={setEmail}/>
           
            <TouchableOpacity
                onPress={() => navigation.navigate('ChangePassword')}
                style={styles.button1}>
                <Text style={{
            color: "white",
        }}>Send</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
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
export default ForgotPassword