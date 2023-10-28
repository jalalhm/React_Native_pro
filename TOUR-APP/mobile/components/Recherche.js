import React, { useState } from 'react';
import { ScrollView,StyleSheet, View, TextInput, TouchableOpacity, Modal, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
export default function Recherche() {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]); // State to store search results
  const [modalVisible, setModalVisible] = useState(false); // State to control modal visibility
  const navigation = useNavigation();
  const handleSearch = async () => {
    try {
      const response = await fetch(`http://192.168.11.103:3001/api/trips/search/${search}`);
      const searchData = await response.json();
      
      // Update the search results state
      setSearchResults(searchData);
      
      // Show the modal
      setModalVisible(true);
      
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  // Close the modal
  const closeModal = () => {
    setModalVisible(false);

  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          placeholder="Search by location"
          keyboardType="search"
          underlineColorAndroid="transparent"
          onChangeText={(text) => setSearch(text)}
        />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={handleSearch}
        >
          <Ionicons name="search-outline" size={30} color="#111" />
        </TouchableOpacity>
      </View>

      {/* Modal to show search results */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <Ionicons name="close-outline" size={45} color="#fff" />
          </TouchableOpacity>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.resultsContainer}>
                {searchResults.map((result, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.resultItem}
                  onPress={() => {navigation.navigate('ObjInfo', { item: result });
                }}
                >
                  <Image source={{ uri: result.imageUrl }} style={styles.resultImage} />
                  <Text style={styles.resultTitle}>{result.title}</Text>
                </TouchableOpacity>
              ))}
          </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '4%',
  },
  inputContainer: {
    backgroundColor: '#8AA6CE',
    borderRadius: 30,
    width: 300,
    height: 54,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  inputs: {
    height: 45,
    margin: 20,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    fontSize: 18,
    color: '#ffffff', // Set text color
  },
  button: {
    height: 30,
    margin: 10,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeButton: {
    position: 'relative',
    top: 10,
    right: 170,
  },
  resultsContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    width: '100%',
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  resultImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  resultTitle: {
    fontSize: 18,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
