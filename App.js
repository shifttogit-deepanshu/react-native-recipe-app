import React,{useState} from 'react';
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import Colors from "./Settings/Colors";

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
      <Stack.Navigator initialRouteName="Categories"  screenOptions={{headerStyle:{backgroundColor:Colors.primaryColor},headerTintColor: '#fff',}}>
        <Stack.Screen name="Categories" component={CategoriesScreen}/>
        <Stack.Screen name="Meals" component={CategoryMealsScreen} options={({route})=>({title:route.params.cat.title})}/>
        <Stack.Screen name="Meal Details" component={MealDetailScreen} options={({route})=>({title:route.params.headerTitle})}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
} 
