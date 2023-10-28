
import React ,{useState} from "react";
import { StyleSheet, View, Image, Text, FlatList, ScrollView,TouchableOpacity } from "react-native";
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import Swiper from "react-native-swiper";
import { Ionicons } from '@expo/vector-icons';

import i18next from '../services/i18next';
import { useTranslation } from 'react-i18next';
import { shadow, sizes } from "../components/theme";
const Card_Width = sizes.width -230;
const Card_Height = 170;
export default function City (){
   
    const navigation = useNavigation();
    const {t} = useTranslation();
    const rout = useRoute(); 
    const {data} = rout.params; //modification for fetching data
    const {item} = rout.params; //modification for fetching data
    const [selectedCategory, setSelectedCategory] = useState(item.category);

  // Filter the data based on the selected category
    const filteredData = data.filter((item) => item.category === selectedCategory);
    const monumentsData = data.filter(item => item.category === 'Monuments');
    const ActivitesData = data.filter(item => item.category === 'Activites');
    const RestaurantsData = data.filter(item => item.category === 'Restaurants');
    const LodgingData = data.filter(item => item.category === 'Lodging');
    const ShopsData = data.filter(item => item.category === 'Shops');
    const ProductsData = data.filter(item => item.category === 'Products');
    const handleOpenSettings = () => {
      navigation.navigate("Setting"); // Navigate to the Setting screen
      };
    
    console.log('Monuments Data:', monumentsData);
    return(
        <>
        
             <View>
         
         <View style={styles.view}>
         <TouchableOpacity
            style={styles.headerbutton1}
            activeOpacity={0.5} 
            
            >
            <TouchableOpacity
              style={styles.headerbutton1}
              activeOpacity={0.5}
              onPress={() => { navigation.navigate('Home'); }}
            >
              <Ionicons name="ios-arrow-back" size={30} color="black" style={styles.headerbuttonImage1} />
            </TouchableOpacity>
        
          </TouchableOpacity>
          <View style={styles.headertxt}>
            <Text style={{fontWeight:"bold",fontSize:28,textShadowColor: '#8AA6CE',textShadowOffset: { width: 0, height: 2 },textShadowRadius: 2,}}>{item.location}</Text>
          </View>
          <TouchableOpacity
            style={styles.headerbutton}
            activeOpacity={0.5}>
              <Ionicons name="ios-menu" size={37} color="#000" onPress={handleOpenSettings}/>
          </TouchableOpacity>
        </View>
   
    </View>

            <ScrollView> 
            <View>
              <View >
      
                
              <View style={styles.container}>
              <Swiper autoplay showsButtons={false}>
              {filteredData.map((s) => (
                <Image
                  key={s.id}
                  source={{ uri: s.imageUrl }}
                  resizeMode="cover"
                  style={styles.img}
                />
              ))}
            </Swiper>
              </View>
      
                <Text style={{color:"black",fontWeight:'bold',fontSize:30,margin:10,}}>{item.title}</Text>
                <Text style={{color:"black",marginBottom:'5%',fontSize:15,margin:10,}}>{item.description}</Text>
                </View>
              </View>
              <Text style={{color:"black",fontWeight:'bold',paddingLeft:'2%', marginTop:'5%',marginBottom:'5%',fontSize:23,backgroundColor:'#8AA6CE',width:140,borderTopRightRadius:10,borderBottomRightRadius:10}} >{t("Monuments")}</Text>
            <FlatList data={monumentsData}  horizontal keyExtractor={item => item._id} snapToInterval={200} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9} onPress={()=>navigation.navigate('ObjInfo',{ item })}>
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
            <Text style={{color:"black",fontWeight:'bold',paddingLeft:'2%', marginTop:'5%',marginBottom:'5%',fontSize:23,backgroundColor:'#8AA6CE',width:140,borderTopRightRadius:10,borderBottomRightRadius:10}} >{t("Activités")}</Text>
            <FlatList data={ActivitesData}  horizontal keyExtractor={item => item._id} snapToInterval={200} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9} onPress={()=>navigation.navigate('ObjInfo',{ item })}>
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
            <Text style={{color:"black",fontWeight:'bold',paddingLeft:'2%', marginTop:'5%',marginBottom:'5%',fontSize:23,backgroundColor:'#8AA6CE',width:140,borderTopRightRadius:10,borderBottomRightRadius:10}} >{t("Restaurants")}</Text>
            <FlatList data={RestaurantsData}  horizontal keyExtractor={item => item._id} snapToInterval={200} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9} onPress={()=>navigation.navigate('ObjInfo',{ item })} >
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
            <Text style={{color:"black",fontWeight:'bold',paddingLeft:'2%', marginTop:'5%',marginBottom:'5%',fontSize:23,backgroundColor:'#8AA6CE',width:140,borderTopRightRadius:10,borderBottomRightRadius:10}} >{t("Logements")}</Text>
            <FlatList data={LodgingData}  horizontal keyExtractor={item => item._id} snapToInterval={200} showsVerticalScrollIndicator={false} renderItem={({ item }) => {
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9} onPress={()=>navigation.navigate('ObjInfo',{ item })} >
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
            <Text style={{color:"black",fontWeight:'bold',paddingLeft:'2%', marginTop:'5%',marginBottom:'5%',fontSize:23,backgroundColor:'#8AA6CE',width:140,borderTopRightRadius:10,borderBottomRightRadius:10}} onPress={()=>{navigation.navigate('ObjInfo')}} >{t("Magasins")}</Text>
            <FlatList data={ShopsData}  horizontal keyExtractor={item => item._id} snapToInterval={200} showsHorizontalScrollIndicator={false} renderItem={({ item }) => {
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9} onPress={()=>navigation.navigate('ObjInfo',{ item })} >
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
            <Text style={{color:"black",fontWeight:'bold',paddingLeft:'2%', marginTop:'5%',marginBottom:'5%',fontSize:23,backgroundColor:'#8AA6CE',width:140,borderTopRightRadius:10,borderBottomRightRadius:10}} onPress={()=>{navigation.navigate('Apprt')}} >{t("Produits")}</Text>
            <FlatList data={ProductsData}  horizontal keyExtractor={item => item._id} snapToInterval={200} showsHorizontalScrollIndicator={false} renderItem={({ item }) => {
            return (
                <TouchableOpacity style={{marginVertical:5,marginHorizontal:10,}} activeOpacity={0.9} onPress={()=>navigation.navigate('ObjInfo',{ item })} >
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
            </ScrollView>
           
      </>
      
    )}

    
const styles = StyleSheet.create({
  titleText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 28,
    margin: 10,
    textShadowColor: "#8AA6CE",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
    textAlign: "center",
  },

  descriptionText: {
    color: "black",
    marginBottom: "5%",
    fontSize: 15,
    margin: 10,
    textAlign: "center",
  },

  container: {
        
    justifyContent: 'center',
    alignItems:'center',
    marginLeft : 5,
    marginRight:5,
    height:230,
    marginTop:"5%",
        borderWidth: 2,
    borderColor: '#8AA6CE',
    borderRadius: 10,
},
img: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width:370,
    borderRadius:9,
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
    headerbutton1: {
        height: 40,
        width:40,
        alignItems:'flex-end'
      },
  
    headerbutton: {
      height: 40,
      margin: 5,
      width:40,
      alignItems:'flex-end'
    },
    headerbuttonImage: {
      padding: 10,
      marginTop:3,
      marginRight:10,
      height: 35,
      width: 35,
    },
    headerbuttonImage1: {
      padding: 5,
      marginTop:2,
      marginLeft:8,
      height: 40,
      width: 35,
    },
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



