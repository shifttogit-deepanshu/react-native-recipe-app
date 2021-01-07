import React from "react"
import {CATEGORIES,MEALS} from "../data/dummy-data"

import MealList from "../components/MealList"

const CategoryMealsScreen = ({route,navigation}) => {


    const catId = route.params.cat.id

    const dispalyedMeals = MEALS.filter((meal)=>meal.categoryIds.indexOf(catId)>=0)

    const category = CATEGORIES.find((cat)=>cat.id===catId)

    
    
    return (
        <MealList listData={dispalyedMeals} navigation={navigation}/>
    )
    

}

export default CategoryMealsScreen