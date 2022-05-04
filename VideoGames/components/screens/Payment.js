import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ToastAndroid, View, ScrollView, TouchableOpacity, Text, TextInput } from 'react-native';
import  styles, { COLOURS }  from '../../assets/Style';
import { Videogames } from '../database/database';

const Payment = ({navigation}) => {
    const [game, setGame] = useState();
    const [total, setTotal] = useState(null);

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


    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataFromDB();
        });
        return unsubscribe;
    }, [navigation]);

    const checkOut = async() => {

        try {
            await AsyncStorage.removeItem('cartItems');
        } catch (error) {
            return error;
        }
        ToastAndroid.show('Items will be delivered soon', ToastAndroid.SHORT);
    
        navigation.navigate('Success');

    }

    return(
        <View style={{width:'100%', height:'100%', backgroundColor:COLOURS.white, position:'relative'}}>
            <ScrollView>
                <Text style={styles.payment_Text_1}>Please fill in the details { '\n' } to arrange payment</Text>
                <View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.payment_Text_1}>User Information</Text>
                        <TextInput style={styles.payment_Input_2} placeholder='First Name'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='Last Name'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='Email'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='Phone Number' keyboardType='phone-pad'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='Country'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='City'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='Address'></TextInput>
                        <Text style={styles.payment_Text_2}>Payment details</Text>
                        <TextInput style={styles.payment_Input_2} placeholder='Card Number' maxLength={16} keyboardType='phone-pad'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='Full Name'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='ID Number' maxLength={9} keyboardType='phone-pad'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='Expired Date' keyboardType='phone-pad'></TextInput>
                        <TextInput style={styles.payment_Input_2} placeholder='CVV' maxLength={3} keyboardType='phone-pad'></TextInput>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.payment_View_1}>
                <TouchableOpacity style={styles.payment_TouchableOpacity_1} onPress={() => total != 0 ? checkOut() : null}>
                    <Text style={{fontSize:12, fontWeight:'500', letterSpacing:1, color:COLOURS.white, textTransform:'uppercase'}}>Buy {'\uFF04'}{total + total/20}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Payment;