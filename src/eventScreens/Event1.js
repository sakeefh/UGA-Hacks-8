import React from "react";
import { View, Text, StyleSheet, useWindowDimensions, SafeAreaView, ScrollView, Modal, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

const Event1 = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style={styles.sectionTitle}>Feed the Homeless</Text>
            </View>
            <View>
                <Text style={styles.bodyHeader}>Organization</Text>
                <Text style={styles.body}> Athens Community Outreach</Text>
            </View>
            <View>
                <Text style={styles.bodyHeader}>Date</Text>
                <Text style={styles.body}> March 6th, 2023</Text>
            </View>
            <View>
                <Text style={styles.bodyHeader}>Location</Text>
                <Text style={styles.body}> Bishop Park, 705 Sunset Dr, Athens, GA 30606</Text>
            </View>
            <View>
                <Text style={styles.bodyHeader}>Description</Text>
                <Text style={styles.body}>Join us in feeding the homeless community in Athens, GA. We will be providing meals and basic necessities to those in need. Be a part of this rewarding experience and make a difference in someone's life.</Text>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    sectionTitle: {
    
        fontSize: 40,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 5,
    },
    bodyHeader: {
    
        fontSize: 30,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 5,
    },
    body: {
        fontSize: 20,
        paddingTop: 10,
        paddingHorizontal: 20,
        paddingBottom: 5,
    }
});

export default Event1;