import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createDrawerNavigator } from "react-navigation-drawer"
import { createAppContainer } from "react-navigation"
import { Platform, Text } from "react-native"
import Colors from "../constants/Colors"
import { Ionicons } from "@expo/vector-icons"
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealsDetailScreen from "../screens/MealsDetailScreen"
import FavoritesScreen from "../screens/FavoritesScreen"
import FiltersScreen from "../screens/FiltersScreen"


const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor,
  headerTitleStyle: {
    fontFamily: "open-sans-bold"
  },
  headerBackTitleStyle: {
    fontFamily: "open-sans-bold"
  },
}

const MealsNavigator = createStackNavigator({
  Categories: { screen: CategoriesScreen, navigationOptions: { headerTitle: "Meal Categories" } },
  CategoryMeals: { screen: CategoryMealsScreen },
  MealDetail: { screen: MealsDetailScreen },

}, {
  defaultNavigationOptions: defaultStackNavOptions,
});

const FavoritesNavigator = createStackNavigator({
  Favorites: { screen: FavoritesScreen },
  MealDetail: { screen: MealsDetailScreen }
}, {
  defaultNavigationOptions: defaultStackNavOptions,
});


const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />
      },
      tabBarLabel : Platform.OS === "android" ? <Text style={{fontFamily: "open-sans"}}>Meals</Text> : "Meals"
    }
  },
  Favorites: {
    screen: FavoritesNavigator, navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
      },
      tabBarLabel : Platform.OS === "android" ? <Text style={{fontFamily: "open-sans"}}>Favorites</Text> : "Favorites"
    }
  }
}

const MealsFavTabNavigator = Platform.OS === "android"
  ? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: Colors.accentColor,
    shifting: false,
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  })
  : createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
      labelStyle : {
        fontFamily: "open-sans"
      }
    }
  })

const FilterNavigator = createStackNavigator({
  Filters: FiltersScreen,
}, {
  defaultNavigationOptions: defaultStackNavOptions
})



const MainNavigator = createDrawerNavigator({
  MealsFav: {screen : MealsFavTabNavigator, navigationOptions:{drawerLabel:"Meals"}},
  Filters: FilterNavigator
},{
  contentOptions : {
    activeTintColor: Colors.accentColor,
    labelStyle : {
      fontFamily: "open-sans-bold"
    },
  }
});

export default createAppContainer(MainNavigator)