import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import Screens from '../navigation/NavigationScreens';
import MealItem from '../components/MealItem';



const MealList = props => {

    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                onSelectMeal={() => {
                    props.navigation.navigate(Screens.MealDetailsScreen, {
                        mealId: itemData.item.id
                    });
                }}
                duration={itemData.item.duration}ks
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
            />
        )
    }
    return (
        <View style={styles.screen}>
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.listData}
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

export default MealList;