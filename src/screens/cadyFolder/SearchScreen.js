import React from "react";
import {View,Text} from 'react-native';

const SearchScreen = () => {
    return (
        <View style={{
            height: '100%',
            backgroundColor: '#33E6FA',
            justifyContent: 'center',
        }}>
            <Text style={{fontSize: 40, fontWeight: 'bold', letterSpacing: 5}}> Search</Text>
        </View>
    )
}

export default SearchScreen;