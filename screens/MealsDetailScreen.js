import React, { useCallback, useEffect } from "react"
import { ScrollView, View, Image, Text, StyleSheet } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import HeaderButton from "../components/HeaderButton"
import DefaultText from "../components/DefaultText"
import { useSelector, useDispatch } from "react-redux"
import { toggleFavorite } from "../store/actions/meals"

const ListItem = props => {
    return <View style={styles.listItem}>
        <DefaultText>{props.children}</DefaultText>
    </View>
}

const MealsDetailScreen = props => {
    const mealId = props.navigation.getParam("mealId")

    const isMealFavorite = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === mealId))

    const availableMeals = useSelector(state => state.meals.meals)

    const selectedMeal = availableMeals.find((meal) => meal.id === mealId)

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch, mealId])

    useEffect(() => {
        props.navigation.setParams({ toggleFav : toggleFavoriteHandler })
    }, [toggleFavoriteHandler])

    useEffect(() => {
        props.navigation.setParams({ isFav : isMealFavorite })
    }, [isMealFavorite])


    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.textTitle}>Ingredients</Text>
            {selectedMeal.ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)}
            <Text style={styles.textTitle}>Steps</Text>
            {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
        </ScrollView>
    )
}

MealsDetailScreen.navigationOptions = (navigationData) => {
    const mealTitle = navigationData.navigation.getParam("mealTitle")
    const isFavorite = navigationData.navigation.getParam("isFav")
    const toggleFavorite = navigationData.navigation.getParam("toggleFav")
    return {
        headerTitle: mealTitle,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
                title="Favorite"
                iconName={isFavorite ? "ios-star" : "ios-star-outline"}
                onPress={toggleFavorite}
            />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 200
    },
    details: {
        flexDirection: "row",
        padding: 15,
        justifyContent: "space-around"
    },
    textTitle: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center"
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: "#ccc",
        borderWidth: 1,
        padding: 10,
    }
})

export default MealsDetailScreen;