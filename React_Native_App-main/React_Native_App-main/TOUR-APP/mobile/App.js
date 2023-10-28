

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text} from 'react-native';

import Authn from './Authn';



  const Stack= createNativeStackNavigator();
   
export default function App() {
  return (

 
     
    // <Navbar/>
    //  <Home/>  

  //  <Settings/>
  // <City/>


    
    
        // <ObjInfo list={HOTELS}/>
      
  <NavigationContainer>
    <Authn/>
  </NavigationContainer>
     
   
    //  <View>
    //     <ObjectPicCarousel list={TOP_PLACES}/>
    //   </View>
    // <Header/>
     

   
  );
};



