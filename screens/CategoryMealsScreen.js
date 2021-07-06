import React from "react"
import { View, Text, StyleSheet, FlatList } from "react-native"
import MealComponent from "../components/MealComponent"

import { CATEGORIES, MEALS } from "../data/dummy-data"

const CategoryMealsScreen = props => {
    const renderMealItem = itemData => {
        return (
            <MealComponent
                title={itemData.item.title}
                onSelectMeal={() => props.navigation.navigate({routeName: "MealDetail", params: {mealId: itemData.item.id}} )}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image ={itemData.item.imageUrl}
            />
        )
    }


    const catId = props.navigation.getParam("categoryId")

    const displayedMeals = MEALS.filter((meals) => meals.categoriesId.indexOf(catId) >= 0)

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} keyExtractor={(item, index) => item.id} renderItem={renderMealItem} style={{ width: "100%" }} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) => {
    const catId = navigationData.navigation.getParam("categoryId")
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CategoryMealsScreen;