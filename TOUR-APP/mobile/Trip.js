import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const NUM_COLUMNS = 2; // Number of columns in the grid
const Card_Width = 160;
const Card_Height = 160;

const FavoriteSection = () => {
  const [savedProducts, setSavedProducts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchSavedProducts();
  }, []);
	const handleOpenSettings = () => {
		navigation.navigate("Setting"); // Navigate to the Setting screen
	  };


  const fetchSavedProducts = async () => {
    try {
      // change just the ip addres(192.168.11.103) you can also change port but you need to modifying it on backand .env
      const response = await axios.get('http://192.168.11.103:3001/api/trips/saved');
      setSavedProducts(response.data);
    } catch (error) {
      console.error('Error fetching saved products:', error);
    }
  };

  const renderSavedItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item._id} // Add this key prop
        style={styles.card}
        onPress={() => navigation.navigate('ObjInfo', { item })}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.imageUrl }} style={styles.image} />
          <Text style={styles.productTitle}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity
          style={styles.headerbutton1}
          activeOpacity={0.5}
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons name="ios-arrow-back" size={30} color="black" style={styles.headerbuttonImage1} />
        </TouchableOpacity>
        <View style={styles.headertxt}>
          <Text style={styles.titleText}>Saved</Text>
        </View>
        <TouchableOpacity
          style={styles.headerbutton}
          activeOpacity={0.5}
          onPress={() => {} /* Implement menu functionality here */}
        >
          <Ionicons name="ios-menu" size={37} color="#000" onPress={handleOpenSettings}/>
        </TouchableOpacity>
      </View>

      <FlatList
        data={savedProducts}
        keyExtractor={(item) => item._id}
        numColumns={NUM_COLUMNS}
        renderItem={renderSavedItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginTop: 5,
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 28,
    textShadowColor: '#8AA6CE',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
  headerbutton1: {
    height: 40,
    width: 40,
    alignItems: 'flex-end',
  },
  headerbutton: {
    height: 40,
    width: 40,
    alignItems: 'flex-end',
  },
  headerbuttonImage1: {
    padding: 5,
    marginTop: 2,
    marginLeft: 8,
    height: 40,
    width: 35,
  },
  card: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
  imageContainer: {
    width: Card_Width,
    height: Card_Height,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
  },
  productTitle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    fontSize: 14,
    padding: 5,
    textAlign: 'center',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
});

export default FavoriteSection;
