import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer} from "react-navigation"

import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from "../screens/CategoryMealsScreen"
import MealsDetailScreen from "../screens/MealsDetailScreen"

const MealsNavigator = createStackNavigator({
    Categories: {screen: CategoriesScreen},
    CategoryMeals: {screen: CategoryMealsScreen},
    MealsDetail: {screen: MealsDetailScreen},
});

export default createAppContainer(MealsNavigator)