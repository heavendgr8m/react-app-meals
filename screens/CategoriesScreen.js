import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, FlatList, TouchableOpacity } from 'react-native';
import Screens from '../navigation/NavigationScreens';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';



const CategoriesScreen = props => {
    props.navigation.setOptions({ title: 'Meal Categories' });

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate(Screens.CategoriesMealsScreen,
                        {
                            categoryId: itemData.item.id
                        })
                }} />
        );
    }

    return (
        <FlatList
            keyExtractor={(item, index) => item.id}
            data={CATEGORIES}
            renderItem={renderGridItem}
            numColumns={2}
        />
    );
}



const styles = StyleSheet.create({
    
});


export default CategoriesScreen;