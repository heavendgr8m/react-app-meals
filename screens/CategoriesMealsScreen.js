import { StatusBar } from 'expo-status-bar';
import React from 'react';
// import { StyleSheet, Text, View, Button } from 'react-native';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealList from '../components/MealList';


const CategoriesMealsScreen = props => {
    

    const catId = props.route.params.categoryId;
    const displayedMeals = MEALS.filter(meal =>
        meal.categoryIds.indexOf(catId) >= 0
    );
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    // console.log(catId)
    //SET PARAM AS HEADER TITLE 
    props.navigation.setOptions({ title: selectedCategory.title });


    return (
        <MealList listData={displayedMeals} navigation={props.navigation} />
    );
    // (

    //     // <View style={styles.screen}>
    //     //     <FlatList
    //     //         keyExtractor={(item, index) => item.id}
    //     //         data={displayedMeals}
    //     //         renderItem={renderMealItem}
    //     //         style={{ width: '100%' }}
    //     //     />
    //     // </View>
    // );
}

// const styles = StyleSheet.create({
//     screen: {
//         flex: 1,
//         backgroundColor: '#fff',
//         justifyContent: "center",
//         alignItems: "center",
//     },
// });

export default CategoriesMealsScreen;