import React from "react"
import {View,Text,StyleSheet} from "react-native"
import MealList from "../components/MealList"
import {MEALS} from "../data/dummy-data"

const favouriteList = MEALS.filter((meal)=>meal.id==='m1'|| meal.id==='m2')

const FavouritesScreen = (props) => {
    return (
        <MealList listData={favouriteList} navigation={props.navigation} />
    )

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default FavouritesScreen