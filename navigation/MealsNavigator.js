import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer} from "react-navigation"
import {Platform} from "react-native"
import Colors from "../constants/Colors"
 
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealsDetailScreen from "../screens/MealsDetailScreen"

const MealsNavigator = createStackNavigator({
    Categories: {screen: CategoriesScreen, navigationOptions: {headerTitle: "Meal Categories"}},
    CategoryMeals: {screen: CategoryMealsScreen},
    MealsDetail: {screen: MealsDetailScreen},
    
}, {defaultNavigationOptions : {
    headerStyle : {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : ""
    },
    headerTintColor : Platform.OS === "android" ? "white" : Colors.primaryColor }});

export default createAppContainer(MealsNavigator)