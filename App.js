import React,{useState} from 'react'
import * as Font from 'expo-font'
import AppLoading from "expo-app-loading"
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import CategoriesScreen from "./screens/CategoriesScreen"
import CategoryMealsScreen from "./screens/CategoryMealsScreen"
import MealDetailScreen from "./screens/MealDetailScreen"
import FavouritesScreen from "./screens/FavouritesScreen"
import FiltersScreen from "./screens/FiltersScreen"
import Colors from "./Settings/Colors"
import { Ionicons } from '@expo/vector-icons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

const fetchFonts = ()=>{
  return Font.loadAsync({
    'openSans': require('./assets/Fonts/OpenSans-Regular.ttf'),
    'openSansBold': require('./assets/Fonts/OpenSans-Bold.ttf')
  })
}

const Stack = createStackNavigator()

const Tab = createMaterialBottomTabNavigator();

export default function App() {

  const [dataLoaded,setDataLoaded] = useState(false)

  if(!dataLoaded){
    return <AppLoading startAsync={fetchFonts} onFinish={()=>setDataLoaded(true)} onError={(err)=>console.log(err)}/>
  }


  const MealsTabNavigator = ()=>{
    return (<Stack.Navigator initialRouteName="Categories"  screenOptions={{headerStyle:{backgroundColor:Colors.primaryColor},headerTintColor: '#fff',}}>
      <Stack.Screen name="Categories" component={CategoriesScreen}/>
      <Stack.Screen name="Meals" component={CategoryMealsScreen} options={({route})=>({title:route.params.cat.title})}/>
      <Stack.Screen name="Meal Details" component={MealDetailScreen} options={({route})=>({title:route.params.headerTitle})}/>
    </Stack.Navigator>
    )
  }


  const FavouriteTabNavigator = ()=>{
    return (<Stack.Navigator screenOptions={{headerStyle:{backgroundColor:Colors.accentColor},headerTintColor: '#fff',}}>
                <Stack.Screen name="Favourites" component={FavouritesScreen}/>
            </Stack.Navigator>
    )
  }

  const TabNavigator = ()=>{
    return (
      <Tab.Navigator shifting={true} screenOptions={({route})=>({tabBarIcon:
        ({focused,color,size})=>{
          let iconName
          if(route.name=="Meals"){
            iconName = focused ? 'ios-restaurant':'ios-restaurant-outline'
          }
          else if(route.name=="Your Favourites"){
            iconName = focused ? 'ios-star':'ios-star-outline'
          }

          return <Ionicons name={iconName} size={20} color={color}/>
        },
        tabBarColor:route.name=="Meals"? Colors.primaryColor: Colors.accentColor
      })} >
        <Tab.Screen name="Meals" component={MealsTabNavigator} />
        <Tab.Screen name="Your Favourites" component={FavouriteTabNavigator} />      
      </Tab.Navigator>
    )
  }

  const MainNavigator = createDrawerNavigator()

  return (
    <NavigationContainer>
        <MainNavigator.Navigator >
          <MainNavigator.Screen name="MealsFav" component={TabNavigator}/>
          <MainNavigator.Screen name="Filters" component={FiltersScreen} />
        </MainNavigator.Navigator>
    </NavigationContainer>
  )
} 
