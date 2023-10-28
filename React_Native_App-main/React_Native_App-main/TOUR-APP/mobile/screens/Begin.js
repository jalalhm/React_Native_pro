import React, { useState } from 'react';
import { StyleSheet, View, ImageBackground, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../config';

export default function Begin() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const loginUser = async (email, Password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, Password);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleHome = () => {
    // Add your logic here
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/marhab.jpg')} style={styles.backgroundImage}>
        <View style={styles.child}>
          <View>
            <Text style={styles.title}>Log in</Text>
          </View>
          <View style={styles.formContainer}>
            <View style={styles.card}>
              <TextInput
                placeholder="Email"
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </View>
            <View style={styles.card}>
              <TextInput
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
                value={Password}
                onChangeText={setPassword}
                autoCapitalize='none'
                autoCorrect={false}
              />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => loginUser(email, Password)}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
            <Text style={styles.orText}>or</Text>
            <TouchableOpacity style={styles.cardapi} onPress={handleHome}>
              <View style={styles.socialIconContainer}>
                <Ionicons name="logo-facebook" size={34} color="#8AA6CE" />
              </View>
              <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cardapi} onPress={handleHome}>
              <View style={styles.socialIconContainer}>
                <Ionicons name="logo-google" size={34} color="#8AA6CE" />
              </View>
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </TouchableOpacity>
            <Text style={styles.signupText}>
              Don't have an account?  
              <Text style={styles.signupLink} onPress={() => { navigation.navigate('Sign') }}>
                Sign up
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
    marginTop: 150,
    textAlign: 'center',
  },
  formContainer: {
    marginTop: 40,
    marginLeft: 23,
    marginRight: 23,
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'rgba(173, 162, 162 , 0)',
  },
  child: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: '100%'
  },
  cardapi: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 20,
    color: '#565353',
    backgroundColor: '#EBFFF7',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 15,
    padding: 10,
    width: '90%',
    left: '3.5%'
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 16,
    padding: 10,
    width: '90%',
    left: '5%'
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E5E4',
    color: 'black',
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8AA6CE',
    padding: 15,
    borderRadius: 15,
    width: '90%',
    left: '5%'
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },
  socialButtonText: {
    
    fontSize: 18,
    color: '#000',
  },
  signupText: {
    color: 'white' , fontWeight : 'bold' , fontSize : 16,textAlign:'center' 
  },
  signupLink: {
    color: `#8AA6CE` , fontWeight : 'bold' , fontSize : 16 , marginLeft:10,
  },
  socialIconContainer: {
    marginRight: 10,
    marginLeft: 10,
  },
});