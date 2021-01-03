import React from "react"
import {View,Text,StyleSheet,Button,FlatList,TouchableOpacity} from "react-native"
import {CATEGORIES} from "../data/dummy-data"




const CategoriesScreen = (props) => {

    const renderGridItem = (itemData)=>{
        return <TouchableOpacity onPress={()=>props.navigation.navigate('Meals',{cat:itemData.item})} style={styles.gridItem}>
            <View >
                <Text>{itemData.item.title}</Text>
            </View>
        </TouchableOpacity>
        
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
    gridItem:{
        flex:1,
        marginVertical:20,
        height:150
    }
})
export default CategoriesScreen