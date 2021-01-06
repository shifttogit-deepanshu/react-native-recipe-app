import React,{useLayoutEffect,useState} from "react"
import {View,Text,Switch,StyleSheet} from "react-native"
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons'
  import HeaderIconButton from "../components/HeaderButton"

const FiltersScreen = (props) => {

    const [isGlutenFree,setIsGlutenFree] = useState(false)

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
            <Text style={styles.title}>Available Filters/ Restrictions</Text>
            <View style={styles.filter}>
            <Text>Gluten Free</Text>
            <Switch value={isGlutenFree} onValueChange={newValue=>setIsGlutenFree(newValue)}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    title:{
        fontFamily:"openSansBold",
        fontSize:15,
        textAlign:'center',
        marginVertical:10   
    },
    filter:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:25,
        alignItems:'center'
    },

})
export default FiltersScreen