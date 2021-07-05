import React from "react"
import { View, Text, StyleSheet, Button } from "react-native"
import Colors from "../constants/Colors"

import { CATEGORIES } from "../data/dummy-data"

const CategoryMealsScreen = props => {
    const catId = props.navigation.getParam("categoryId")

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)
    return (
        <View style={styles.screen}>
            <Text>The Categoriy Meals Screen !</Text>
            <Text>{selectedCategory.title}</Text>
            <Button title="Go to details" onPress={() =>
                props.navigation.navigate("MealsDetail")}
            />
            <Button title="Go back" onPress={() => props.navigation.goBack()} />
        </View>
    )
}

CategoryMealsScreen.navigationOptions = (navigationData) =>{
    const catId = navigationData.navigation.getParam("categoryId")
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId)

    return {
        headerTitle: selectedCategory.title,
        headerStyle : {
          backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
        },
        headerTintColor : Platform.OS === "android" ? "white" : Colors.primaryColor
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