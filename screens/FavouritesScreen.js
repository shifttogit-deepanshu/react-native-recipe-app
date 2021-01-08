import React,{useLayoutEffect} from "react"
import {StyleSheet} from "react-native"
import MealList from "../components/MealList"
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton"
import {connect} from "react-redux"

const FavouritesScreen = (props) => {
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerLeft: ()=>(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="drawer" iconName="ios-menu" onPress={()=>props.navigation.toggleDrawer()}/>
                </HeaderButtons>
            )
        })
    })

    return (
        <MealList listData={props.favouriteMeals} navigation={props.navigation} />
    )

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})

const mapStateToProps =(state)=>{
    return {
    favouriteMeals: state.favouriteMeas
    }
}
export default connect(mapStateToProps)(FavouritesScreen)