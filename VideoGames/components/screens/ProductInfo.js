import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {Dimensions, ScrollView, ToastAndroid, TouchableOpacity, View, Text, StatusBar, Image} from 'react-native';
import { Videogames } from '../database/database';
import  styles, { COLOURS }  from '../../assets/Style';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating } from 'react-native-ratings';


const WIDTH = Dimensions.get("window").width;
const ProductInfo = ({route, navigation}) => {
    const {productId} = route.params;
    const [game, setGame] = useState({});
    /*
    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, WIDTH);
    */
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getDataFromDB()
        });
        return unsubscribe;
    }, [navigation])

    //get product data by productID
    const getDataFromDB = async () => {
        for (let i = 0; i < Videogames.length; i++) {
            if(Videogames[i].id === productId){
                setGame(Videogames[i]);
                return;
            }
        }
    }

    //add to cart
    const addToCart = async (id) => {
        let itemArray = await AsyncStorage.getItem("cartItems")
        itemArray = JSON.parse(itemArray)
        if(itemArray){
            let array = itemArray;
            array.push(id);
            try {
                await AsyncStorage.setItem("cartItems", JSON.stringify(array));
                ToastAndroid.show("Item Added Succsesfully to cart", ToastAndroid.SHORT);
                navigation.navigate('Home');
            } catch (error) {
                return error;
            }
        }
        else {
            let array = [];
            array.push(id);
            try {
                await AsyncStorage.setItem("cartItems", JSON.stringify(array));
                ToastAndroid.show("Item Added Succsesfully to cart", ToastAndroid.SHORT);
                navigation.navigate('Home');
            } catch (error) {
                return error;
            }
        }
    }

    // product horizontal scroll product card
    const renderProduct = ({item}) => {
        return(
            <View style={{
                width: WIDTH,
                height: 240,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Image source={itme} style={{
                width: '100%',
                height: '100%',
                resizeMode: "cover",
                }}></Image>
            </View>
        )
    }
    return(
        <View style={{width: '100%', height: '100%', backgroundColor: COLOURS.white, position: 'relative',}}>
            <StatusBar backgroundColor={COLOURS.backgroundLight} barStyle="dark-content"/>
            <ScrollView>
                <View style={styles.productInfo_View_1}>
                    <View style={styles.productInfo_View_2}>
                        <TouchableOpacity onPress={() => navigation.goBack("Home")}>
                            <Entypo name="chevron-left" style={styles.productInfo_Entypo_1}></Entypo>
                        </TouchableOpacity>
                    </View>
                    {/* <FlatList></FlatList> */}
                    <View style={[styles.container, {height: 400, width: 800}]}>
                        <Image source={game.image} resizeMode="contain" style={styles.image}></Image>
                    </View>
                </View>
                <View style={{
                    paddingHorizontal: 16,
                    marginTop: 6
                }}>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginVertical: 14
                    }}>
                        <Entypo name="shopping-cart" style={{
                            fontSize: 18,
                            color: COLOURS.blue,
                            marginRight: 6
                        }}></Entypo>
                        <Text style={{
                            fontSize: 12,
                            color: COLOURS.black,
                        }}>Shopping</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginVertical:4,
                        alignItems: 'center',
                        justifyContent:'space-between',
                    }}>
                        <Text style={styles.productInfo_text_1}>{game.name}</Text>
                        <Ionicons name="link-outline" style={styles.productInfo_Ionicons_1}></Ionicons>
                    </View>
                    <Text style={styles.productInfo_text_2}>{game.description}</Text>
                    <View style={styles.productInfo_View_3}>
                        <View style={styles.productInfo_View_4}>
                            <View style={styles.productInfo_View_5}>
                                <Entypo name="location-pin" style={{fontSize:16, color: COLOURS.blue}}></Entypo>
                            </View>
                            <Text>Ariel University 9A,{'\n'} Ariel, Israel</Text>
                        </View>
                        <Entypo name="chevron-right" style={{fontSize:22, color: COLOURS.backgroundDark}}></Entypo>
                    </View>
                    <Rating showRating style={{paddingVertical: 10}}></Rating>
                    <View style={{paddingVertical: 16}}>
                        <Text style={styles.productInfo_Text_3}>{'\uFF04'}{game.price}.00</Text>
                        <Text style={{marginBottom: 100}}>Shipment rate 5% ~  {'\uFF04'}{game.price / 20} ({'\uFF04'}
                        {game.price  + game.price / 20  })</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.productInfo_View_6}>
                <TouchableOpacity onPress={() => addToCart(game.id)} style={styles.productInfo_TouchableOpacity_1}>
                    <Text style={styles.productInfo_Text_4}>{"Add to cart"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ProductInfo;