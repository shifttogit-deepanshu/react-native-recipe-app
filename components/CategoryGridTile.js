import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"


const CategoryGridTile = (props)=>{
    return (
        <TouchableOpacity onPress={props.onSelect} style={styles.gridItem}>
            <View >
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
        
    )   
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        marginVertical:20,
        height:150
    }

})