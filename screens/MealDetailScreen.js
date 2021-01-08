import React,{useLayoutEffect} from "react"
import {View,Text,StyleSheet,ScrollView,Image} from "react-native"
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons'
  
import HeaderIconButton from "../components/HeaderButton"
import {connect} from "react-redux"
import { toggleFavourite } from "../store/actions/meals"

const ItemBox = (props)=>(
    <View key={props.listItem} style={styles.itemBox}>
    <Text >{props.children}</Text>
    </View>
)
 
const MealDetailScreen = (props) => {
    const mealId = props.route.params.mealId
    const selectedMeal = props.meals.find((meal)=>meal.id===mealId)

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerRight: ()=><HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item title="Favourite" iconName="ios-star-outline" onPress={()=>props.addFavourite(selectedMeal.id)}/>
            </HeaderButtons>
        })
    })
    return (
    <ScrollView>
        <View>
        <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
        <View style={styles.details}>
            <Text>{selectedMeal.duration}m</Text>
            <Text>{selectedMeal.complexity.toUpperCase()}</Text>
            <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
            <Text style={styles.title}>ingredients</Text>
            {selectedMeal.ingredients.map((ingredient)=><ItemBox listItem={ingredient}>{ingredient}</ItemBox>)}
            <Text style={styles.title}>Steps</Text>
            {selectedMeal.steps.map((step)=><ItemBox listItem={step}>{step}</ItemBox>)}
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
     details:{
        flexDirection:"row",
        paddingHorizontal:5,
        justifyContent:"space-around",
        alignItems:"center",
        height:40
     },
     image:{
         width:"100%",
         height:300,
         justifyContent:"flex-end"
     },
     title:{
         fontFamily:"openSansBold",
         fontSize:20,
         textAlign:"center"
     },
     itemBox:{
         marginHorizontal:5,
         marginVertical:10,
         borderColor:'#ccc',
         borderWidth:2,
         padding:10
     }
})

const mapStateToProps = (state)=>{
    return {
        meals:state.meals
    }
}

const mapDispatchtoProps = (dispatch)=>{
    return {
        addFavourite : (id)=>dispatch(toggleFavourite(id))
    }
}
export default connect(mapStateToProps,mapDispatchtoProps)(MealDetailScreen)