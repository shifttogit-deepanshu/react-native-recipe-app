import {MEALS} from "../../data/dummy-data"
import {SET_FILTERS, TOGGlE_FAVOURITE} from "../actions/meals"
const intialState = {
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
}

const mealReducer = (state=intialState,action)=>{

    switch(action.type){
        case TOGGlE_FAVOURITE:
            const existingIndex = state.favouriteMeals.findIndex(meal=>meal.id===action.mealId)
            if(existingIndex>=0){
                const updatedFavMeals = [...state.favouriteMeals]
                updatedFavMeals.splice(existingIndex,1)
                return {...state,favouriteMeals:updatedFavMeals}
            }
            else{
                const meal = state.meals.find(meal=>meal.id===action.mealId)
                return {...state,favouriteMeals:state.favouriteMeals.concat(meal)}
            }
        case SET_FILTERS:
            const appliedFilters = action.filters
            const updatedFilteredMeals = state.meals.filter(meal=>{
            if(appliedFilters.isGlutenFree && !meal.isGlutenFree){
                return false
            }
            if(appliedFilters.isLactoseFree && !meal.isLactoseFree){
                return false
            }
            if(appliedFilters.isVegan && !meal.isVegan){
                return false
            }
            if(appliedFilters.isVegetarian && !meal.isVegetarian){
                return false
            }
            else{
                return true
            }
        })
               
            return {...state,filteredMeals:updatedFilteredMeals}

        default:
            return state;
    }
    
}   

export default mealReducer