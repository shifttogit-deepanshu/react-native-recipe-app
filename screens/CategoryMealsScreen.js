import React from "react"
import {CATEGORIES} from "../data/dummy-data"
import {connect} from "react-redux"

import MealList from "../components/MealList"

const CategoryMealsScreen = (props) => {


    const catId = props.route.params.cat.id

    const dispalyedMeals = props.filteredMeals.filter((meal)=>meal.categoryIds.indexOf(catId)>=0)

    const category = CATEGORIES.find((cat)=>cat.id===catId)

    
    
    return (
        <MealList listData={dispalyedMeals} navigation={props.navigation}/>
    )
    
}

const mapStateToProps = (state)=>{
    return {
        filteredMeals: state.filteredMeals
    }
}

export default connect(mapStateToProps)(CategoryMealsScreen)