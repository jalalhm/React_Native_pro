import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image, Text, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
import useFetch from "../hook/fetch";
export default function Swipe() {
    const { data, isLoading, error } = useFetch();
  
    if (isLoading) {
      return <Text>Loading...</Text>;
    }
  
    if (error) {
      return <Text>Error: {error.message}</Text>;
    }
  
    return (
      <View>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <Swiper autoplay showsButtons={true} showsPagination={false}>
            {data.map((item) => (
              <Image
                key={item.id}
                source={{ uri: item.imageUrl }}
                resizeMode="cover"
                style={styles.img}
              />
            ))}
          </Swiper>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems:'center',
        marginLeft : 7,
        height:230,
        marginTop:"5%",
    },
    img: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:370,
        borderRadius:10,
    },

})