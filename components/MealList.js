import { useLinkProps } from "@react-navigation/native"
import React from "react"
import {View,StyleSheet,FlatList} from "react-native"
import MealItem from "./MealItem"

const MealList = (props)=>{
    
    const renderMealItem = (itemData)=>{
        return (
           <MealItem title={itemData.item.title} onSelectMeal={()=>props.navigation.navigate('Meal Details',{mealId:itemData.item.id,headerTitle:itemData.item.title})} 
           duration={itemData.item.duration}
           complexity={itemData.item.complexity}
           affordability={itemData.item.affordability}
           image={itemData.item.imageUrl}
           />
        )
    }


    return (
        <View style={styles.list}>
            <FlatList keyExtractor={(item,index)=>item.id} data={props.listData} renderItem={renderMealItem} style={{width:"100%"}}/>
        </View>
    )

}

const styles = StyleSheet.create({
    list:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

export default MealList