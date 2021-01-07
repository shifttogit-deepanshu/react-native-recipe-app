import React,{useLayoutEffect,useState} from "react"
import {View,Text,Switch,StyleSheet} from "react-native"
import Colors from '../Settings/Colors'
import {
    HeaderButtons,
    Item,
  } from 'react-navigation-header-buttons'
  import HeaderIconButton from "../components/HeaderButton"

  const FilterSwitch = (props)=>(
    <View style={styles.filter}>
        <Text>{props.label}</Text>
            <Switch value={props.state} onValueChange={props.onChange} 
            trackColor={{true:Colors.primaryColor,false:''}} thumbColor={Colors.primaryColor}/>
    </View>
  )

const FiltersScreen = (props) => {

    const [isGlutenFree,setIsGlutenFree] = useState(false)
    const [islactoseFree,setIsLactoseFree] = useState(false)
    const [isVegan,setIsVegan] = useState(false)
    const [isVegetarian,setIsVegetarian] = useState(false)

    useLayoutEffect(()=>{
        props.navigation.setOptions({
            headerLeft: ()=>(
                <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item title="drawer" iconName="ios-menu" onPress={()=>props.navigation.toggleDrawer()}/>
                </HeaderButtons>
            ),
            headerRight: ()=>(
                <HeaderButtons HeaderButtonComponent={HeaderIconButton}>
                <Item title="drawer" iconName="ios-save" onPress={()=>console.log(isGlutenFree)}/>
                </HeaderButtons>
            )
        })
    })
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters/ Restrictions</Text>
                <FilterSwitch 
                label="Gluten-Free" 
                state={isGlutenFree} 
                onChange={newValue=>setIsGlutenFree(newValue)}/>
                <FilterSwitch 
                label="lactose-Free" 
                state={islactoseFree} 
                onChange={newValue=>setIsLactoseFree(newValue)}/>
                <FilterSwitch 
                label="Vegan" 
                state={isVegan} 
                onChange={newValue=>setIsVegan(newValue)}/>
                <FilterSwitch 
                label="Vegetarian" 
                state={isVegetarian} 
                onChange={newValue=>setIsVegetarian(newValue)}/>
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
        alignItems:'center',
        marginVertical:10
    },

})
export default FiltersScreen