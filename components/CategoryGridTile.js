import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"


const CategoryGridTile = (props)=>{
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.gridItem}>
            <View style={{...styles.gridContainer,backgroundColor:props.color}}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    )   
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        margin:15,
        height:150
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
    }

})