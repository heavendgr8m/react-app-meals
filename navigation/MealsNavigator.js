import React from 'react';
import { Text, Button, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoriesMealsScreen from '../screens/CategoriesMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Screens from '../navigation/NavigationScreens';
import Colors from '../constants/Color';


const MealsNavigator = createStackNavigator();
// {
//     Categories: CategoriesScreen,
//     CategoryMeals: { screen: CategoriesMealsScreen },
//     MealDetail: MealDetailScreen,
//     FavoritesScreen: 'Favorites',

// }
const MealsContainer = props => {
    return (
        <NavigationContainer independent={true}>
            <MealsNavigator.Navigator
                screenOptions={styles.header}
                mode="card"
                headerMode="float"
            >
                <MealsNavigator.Screen
                    name={Screens.CategoriesScreen}
                    component={CategoriesScreen}
                />
                <MealsNavigator.Screen
                    name={Screens.CategoriesMealsScreen}
                    component={CategoriesMealsScreen}
                />
                <MealsNavigator.Screen
                    name={Screens.MealDetailsScreen}
                    component={MealDetailScreen}
                />
            </MealsNavigator.Navigator>
        </NavigationContainer>
    );
}

const MealsTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator() : createBottomTabNavigator();

const MealsTabContainer = props => {
    return (
        <NavigationContainer>
            <MealsTabNavigator.Navigator
                tabBarOptions={{
                    activeTintColor: Colors.accentColor
                }}
                shifting={true}
                barStyle={{
                    backgroundColor: Colors.primaryColor
                }}
            >
                <MealsTabNavigator.Screen
                    name={Screens.CategoriesScreen}
                    component={MealsContainer}
                    options={{
                        tabBarIcon: (tabInfo) => { return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />; },
                        tabBarColor: Colors.primaryColor
                    }}

                />
                <MealsTabNavigator.Screen
                    name={Screens.FavoritesScreen}
                    component={FavoritesContainer}
                    options={{
                        tabBarIcon: (tabInfo) => { return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />; },
                        tabBarColor: Colors.accentColor
                    }}
                />
            </MealsTabNavigator.Navigator>
        </NavigationContainer>

    );
}

const FavoritessTabNavigator = createStackNavigator();

const FavoritesContainer = props => {
    return (
        <NavigationContainer
        >
            <FavoritessTabNavigator.Navigator>
                <FavoritessTabNavigator.Screen name={Screens.FavoritesScreen} component={FavoritesScreen} />
                <FavoritessTabNavigator.Screen name={Screens.MealDetailsScreen} component={MealDetailScreen} />
            </FavoritessTabNavigator.Navigator>
        </NavigationContainer>
    );
}

const defaultStackNavOptions = {

}

const styles = {
    header: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? '#fff' : Colors.primaryColor
    },
    mode: "card"
}
export default MealsTabContainer; 
