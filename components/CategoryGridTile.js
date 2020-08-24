import React, { useState } from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TouchableOpacity, TouchableNativeFeedback } from 'react-native-gesture-handler';

const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback
    }

    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{ height: '100%' }}
                onPress={props.onSelect}
            >
                <View style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}>{props.title}</Text>
                </View>
            </TouchableCmp >
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'white',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        padding: 15,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? "hidden" : "visible",
    },
    title: {
        fontFamily: 'open-sans',
        fontSize: 22,
        textAlign: "right"
    }

});

export default CategoryGridTile;