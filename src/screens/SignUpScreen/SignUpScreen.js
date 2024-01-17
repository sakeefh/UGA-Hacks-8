import React, {useState} from "react";
import {View, Text, StyleSheet, useWindowDimensions, TouchableOpacity, SafeAreaView} from 'react-native'
import CustomInput from "../../components/CustomInput";
// import auth from '@react-native-firebase/auth';
 

const SignUpScreen = ({navigation}) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSignUp= () => {
        auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
        navigation.navigate('SignInScreen')
    }

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
            Create An Account
            </Text>
            <CustomInput placeholder={"First Name"} value={firstname} setValue={setFirstname}/>
            <CustomInput placeholder={"Last Name"} value={lastname} setValue={setLastname}/>
            <CustomInput placeholder={"Email"} value={email} setValue={setEmail}/>
            <CustomInput placeholder={"Password"} value={password} setValue={setPassword} secureTextEntry={true}/>
            <CustomInput placeholder={"Confirm Password"} value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true}/>
            
            <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.button1}>
                <Text style={{
            color: 'white',
        }}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            style={styles.button2}>
                <Text style={{
            alignSelf: "center",
        }}>Already Have an Account?</Text>
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
});
export default SignUpScreen