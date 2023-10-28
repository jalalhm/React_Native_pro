import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import useFetch from "../hook/fetch"; 
import Swipe from "./Swipe";

export default function HeadSwipWithTxt (){
  const { data, isLoading, error, refetch } = useFetch();
    
    return(
      <View style={styles.container}>
        <View style={{marginLeft:5,}}>
        <Swipe/>
        <Text style={{color:"black",fontWeight:'bold',fontSize:30,}}>{data.title}</Text>
        <Text style={{color:"black",marginBottom:'5%',fontSize:15,}}>{data.description}</Text>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
        backgroundColor:'#F0EEEE'

        
    },

})


