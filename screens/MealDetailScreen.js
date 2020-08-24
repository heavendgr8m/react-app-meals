import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { MEALS } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';

const MealDetailScreen = props => {

    const mealId = props.route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
    props.navigation.setOptions({
        title: selectedMeal.title,
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Favorite"
                    iconName="ios-star"
                    onPress={() => {
                        console.log('Mark Fav');
                    }}
                />
                
            </HeaderButtons>
        ),

    });

    // console.log(mealId)
    return (
        <View style={styles.container}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go Back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },
});

export default MealDetailScreen;