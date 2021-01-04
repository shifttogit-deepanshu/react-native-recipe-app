import React from "react"
import {View,Text,StyleSheet,TouchableOpacity,ImageBackground} from "react-native"


const MealItem = (props)=>{
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
        <View>
            <View style={{...styles.mealHeader,...styles.mealRow}}>
                <ImageBackground source={{uri:props.image}} style={styles.bgImage}>
                <Text style={styles.title}>{props.title}</Text>
                </ImageBackground>                
            </View>
            <View style={{...styles.mealDetails,...styles.mealRow}}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableOpacity>
        </View>
    )   
}


export default MealItem

const styles = StyleSheet.create({
mealItem:{
    height:300,
    width:"100%",
    backgroundColor:"#f5f5f5"
    },
mealRow:{
    flexDirection:"row"
}, 
mealHeader:{
    height:"90%"
 },
 mealDetails:{
    paddingHorizontal:10,
    justifyContent:"space-between",
    alignItems:"center",
    height:"10%"
 },
 bgImage:{
     width:"100%",
     height:"100%",
     justifyContent:"flex-end"
 },
 title:{
     fontFamily:"openSansBold",
     fontSize:15,
     color:"white",
     backgroundColor:"rgba(0,0,0,0.7)",
     paddingHorizontal:12,
     paddingVertical:4,
     textAlign:"center"
    
 }
})