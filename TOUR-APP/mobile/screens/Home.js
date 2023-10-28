import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, ScrollView} from 'react-native';

import Header from '../components/Header';
import Recherche from '../components/Recherche';
import Swipe from '../components/Swipe';


import ObjectPicCarousel from '../components/ObjectPicCarousel';

import { NavigationContainer,useNavigation } from '@react-navigation/native';
import i18next, {languageResources} from '../services/i18next';
import { useTranslation } from 'react-i18next';  
import Swipe_BP from '../components/Swipe_BP';
import Swipe_TR from '../components/Swipe_TR';
   
export default function HOME() {
 const navigation = useNavigation();
 const {t} = useTranslation();
 
  return (
      
      < >
     
    
          <Header />
      
          <ScrollView style={{backgroundColor:"#F0EEEE"}}>

              <Recherche />
              <Swipe />
              <View style={styles.box}>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white",textAlign:"center"}}>{t("Offre-spéciale")}</Text>
              </View>
              <View style={{marginTop:'5%',}}>
               <ObjectPicCarousel  />
              </View>
              <View style={styles.box}>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white",textAlign:"center"}}> {t("Ville-plus-visité")}</Text>
              </View>
              <View style={{marginTop:'5%',}}>
               <ObjectPicCarousel />
              </View>
              <View style={styles.box}>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white",textAlign:"center"}}>{ t("Beaux-endroits")}</Text>
              </View>
              <Swipe_BP/>
              <View style={styles.box}>
                <Text style={{fontSize:20, fontWeight:"bold",color:"white",textAlign:'center', left:20,}}>{t("Traditions")}</Text>
              </View>
              <Swipe_TR />


          </ScrollView>
          
          
     </>
   
   
  );
};



const styles = StyleSheet.create({

    box:{

        backgroundColor:"#8AA6CE",
        padding:10,
        maxWidth:"45%",
        flexDirection:'row',
        flexWrap:'wrap',
        marginTop:'5%',
        borderBottomRightRadius:5,
        borderTopRightRadius:5,
       
    },

 


});