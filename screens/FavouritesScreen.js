import React,{useLayoutEffect} from "react"
import {View,Text,StyleSheet} from "react-native"
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
    
    
    return props.favouriteMeals.length==0?<View style={styles.screen}><Text>No favourite meal found. start Adding some!</Text></View>:<MealList listData={props.favouriteMeals} navigation={props.navigation} />
           

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
    favouriteMeals: state.favouriteMeals
    }
}
export default connect(mapStateToProps)(FavouritesScreen)