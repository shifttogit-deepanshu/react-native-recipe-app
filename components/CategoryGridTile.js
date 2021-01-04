import React from "react"
import {View,Text,StyleSheet,TouchableOpacity,Platform,TouchableNativeFeedback} from "react-native"



const CategoryGridTile = (props)=>{

    let TouchableCmp = TouchableOpacity

    if(Platform.OS=="android" && Platform.Version>=21){
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
        <TouchableCmp onPress={props.onSelect} style={{flex:1}}>
            <View style={{...styles.gridContainer,backgroundColor:props.color}}>
                <Text numberOfLines={2} style={styles.title}>{props.title}</Text>
            </View>
        </TouchableCmp>
        </View>
    )   
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150,
        borderRadius:10,
        overflow:"hidden"
    },
    gridContainer:{
        flex:1,
        justifyContent:"flex-end",
        alignItems:"flex-end",
        padding:10,
        borderRadius:10,
        shadowColor:"black",
        shadowOffset:{width:5,height:5},
        shadowOpacity:0.8,
        shadowRadius:10,
        elevation:3
    },
    title:{
        fontFamily:"openSansBold",
        textAlign:'right'

    }

})