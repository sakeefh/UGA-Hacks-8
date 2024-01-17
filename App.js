import React from 'react';
import {StatusBar} from 'react-native';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/cadyFolder/HomeScreen';
import SearchScreen from './src/screens/cadyFolder/SearchScreen';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import ForgotPassword from './src/screens/ForgotPassword';
import ChangePassword from './src/screens/ChangePassword';
import Profile from './src/screens/cadyFolder/Profile';
import SetPreferences from './src/screens/SetPreferences/SetPreferences';
import Event1 from './src/eventScreens/Event1';
const LoginStack = createNativeStackNavigator();
function LoginStackScreen()
{
  return(
    <LoginStack.Navigator screenOptions={{
      headerShown: false
    }} initialRouteName="Home">
          <LoginStack.Screen name="Home" component={SignInScreen} />
          <LoginStack.Screen name="SignIn" component={SignInScreen} />
          <LoginStack.Screen name="SignUp" component={SignUpScreen} />
          <LoginStack.Screen name="SetPreferences" component={SetPreferences} />
          <LoginStack.Screen name="ForgotPassword" component={ForgotPassword} />
          <LoginStack.Screen name="ChangePassword" component={ChangePassword} />
        </LoginStack.Navigator> 

        
  );
}


const App = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer> 
        <StatusBar backgroundColor="aqua" barStyle="dark-content" />
        <Tab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, size, color}) => {
                let iconName;
                if(route.name === "Home") {
                    iconName = focused ? 'ios-home' : 'ios-home-outline';
                    size = focused ? size + 8 : size + 5;
                } else if (route.name === 'Search') {
                    iconName = focused ? 'search-sharp' : 'search-outline';
                    size = focused ? size + 8 : size + 5;
                } else if (route.name === 'Profile') {
                    iconName = focused ? 'person-circle-sharp' : 'person-circle-outline';
                    size = focused ? size + 8 : size + 5;
                }
                return <Ionicons name={iconName} size={size} color={color} />;
             },
             tabBarActiveTintColor: 'black',
             tabBarInactiveTintColor: 'black',
             tabBarShowLabel: false,
             

        })}
            tabBarOptions={{
                activeTintColor:'black',
                inactiveTintColor: 'black',
                showLabel: false,
                style: {
                    backgroundColor: '#ffc125',
                    height: 60,
                },
            }}>
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Search" component={SearchScreen}/>
            <Tab.Screen name="Profile" component={Profile}/>
        </Tab.Navigator>   
        </NavigationContainer>

    );
};

export default App;
