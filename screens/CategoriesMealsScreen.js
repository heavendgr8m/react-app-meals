import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Screens from '../navigation/NavigationScreens';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';


const CategoriesMealsScreen = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate(Screens.MealDetailsScreen,{
                        mealId: itemData.item.id
                    });
                }}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }

    const catId = props.route.params.categoryId;
    const displayedMeals = MEALS.filter(meal =>
        meal.categoryIds.indexOf(catId) >= 0
    );
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    // console.log(catId)
    //SET PARAM AS HEADER TITLE 
    props.navigation.setOptions({ title: selectedCategory.title });

    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={displayedMeals}
                renderItem={renderMealItem}
                style={{ width: '100%' }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: "center",
        alignItems: "center",
    },
});

export default CategoriesMealsScreen;