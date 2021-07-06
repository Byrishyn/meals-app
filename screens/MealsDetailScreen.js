import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import { MEALS } from "../data/dummy-data"

const MealsDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId")

    const selectedMeal = MEALS.find((meal) => meal.id === mealId)


    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to Categories" onPress={() => {
                props.navigation.popToTop();
            }} />
        </View>
    )
}

MealsDetailScreen.navigationOptions = (navigationData) => {
    const mealId = navigationData.navigation.getParam("mealId")
    const selectedMeal = MEALS.find((meal) => meal.id === mealId)
    return {
        headerTitle: selectedMeal.title
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default MealsDetailScreen;