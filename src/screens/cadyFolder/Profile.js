import React from "react";
import {View, SafeAreaView, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Profile = () => {
    return (
        <SafeAreaView>
            <View style={{flexDirection: 'row', marginTop:15, marginLeft: 15}}>
                <Avatar.Image 
                source ={{
                    uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                }}
                size={80}
                />
                 <View style={{marginLeft: 20}}>
                <Title style={{
                    marginTop: 20,
                    marginBottom: 5,
                    fontWeight: 'bold',
                    fontSize: 25,
                }}> Minh Nguyen </Title>
                </View>
            </View>

            <View>
                <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 15}}>
                    <Icon name="map-marker-radius" color="777777" size={20} />
                    <Text style={{marginLeft: 10}}> Athens, Georgia</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 15}}>
                    <Icon name="email" color="777777" size={20} />
                    <Text style={{marginLeft: 10}}> minhg89@gmail.com</Text>
                </View>
                <View style={{flexDirection: 'row', marginLeft: 25, marginTop: 15}}>
                    <Icon name="phone" color="777777" size={20} />
                    <Text style={{marginLeft: 10}}> +1-706-224-6987</Text>
                </View>
            </View>

            <View style={{
                flexDirection:'row',
                borderBottomColor: '#dddddd',
                borderTopColor: '#dddddd',
                height: 100,
                borderBottomWidth: 1,
                borderTopWidth: 1,
                marginTop: 20,
                //justifyContent: 'center',
                }}> 
                <View style={{
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRightColor: '#dddddd',
                        borderRightWidth: 1,
                    }}>
                    <Title> 20</Title>
                    <Caption> Hours</Caption>
                </View>
                <View style={{
                        width: '50%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    <Title> 4</Title>
                    <Caption> Events</Caption>
                </View>
            </View>
            
            <View>
                <TouchableRipple>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginTop: 20,
                    }}>
                        <Icon name="account" color="#777777" size={25}/>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 5,
                        }}>
                            Register Account
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginTop: 20,
                    }}>
                        <Icon name="update" color="#777777" size={25}/>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 5,
                        }}>
                            Current Sign Ups
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginTop: 20,
                    }}>
                        <Icon name="account-check" color="#777777" size={25}/>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 5,
                        }}>
                            Contact Support
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginTop: 20,
                    }}>
                        <Icon name="share-outline" color="#777777" size={25}/>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 5,
                        }}>
                            Share to Friends
                        </Text>
                    </View>
                </TouchableRipple>
                <TouchableRipple>
                    <View style={{
                        flexDirection: 'row',
                        marginLeft: 20,
                        marginTop: 20,
                    }}>
                        <Icon name="tune" color="#777777" size={25}/>
                        <Text style={{
                            marginLeft: 15,
                            marginTop: 5,
                        }}>
                            Settings
                        </Text>
                    </View>
                </TouchableRipple>
            </View>
        </SafeAreaView>
    );
};

export default Profile;