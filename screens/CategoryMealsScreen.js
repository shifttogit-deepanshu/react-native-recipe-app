import React from "react"
import {View,Text,StyleSheet,Button} from "react-native"
import { FlatList } from "react-native-gesture-handler"
import {CATEGORIES,MEALS} from "../data/dummy-data"
import MealItem from "../components/MealItem"

const CategoryMealsScreen = ({route,navigation}) => {


    const catId = route.params.cat.id

    const dispalyedMeals = MEALS.filter((meal)=>meal.categoryIds.indexOf(catId)>=0)

    const category = CATEGORIES.find((cat)=>cat.id===catId)

    
    const renderMealItem = (itemData)=>{
        return (
           <MealItem title={itemData.item.title} onSelectMeal={()=>navigation.navigate('Meal Details',{mealId:itemData.item.id,headerTitle:itemData.item.title})} 
           duration={itemData.item.duration}
           complexity={itemData.item.complexity}
           affordability={itemData.item.affordability}
           image={itemData.item.imageUrl}
           />
        )
    }
    return (
        <View style={styles.screen}>
            <FlatList keyExtractor={(item,index)=>item.id} data={dispalyedMeals} renderItem={renderMealItem} style={{width:"100%"}}/>
        </View>
    )

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
export default CategoryMealsScreen