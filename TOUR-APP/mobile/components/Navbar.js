import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import { Ionicons } from '@expo/vector-icons';

// Screens

import Map from '../Map'
import Trip from '../Trip'

import Allhome from '../Allhome';

//Screen names
const homeName = "Home";
const mapName = "Map";
const favoritesName = "Saved";

const Tab = createBottomTabNavigator();


export default function Navbar() {
  const {t} = useTranslation();

  return (
 

     
    
   
      <Tab.Navigator
        
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === mapName) {
              iconName = focused ? 'map' : 'map-outline';

            } 
             else if (rn === favoritesName) {
              iconName = focused ? 'duplicate' : 'duplicate-outline';
            }

            // You can return any component that you like here!
            return <Ionicons  name={iconName} size={size} color={color}  />;
           
          },
        })}
        tabBarOptions={{
            
          activeTintColor: "#8AA6CE",
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 4, fontSize: 11, },
          style: { padding: 10, height: 70 ,},
          
        }}>

        <Tab.Screen name={homeName} component={Allhome} options={{headerShown:false}} />
        <Tab.Screen name={mapName} component={Map} options={{headerShown:false}} />
        <Tab.Screen name={favoritesName} component={Trip}  options={{headerShown:false}}/>
      
         
        

      </Tab.Navigator>
    
  );
}

