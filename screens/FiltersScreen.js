import React, { useState, useEffect, useCallback } from "react"
import { View, Text, StyleSheet, Switch, Platform } from "react-native"
import { HeaderButtons, Item } from "react-navigation-header-buttons"

import HeaderButton from "../components/HeaderButton"
import Colors from "../constants/Colors"

const FilterItem = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                value={props.value}
                onValueChange={props.onChange}
                trackColor={{ true: Colors.primaryColor }}
                thumbColor={Platform.OS === "android" ? Colors.primaryColor : ""}
            />
        </View>
    )
}

const FilterScreen = props => {
    const { navigation } = props;
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }

        console.log(appliedFilters)
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian])

    useEffect(() => {
        navigation.setParams({ save: saveFilters })
    }, [saveFilters])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterItem
                label="Gluten-free"
                value={isGlutenFree}
                onChange={() => setIsGlutenFree(!isGlutenFree)}
            />
            <FilterItem
                label="Lactose-free"
                value={isLactoseFree}
                onChange={() => setIsLactoseFree(!isLactoseFree)}
            />
            <FilterItem
                label="Vegan"
                value={isVegan}
                onChange={() => setIsVegan(!isVegan)}
            />
            <FilterItem
                label="Vegetarian"
                value={isVegetarian}
                onChange={() => setIsVegetarian(!isVegetarian)}
            />
        </View>
    )
}

FilterScreen.navigationOptions = (navData) => {
    return {
        headerLeft: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Menu" iconName="ios-menu" onPress={() => {
                navData.navigation.toggleDrawer();
            }} />
        </HeaderButtons>,
        headerRight: <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title="Save" iconName="ios-save" onPress={navData.navigation.getParam("save")} />
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: "center",
    },
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 22,
        textAlign: "center",
        margin: 20,
    },
    filterContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "80%",
        marginVertical: 10
    }
})

export default FilterScreen;