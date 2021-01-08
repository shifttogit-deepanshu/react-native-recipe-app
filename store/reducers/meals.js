import {MEALS} from "../../data/dummy-data"

const intialState = {
    meals:MEALS,
    filteredMeals:MEALS,
    favouriteMeals:[]
}

const mealReducer = (state=intialState,action)=>{
    
    return state;
}   

export default mealReducer