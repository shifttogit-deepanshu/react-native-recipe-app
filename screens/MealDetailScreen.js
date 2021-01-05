import React,{useLayoutEffect} from "react"
import {View,Text,StyleSheet,Button} from "react-native"
import {MEALS} from "../data/dummy-data"
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons'
  
import HeaderIconButton from "../components/HeaderButton"

const MealDetailScreen = (props) => {
    const mealId = props.route.params.mealId
    const selectedMeal = MEALS.find((meal)=>meal.id===mealId)

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight: ()=><HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item title="favourite" iconName="ios-star-outline" onPress={()=>alert("btn pressed")}/>
            </HeaderButtons>
        })
    })
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to categories" onPress={()=>props.navigation.popToTop()}/>
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
export default MealDetailScreen