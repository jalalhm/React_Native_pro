import React from 'react';
import { FlatList, TouchableOpacity, View,StyleSheet,Image,Text } from 'react-native';

import {useNavigation } from '@react-navigation/native';
import useFetch from '../hook/fetch';
import { shadow, sizes } from "./theme";
const Card_Width = sizes.width -230;
const Card_Height = 170;




const ObjectPicCarousel = () => {
    const { data, isLoading, error } = useFetch();
     const navigation = useNavigation();
     
     if (isLoading) {
        return <Text>Loading...</Text>;
      }
    
      if (error) {
        return console.log(error);
      }
    return (
       
        <FlatList data={data}  horizontal keyExtractor={item => item._id} snapToInterval={200} showsHorizontalScrollIndicator={false} renderItem={({ item }) => {
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9}  onPress={()=>navigation.navigate('City',{data,item})}>
                    <View style={[styles.Card,shadow.light]}   >
                        <View style={styles.ImageBox}>
                            <Image source={{ uri: item.imageUrl }} style={styles.Image} />
                        </View>
                        <View style={styles.titleBox}>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )
        }}>

        </FlatList>
       
        
    );
}

const styles = StyleSheet.create({

    Card: {
        width: Card_Width,
        height: Card_Height,
        backgroundColor:'white',
        
    },
    ImageBox:{
        width: Card_Width,
        height: Card_Height,
        overflow: 'hidden',
        borderRadius:10,
    },
    Image: {
        
        
        width: Card_Width,
        height: Card_Height,
        resizeMode : 'cover',
    },
    titleBox:{
        flex:1,
        position:'absolute',
        alignSelf:'center',
        top:Card_Height/2,
    },
    title:{
        fontSize:20,
        fontWeight:'bold',
        color:'white'
    },

})

export default ObjectPicCarousel;

