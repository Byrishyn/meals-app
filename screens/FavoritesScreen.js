import React from "react"
import { HeaderButtons, Item } from "react-navigation-header-buttons"
import MealList from "../components/MealList"
import { useSelector } from "react-redux"

import HeaderButton from "../components/HeaderButton"
import { StyleSheet, View } from "react-native"
import DefaultText from "../components/DefaultText"

const FavoritesScreen = props => {
    const favMeals = useSelector(state => state.meals.favoriteMeals)

    if (favMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some !</DefaultText>
            </View>
        )
    }
    return (
        <MealList listData={favMeals} navigation={props.navigation} />
    )
}

FavoritesScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Your Favorite Meals",
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    content : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})


export default FavoritesScreen;