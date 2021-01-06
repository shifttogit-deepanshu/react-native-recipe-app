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
                <FilterSwitch label="Gluten-Free" state={isGlutenFree} onChange={newValue=>setIsGlutenFree(newValue)}/>
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