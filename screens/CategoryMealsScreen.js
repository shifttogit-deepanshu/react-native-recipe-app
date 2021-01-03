import React from "react"
import {View,Text,StyleSheet,Button} from "react-native"
import {CATEGORIES} from "../data/dummy-data"

const CategoryMealsScreen = ({route,navigation}) => {

    const {cat} = route.params
    const catId = cat.id
    const category = CATEGORIES.find((cat)=>cat.id===catId)
    return (
        <View style={styles.screen}>
            <Text>The Categories Meals Screen</Text>
            <Text>{category.title}</Text>
            <Button title="Meal Details =>" onPress={()=>navigation.navigate('Meal Details')}/>
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