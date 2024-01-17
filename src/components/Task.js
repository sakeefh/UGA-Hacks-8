import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return (
            <View style={styles.item}>
                <View style={styles.itemLeft}>
                    <TouchableOpacity style={styles.square}></TouchableOpacity>
                    <Text style={styles.itemText}>{props.text}</Text>
                </View>
                <View style={styles.circular}></View>
            </View>
    )
}

const styles = StyleSheet.create({

    item: {

        backgroundColor: 'white',
        padding: 25,
        borderRadius: 10,
        alignItems: 'left',
        justifyContent: 'space-between',
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,

    },

    itemLeft: {

        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },



});

export default Task;