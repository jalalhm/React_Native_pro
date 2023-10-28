import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text, ScrollView, Switch, Modal, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { firebase } from '../config';
import i18next, { languageResources } from '../services/i18next';
import { useTranslation } from 'react-i18next';
import languagesList from '../services/languagesList.json';
import { Ionicons } from '@expo/vector-icons';
export default function Setting({ onClose }) {
  const navigation = useNavigation();

  const [isEnabled_loc, setIsEnabled_loc] = useState(false);
  const toggleSwitch_loc = () => setIsEnabled_loc(previousState => !previousState);
  const [isEnabled_notify, setIsEnabled_notify] = useState(false);
  const toggleSwitch_notify = () => setIsEnabled_notify(previousState => !previousState);

  const [name, setName] = useState('');
  const goBack = () => {
    navigation.goBack();
  };
  // translation code
  const [visible, setVisible] = useState(false);
  const { t } = useTranslation();
  

  const changeLng = lng => {
    i18next.changeLanguage(lng);
    setVisible(false);
  };
  // end

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
    <>
      <View>
        <View style={styles.view}>

          <TouchableOpacity style={styles.headerButton} activeOpacity={0.5} onPress={goBack}>
          <Ionicons name="ios-arrow-back" size={37} color="#000" />
          </TouchableOpacity>
          <View style={styles.headertxt}>
            <Text style={{ fontWeight: 'bold',fontSize: 28,color: '#000',textShadowColor: '#8AA6CE',textShadowOffset: { width: 0, height: 2 },textShadowRadius: 2,marginRight:48,}}>{t("Settings")}</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.settingContainer}>
        <TouchableOpacity
          style={styles.button2}
          activeOpacity={0.5}>
          <Ionicons name="ios-person-circle-outline" size={100} color="#000" />
          <Text style={{ fontWeight: "bold", fontSize: 20, marginBottom: 15 }}>{name.firstName} {name.lastName}</Text>
          <Text style={{ fontWeight: "600", fontSize: 15, marginBottom: 15, marginTop: -15 }}>{name.email}</Text>
        </TouchableOpacity>

        <View style={{ top: "7%", width: "100%", flex: 1 }}>
          <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 15, marginTop: 5, marginLeft: 10, color: "#928C8A" }}>PREFERENCES</Text>

          {/* LANGUAGE */}
          <Modal visible={visible} onRequestClose={() => setVisible(false)}>
            <View style={styles.languagesList}>
              <FlatList
                data={Object.keys(languageResources)}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.languageButton}
                    onPress={() => changeLng(item)}>
                    <Text style={styles.lngName}>
                      {languagesList[item].nativeName}
                    </Text>
                  </TouchableOpacity>
                )}
              />
            </View>
          </Modal>
          <TouchableOpacity style={styles.container} activeOpacity={0.5} onPress={() => setVisible(true)}>
            <Ionicons name="language" size={20} color="#8AA6CE" marginLeft={15} marginTop={6}/>
            <Text style={{ fontWeight: "600", fontSize: 18, marginTop: 5, marginLeft: 10, alignItems: 'center' }}>{t("change-language")}</Text>
            <Text style={{ position: 'relative', color: "#D3CFCE", fontSize: 17, width: "100%", textAlign: 'center', top: 4 }}>{t("langue")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} activeOpacity={0.5}>
          <Ionicons name="navigate" size={20} color="#8AA6CE" marginLeft={15} marginTop={6}/>
            <Text style={{ fontWeight: "600", fontSize: 18, marginTop: 5, marginLeft: 10, alignItems: 'center' }}>{t("Localisation")}</Text>
            <View style={{ flex: 1, alignItems: 'flex-end', right: 10 }}>
              <Switch
                trackColor={{ false: '#DDDDDD', true: '#1FCF2F' }}
                thumbColor={isEnabled_loc ? '#8AA6CE' : '#8AA6CE'}
                ios_backgroundColor="#DDDDDD"
                onValueChange={toggleSwitch_loc}
                value={isEnabled_loc}
              />
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} activeOpacity={0.5}>
          <Ionicons name="trash" size={20} color="#8AA6CE" marginLeft={15} marginTop={6}/>
            <Text style={{ fontWeight: "600", fontSize: 18, marginTop: 5, marginLeft: 10, alignItems: 'center' }}>{t("Fermer-compte")}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ top: "12%", width: "100%", flex: 1 }}>
          <Text style={{ fontWeight: "600", fontSize: 18, marginBottom: 15, marginTop: 5, marginLeft: 10, color: "#928C8A" }}>{t("Help")}</Text>
          <TouchableOpacity style={styles.container} activeOpacity={0.5}>
          <Ionicons name="ios-help-circle-outline" size={25} color="#8AA6CE" marginLeft={15} marginTop={6}/>
            <Text style={{ fontWeight: "600", fontSize: 18, marginTop: 5, marginLeft: 10, alignItems: 'center' }}>{t("Assistance")}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.container} activeOpacity={0.5}>
          <Ionicons name="ios-mail-outline" size={25} color="#8AA6CE" marginLeft={15} marginTop={6}/>
            <Text style={{ fontWeight: "600", fontSize: 18, marginTop: 5, marginLeft: 10, alignItems: 'center' }}>{t("Contact-us")}</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1, marginBottom: "60%", top: 20 }}>
          <TouchableOpacity style={styles.Button} activeOpacity={0.5} onPress={() => firebase.auth().signOut()}>
            <Text style={styles.ButtonText}>{t("Se-deco")}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  headerButton: {
    height: 40,
    margin: 5,
    width: 40,
    alignItems: 'flex-end',
  },

     button2: {
       
       
        width:"100%",
        display:'flex',
        alignItems:'center',
        top:7,

      },

buttonImage1: {
      padding: 45,
      height: 45,
      width: 65,


},

languageButton: {
  padding: 10,
  borderBottomColor: '#dddddd',
  borderBottomWidth: 1,
},

languagesList: {
  flex: 1,
  justifyContent: 'center',
  padding: 100,
  backgroundColor:"black",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height:1},
    shadowOpacity: 0.11,
},

container:{
        
        padding:10,
        width:"100%",
       
    alignItems:'flex-start',
    flexDirection:'row',
    backgroundColor:"#F3F3F3",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height:1},
    shadowOpacity: 0.11,
    
    marginTop:0.2

},

lngName: {
  fontSize: 16,
  color: 'white',
  alignSelf:'center',
},

container1:{
    top:20 ,   
    padding:10,
    width:"100%",
    bottom:19, 
    alignItems:'flex-start',
    flexDirection:'row',
    backgroundColor:"#F3F3F3",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 1},
    shadowOpacity: 0.1,
   

},
 Button: {
    backgroundColor: '#DEA537',
    padding: 18,
    borderRadius: 20,
    alignItems: 'center',
    top:"260%",
    marginLeft: 40,
    marginRight: 5,
    
 

  },
  ButtonText: {
    color: '#fff',
    fontSize: 20,
  },

 view: {
      
      marginTop: 5,
      paddingTop: 30,
      paddingBottom:10,
      flexDirection: 'row',

    },
    headertxt: {
      justifyContent:'center',
      alignItems: "center",  
      flex:1,
      textAlign:'center',
      marginTop:2,

    },
   
  
    headerbutton: {
      height: 40,
      margin: 5,
      width:40,
      alignItems:'flex-end'
    },
    headerbuttonImage: {
      height: 40,
      margin: 5,
      width: 40,
      alignItems: 'flex-end',
    },
    settingContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent background
      flex: 1,
      paddingTop: 10,
      paddingHorizontal: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
      elevation: 5,
    },
 
 



});