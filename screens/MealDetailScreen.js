import React from "react"
import {View,Text,StyleSheet,Button} from "react-native"
import {MEALS} from "../data/dummy-data"
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'react-native';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';

export function UsageWithIcons({ navigation }) {
    React.useLayoutEffect(() => {
      navigation.setOptions({
        // in your app, extract the arrow function into a separate component
        // to avoid creating a new one every time
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
            <Item title="search" iconName="ios-search" onPress={() => alert('search')} />
            <ReusableItem onPress={() => alert('Edit')} />
            <OverflowMenu
              style={{ marginHorizontal: 10 }}
              OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />}
            >
              <HiddenItem title="hidden1" onPress={() => alert('hidden1')} />
              <ReusableHiddenItem onPress={() => alert('hidden2')} />
            </OverflowMenu>
          </HeaderButtons>
        ),
      });
    }, [navigation]);


const MealDetailScreen = (props) => {
    const mealId = props.route.params.mealId
    const selectedMeal = MEALS.find((meal)=>meal.id===mealId)
    
    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button title="Go back to categories" onPress={()=>props.navigation.popToTop()}/>
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
export default MealDetailScreen