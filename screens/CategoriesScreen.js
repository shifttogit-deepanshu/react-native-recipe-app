import React,{useLayoutEffect} from "react"
import {View,Text,StyleSheet,Button,FlatList} from "react-native"
import {CATEGORIES} from "../data/dummy-data"
import CategoryGridTile from "../components/CategoryGridTile"
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons'
import HeaderButton from "../components/HeaderButton"



const CategoriesScreen = (props) => {
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerLeft: ()=>(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="drawer" iconName="ios-menu" onPress={()=>props.navigation.toggleDrawer()}/>
                </HeaderButtons>
            )
        })
    })


const renderGridItem = (itemData)=>{
        return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onSelect={()=>props.navigation.navigate('Meals',{cat:itemData.item})} style={styles.gridItem}/>
    }

    return (
        <FlatList keyExtractor={(item,index)=>item.id} data={CATEGORIES} renderItem={renderGridItem} numColumns={2}/>
    )

}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

})
export default CategoriesScreen