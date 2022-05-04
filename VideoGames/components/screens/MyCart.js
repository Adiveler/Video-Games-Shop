import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Videogames, Coupons } from '../database/database'
import { TouchableOpacity, Image, View, Text, ToastAndroid, ScrollView, TextInput } from 'react-native';
import  styles, { COLOURS }  from '../../assets/Style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const MyCart = ({navigation}) => {
    const [game, setGame] = useState();
    const [total, setTotal] = useState(null);
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB()
        });
        return unsubscribe;
    }, [navigation])

    //get data from local DB by ID
    const getDataFromDB = async() => {
        let items = await AsyncStorage.getItem('cartItems');
        items = JSON.parse(items);
        let productData = [];
        if (items) {
            Videogames.forEach(data => {
                if(items.includes(data.id)){
                    productData.push(data);
                    return;
                }
            })
            setGame(productData);
            getTotal(productData);
        }
        else{
            setGame(false);
            getTotal(false);
        }
    }
    const getTotal = productData => {
        let total = 0;
        for (let index = 0; index < productData.length; index++) {
            let productPrice = productData[index].price;
            total = total + productPrice;
        }
        // total= total* Discount
        setTotal(total);
    }

    // Remove items from cart
    const removeItemsFromCart = async id =>{
        let items = await AsyncStorage.getItem('cartItems');
        items = JSON.parse(items);
        if (items) {
            let arr = items;
            for (let index = 0; index < arr.length; index++) {
                if (arr[index] == id) {
                    arr.splice(index,1);
                }
                await AsyncStorage.setItem('cartItems', JSON.stringify(arr));
                getDataFromDB();
            }
        } 
    }
    
    const renderProducts = (data,index) =>{
        return(
            <TouchableOpacity 
            // key={data.key} 
            onPress={() => navigation.navigate('ProductInfo', {productId: data.id})} style={styles.myCart_TouchableOpacity_1}>
                <View style={styles.myCart_View_1}>
                    <Image source={data.image} style={{width:'100%', height:'100%', resizeMode:'contain'}}></Image>
                </View>
                <View style={{flex:1, height:'100%', justifyContent:'space-around'}}>
                    <View>
                        <Text style={styles.myCart_Text_1}>{data.name}</Text>
                        <View style={{marginTop:4, flexDirection:'row', alignItems:'center', opacity:0.6}}>
                            <Text style={{fontSize:14, fontWeight:'400', maxWidth:'85%', marginRight:4}}>{'\uFF04'}{data.price}</Text>
                            <Text>(~{'\uFF04'}{ data.price + data.price/ 20 })</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <View style={[styles.myCart_View_2, {marginRight: 20}]}>
                                <MaterialCommunityIcons name='minus' style={styles.myCart_MaterialCommunityIcons_1}></MaterialCommunityIcons>
                            </View>
                            <Text>1</Text>
                            <View style={[styles.myCart_View_2, {marginRight: 20, marginLeft:20}]}>
                                <MaterialCommunityIcons name='plus' style={styles.myCart_MaterialCommunityIcons_1}></MaterialCommunityIcons>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => removeItemsFromCart(data.id)}>
                            <MaterialCommunityIcons name='delete-outline' style={[styles.myCart_MaterialCommunityIcons_1, {backgroundColor: COLOURS.backgroundLight, padding: 8, borderRadius: 100}]}></MaterialCommunityIcons>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const [flag, setFlag] = useState(false);
    const [text, setText] = useState('');
    let Discount = 1;
    const [showDiscount, setShowDiscount] = useState(1);

    const checkCoupon = (text) => {
        for (const temp of Coupons) {
            if (temp.couponName === text && flag == false) {
                Discount = temp.Discount;
                let price = Discount * total;
                setFlag(true);
                setShowDiscount(total - price);
                setTotal(price);
                console.log(showDiscount);
                ToastAndroid.show('Coupon added successfuly', ToastAndroid.SHORT);
                return;
            }
        }
        ToastAndroid.show(flag == true ? 'Coupon already added' : 'Coupon not found', ToastAndroid.SHORT);
    }

    return(
        <View style={styles.myCart_View_3}>
            <ScrollView>
                <View style={styles.myCart_View_4}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialCommunityIcons name='chevron-left' style={styles.myCart_MaterialCommunityIcons_2}></MaterialCommunityIcons>
                    </TouchableOpacity>
                    <Text style={styles.myCart_Text_2}>Order details</Text>
                </View>
                <Text style={styles.myCart_Text_3}>My cart</Text>
                <View style={{paddingHorizontal:16}}>
                    {game ? game.map(renderProducts) : null}
                </View>
                <View>
                    <View style={{paddingHorizontal:16, marginVertical:10}}>
                        <Text style={[styles.myCart_Text_2, {letterSpacing:1, marginBottom:20}]}>Delivery location</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{flexDirection:'row', width:'80%', alignItems:'center'}}>
                                <View style={styles.myCart_View_5}>
                                    <MaterialCommunityIcons name='truck-delivery-outline' style={{fontSize:18, color: COLOURS.blue}}></MaterialCommunityIcons>
                                </View>
                                <View>
                                    <Text style={styles.myCart_Text_2}>Shay Agnon st 18.</Text>
                                    <Text style={[styles.myCart_Text_2, {lineHeight:20, opacity:0.5}]}>Jerusalem, Israel</Text>
                                </View>
                            </View>
                            <MaterialCommunityIcons name='chevron-right' style={{fontSize:22, color:COLOURS.black}}></MaterialCommunityIcons>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:16, marginVertical:10}}>
                        <Text style={[styles.myCart_Text_2, {letterSpacing:1, marginBottom:20}]}>Payment Methods</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={styles.myCart_View_5}>
                                <Text style={{fontSize:10, fontWeight:'900', color:COLOURS.blue, letterSpacing:1}}>VISA</Text>
                            </View>
                            <View>
                                <Text style={styles.myCart_Text_2}>VISA CLASSIC</Text>
                                <Text style={[styles.myCart_Text_2, {lineHeight:20, opacity:0.5}]}>****-1234</Text>
                            </View>
                            <MaterialCommunityIcons name='chevron-right' style={{fontSize:22, color:COLOURS.black}}></MaterialCommunityIcons>
                        </View>
                    </View>
                    <View style={{paddingHorizontal:16, marginTop:40, marginBottom:80}}>
                        <Text style={[styles.myCart_Text_2, {letterSpacing:1, marginBottom:20}]}>Order Info</Text>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:8}}>
                            <Text style={[styles.myCart_Text_4, {opacity:0.5}]}>Sub Total</Text>
                            <Text style={[styles.myCart_Text_4, {opacity:0.8}]}>{'\uFF04'}{total}.00</Text>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={[styles.myCart_Text_4, {opacity:0.8}]}>{'\uFF04'}{total/20}</Text>
                            <Text>{'\n'}</Text>
                        </View>
                        <View style={{margin:5}}>
                            <Text>Coupon: {'\uFF04'}{flag == true ? showDiscount : 0}</Text>
                        </View>
                        <View style={{flexDirection:'row', height:'25%', width:'100%', padding:10, marginTop:15}}>
                            <View style={{padding:'5%', borderBottomWidth:1, flexDirection:'row', width:'70%', borderRadius:10}}>
                                <TextInput style={{height:20, flexShrink:1}} placeholder='Type your coupon here...' onChangeText={newText => setText(newText)} defaultValue={text}></TextInput>
                            </View>
                            <View style={{height:'100%', width:'35%', justifyContent:'center', alignItems:'center'}}>
                                <TouchableOpacity style={{height:'100%', width:'100%', justifyContent:'center', alignItems:'center'}} onPress={() => checkCoupon(text)}>
                                    <Text style={{color:COLOURS.white, height:'100%', backgroundColor:COLOURS.backgroundDark, borderRadius:10, padding:10, paddingTop:'15%'}}>
                                        Check Coupon
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <Text style={styles.myCart_Text_5}>Total:</Text>
                            <Text style={{fontSize:18, fontWeight:'500', color:COLOURS.black}}>{'\uFF04'}{total + total/20}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.myCart_View_6}>
                <TouchableOpacity style={styles.myCart_TouchableOpacity_2}
                onPress={() => navigation.navigate('Payment')
                }>
                    <Text style={{fontSize:12, fontWeight:'500', letterSpacing:1, color:COLOURS.white, textTransform:'uppercase'}}>
                        Check Out ({'\uFF04'}{total + total/20})
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default MyCart;