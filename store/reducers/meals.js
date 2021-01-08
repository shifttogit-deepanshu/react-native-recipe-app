import {MEALS} from "../../data/dummy-data"
import {TOGGlE_FAVOURITE} from "../actions/meals"
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
        default:
            return state;
    }
    
}   

export default mealReducer