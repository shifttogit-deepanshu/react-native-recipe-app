import React,{useLayoutEffect} from "react"
import {View,Text,StyleSheet} from "react-native"
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons'
  import HeaderIconButton from "../components/HeaderButton"

const FiltersScreen = (props) => {
    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerLeft: ()=>(
                <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item title="drawer" iconName="ios-menu" onPress={()=>props.navigation.toggleDrawer()}/>
                </HeaderButtons>
            )
        })
    })
    return (
        <View style={styles.screen}>
            <Text>The Filters Screen</Text>
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
export default FiltersScreen