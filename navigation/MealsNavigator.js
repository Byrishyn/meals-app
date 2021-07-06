import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation"
import { Platform } from "react-native"
import Colors from "../constants/Colors"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealsDetailScreen from "../screens/MealsDetailScreen"
import FavoritesScreen from "../screens/FavoritesScreen"

const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen, navigationOptions: { headerTitle: "Meal Categories" } },
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: { screen: MealsDetailScreen },

}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  }
});

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals : MealsNavigator,
  Favorites : FavoritesScreen
})

export default createAppContainer(MealsFavTabNavigator)