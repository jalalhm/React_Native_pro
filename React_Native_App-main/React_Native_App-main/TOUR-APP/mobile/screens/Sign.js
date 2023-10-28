import { StyleSheet, View, ImageBackground, Image, TextInput, TouchableOpacity, Text,ScrollView,KeyboardAvoidingView, Platform } from 'react-native';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { firebase } from '../config';
import { Ionicons } from '@expo/vector-icons';

export default function Sign () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  registerUser = async (email, password, firstName, lastName) => {
    await firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase.auth().currentUser.sendEmailVerification({
        handleCodeInApp: true,
        url:'mobile-d001e.firebaseapp.com',
      })
      .then(() => {
        alert('Verification email sent')
      }).catch((error) => {
        alert(error.message)
      })
      .then(() => {
        firebase.firestore().collection('users')
        .doc(firebase.auth().currentUser.uid)
        .set({
          firstName,
          lastName,
          email,
        })
      })
      .catch((error) => {
        alert(error.message)
      })
    })
    .catch((error => {
      alert(error.message)
    }))
  }


const handleLogin = () => {};
const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/marhab.jpg')} style={styles.backgroundImage}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : 0}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.child}>
      
       <TouchableOpacity
            onPress={()=>{navigation.navigate('Begin')}}
            activeOpacity={0.5}>
              <Ionicons name="ios-arrow-back" size={39} color="white" marginTop={40} marginLeft={20} onPress={()=>{navigation.navigate('Begin')}}/>
          </TouchableOpacity>
          
        <View style={styles.TxTContainer}>
          <Text style={{fontSize: 30,fontWeight: 'bold',color: "white",marginTop:-40}}>Sign up</Text>
        </View>
        
        <View style={styles.formContainer}>
          <Text style={{fontWeight: 600,fontSize: 18,marginBottom:15,color: 'white'}}>Let’s create a new account for you </Text>
          <View style={styles.card}>
            <TextInput
              placeholder="FirstName"
              style={styles.input}
              value={firstName}
              onChangeText={setFirstName}
              autoCorrect={false}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="LastName"
              style={styles.input}
              value={lastName}
              onChangeText={setLastName}
              autoCorrect={false}
            />
          </View>

          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              autoCorrect={false}
              autoCapitalize='none'
              keyboardType='email-address'
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              autoCorrect={false}
              autoCapitalize='none'
            />
          </View>
          <Text style={{color: 'white' ,fontSize:16,}}>By selecting Agree and continue below,
          <Text style={{color: `#8AA6CE` , fontWeight : 'bold' , fontSize : 16 , marginLeft:4,}}  >
             I agree to Terms of Service and Privacy Policy</Text>
          </Text>
          <TouchableOpacity style={styles.Button} onPress={() => registerUser(email, password, firstName, lastName)} >
            <Text style={styles.ButtonText}>Agree and continue</Text>
          </TouchableOpacity>
        </View>
        
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
  },
    child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  TxTContainer: {
    alignItems: 'center',
    marginTop: 50,
    paddingTop: 50,
  },
  formContainer: {
    flex: 1, // Use flex to fill available space
    justifyContent: 'center', // Vertically center the content
    marginHorizontal: 30,
    marginTop:40,
    marginVertical:10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(173, 162, 162 , 0.3)',

  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
    padding:10,
    width:"90%",
    left:'5%'
     
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth:1,
    borderBottomColor:'#B0C4DE',
    color:"black",
    fontSize:16,
  },
  Button: {
    backgroundColor: '#8AA6CE',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    
  },
  ButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign:'center'
    


  },

   buttonImage: {
      padding: 10,
      marginLeft:10,
      marginTop:2,
      height: 50,
      width: 50,
      position: 'absolute',
      top:20,
      
  
    
    },
});