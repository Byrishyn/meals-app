import React from "react"
import { StyleSheet } from "react-native"
import MealList from "../components/MealList"

import { CATEGORIES } from "../data/dummy-data"

import { useSelector } from "react-redux"

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam("categoryId")

    const availableMeals = useSelector(state => state.meals.filteredMeals)

    const displayedMeals = availableMeals.filter((meals) => meals.categoriesId.indexOf(catId) >= 0)

    return (
        <MealList listData={displayedMeals} navigation={props.navigation}/>
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
    
})

export default CategoryMealsScreen;