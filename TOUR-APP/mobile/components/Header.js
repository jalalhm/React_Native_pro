import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Setting from '../screens/Settings'; // Import your Setting component

export default function Header() {
  const navigation = useNavigation();

	const handleOpenSettings = () => {
		navigation.navigate("Setting"); // Navigate to the Setting screen
	  };

  return (
    <View style={styles.container}>
      <View style={styles.emptyIcon}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>MARHABA</Text>
      </View>
      <TouchableOpacity style={styles.iconButton} onPress={handleOpenSettings}>
        <Ionicons name="ios-menu" size={37} color="#000" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    marginTop: 5,
    paddingTop: 30,
    paddingBottom: 10,
  },
  emptyIcon: {
    height: 40,
    width: 40,
    margin: 5,
  },
  iconButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    textShadowColor: '#8AA6CE',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
});
