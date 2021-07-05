import React from "react"
import {View, Text, StyleSheet, Button} from "react-native"

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>The Categoriy Meals Screen !</Text>
            <Button title="Go to Meals screen"　onPress={
                ()=> props.navigation.navigate("MealsDetail")
                }/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})

export default CategoryMealsScreen;