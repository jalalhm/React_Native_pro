
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Swiper from 'react-native-swiper';
import useFetch from '../hook/fetch';

export default function Swipe_BP() {
  const topPlacesEndpoint = 'http://192.168.11.103:3001/api/trips/t'; // Update the endpoint
  const { data, isLoading, error } = useFetch(topPlacesEndpoint);

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
        <Swiper autoplay showsButtons={false}>
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
    alignItems: 'center',
    marginLeft: 7,
    height: 230,
    marginTop: '5%',
  },
  img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 370,
    borderRadius: 10,
  },
});
