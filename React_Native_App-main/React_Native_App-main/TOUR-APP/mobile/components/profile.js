import { StyleSheet, View, TouchableOpacity, Text, ScrollView, Modal, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../config';
import i18next from '../services/i18next';
import { useTranslation } from 'react-i18next';
import languagesList from '../services/languagesList.json';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);

  const changeLng = (lng) => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };

  useEffect(() => {
    firebase.firestore().collection('users')
      .doc(firebase.auth().currentUser.uid).get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setName(snapshot.data());
        } else {
          console.log('User does not exist');
        }
      });
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.headerButton}
          activeOpacity={0.5}>
          <Ionicons name="ios-menu" size={37} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{t("Settings")}</Text>
        <TouchableOpacity
          style={styles.headerButton}
          activeOpacity={0.5}>
          <Ionicons name="ios-notifications" size={32} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {/* Rest of your content */}
      </ScrollView>

      {/* Language Selection Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}>
        <View style={styles.languagesList}>
          <FlatList
            data={languagesList}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.languageButton}
                onPress={() => changeLng(item.code)}>
                <Text style={styles.lngName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0EEEE',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#8AA6CE',
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 28,
    color: '#000',
    marginLeft: 50,
  },
  headerButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 1 },
    shadowOpacity: 0.11,
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'black',
    alignSelf: 'center',
  },
});
