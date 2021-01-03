import React,{useState} from 'react';
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"

const fetchFonts = ()=>{
  return Font.loadAsync({
    'openSans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

const Stack = createStackNavigator()

export default function App() {

  const [dataLoaded,setDataLoaded] = useState(false)

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>console.log(err)}/>
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Categories">
        <Stack.Screen name="Categories" component={CategoriesScreen}/>
        <Stack.Screen name="Meals" component={CategoryMealsScreen}/>
        <Stack.Screen name="Meal Details" component={MealDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 
