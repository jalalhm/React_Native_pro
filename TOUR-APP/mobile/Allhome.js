import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text} from 'react-native';

import Home from './screens/Home';
import ObjInfo from './screens/ObjInfo';
import ObjectPicCarousel from './components/ObjectPicCarousel';
import City from './screens/City'
import Setting from './screens/Settings'
import profile from './components/profile';

import Recherche from './components/Recherche';

  const Stack= createNativeStackNavigator();
   
export default function Allhome() {
  return (

   
       

 
     
    <Stack.Navigator>

         
          <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/> 
          <Stack.Screen name='City' component={City} options={{headerShown:false}}/>
          <Stack.Screen name='ObjectPicCarousel' component={ObjectPicCarousel} options={{headerShown:false}}/>
          <Stack.Screen name='profile' component={profile} options={{headerShown:false}}/>
          <Stack.Screen name='ObjInfo' component={ObjInfo} options={{headerShown:false}}/>
          <Stack.Screen name='Setting' component={Setting} options={{headerShown:false}}/>
          <Stack.Screen name='Recherche' component={Recherche} options={{headerShown:false}}/>
          
          
          

    </Stack.Navigator>
    
   

    

   

  
   
  );
};
