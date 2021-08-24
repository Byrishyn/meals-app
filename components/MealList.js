import React from "react"
import { FlatList, StyleSheet, View } from "react-native"
import MealComponent from "./MealComponent"

const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealComponent
                title={itemData.item.title}
                onSelectMeal={() =>
                    props.navigation.navigate({
                        routeName: "MealDetail",
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title
                        }
                    })}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
            />
        )
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={renderMealItem}
                style={{ width: "100%" }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default MealList;