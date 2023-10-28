import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import useFetch from '../hook/fetch';
import axios from "axios";
const Card_Height = 230;

const ObjInfo = () => {
  const navigation = useNavigation();
  const { item } = useRoute().params;
  const { refetch } = useFetch();
  const goBack = () => {
    navigation.goBack();
  };

  const [isSaved, setIsSaved] = useState(false);

  const toggleSave = async () => {
    try {
      // Update the server with the saved status
      await axios.put(`http://192.168.11.103:3001/api/trips/toggle-save/${item._id}`, { isSaved: !isSaved });

      // Toggle the saved status locally
      setIsSaved(!isSaved);

      // Refetch data to ensure you have the latest information
      refetch();
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };
  return (
    <ScrollView style={styles.container}>
    {/* Header */}
    <View>
      <View style={styles.view}>
        <TouchableOpacity style={styles.headerbutton1} activeOpacity={0.5} onPress={goBack}>
          <Ionicons name="ios-arrow-back" size={30} color="black" style={styles.headerbuttonImage1} />
        </TouchableOpacity>
        <View style={styles.headertxt}>
          <Text style={{ fontWeight: "bold", fontSize: 28, textShadowColor: '#8AA6CE', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 2, }}>{item.location}</Text>
        </View>
        <TouchableOpacity style={styles.headerbutton} activeOpacity={0.5} onPress={toggleSave}>
          <Ionicons name={isSaved ? 'duplicate' : 'duplicate-outline'} size={30} color={isSaved ? '#8AA6CE' : 'black'} />
        </TouchableOpacity>
      </View>
    </View>

      {/* Product Details */}
      <View style={styles.productDetails}>
        <View style={styles.imageBox}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.category}>Category : {item.category}</Text>
            <TouchableOpacity onPress={toggleSave}>
              <Ionicons name={isSaved ? 'ios-heart' : 'ios-heart-outline'} size={30} color={isSaved ? 'red' : 'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.infoRow}>
            <Entypo name="price-tag" size={24} color="#8AA6CE" />
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.infoRow}>
            <Entypo name="location-pin" size={26} color="#8AA6CE" />
            <Text style={styles.location}>{item.location}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerbutton: {
    height: 40,
    margin: 5,
    width:40,
    alignItems:'flex-end'
  },
  headertxt: {
    justifyContent:'center',
    alignItems: "center",  
    flex:1,
    textAlign:'center',
    marginTop:2,

  },
  headerbutton1: {
    height: 40,
    width:40,
    alignItems:'flex-end'
  },
  productDetails: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  imageBox: {
    width: '100%',
    height: Card_Height,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#8AA6CE',
    borderRadius: 10,
    alignItems: 'center', // Center the image horizontally
    alignSelf: 'center', // Center the image vertically
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerbuttonImage1: {
    padding: 5,
    marginTop:2,
    marginLeft:8,
    height: 40,
    width: 35,
  },
  infoBox: {
    marginTop: 10,
    borderStyle: 'solid',
    borderColor: 'black',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
    alignItems: 'center',
  },
  category: {
    color:'#8AA6CE',
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: 250,
    
    
  },
  description: {
    flex: 1,
    fontSize: 15,
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic',
  },
  location: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Center horizontally
    marginVertical: 3,
  },
  view: {
      
    marginTop: 5,
    paddingTop: 30,
    paddingBottom:10,
    flexDirection: 'row',

  },
});

export default ObjInfo;
