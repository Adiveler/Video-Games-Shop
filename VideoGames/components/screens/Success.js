import React from 'react';
import { Text, TouchableOpacity, View, ImageBackground, } from 'react-native';
import { COLOURS } from '../../assets/Style';
import splash from '../database/images/Success.jpg'

const Success = ({navigation}) =>{
    return(
        <ImageBackground source={splash} style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 20, justifyContent: 'center', top: -100, backgroundColor:COLOURS.backgroundLight, padding:15, borderRadius:50}}
                >Your purchase was successful!</Text>
                <View>
                    <TouchableOpacity style={{top: 200, justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => navigation.navigate('Home')}>
                        <Text style={{fontSize: 16, justifyContent: 'center', padding: 10, borderRadius: 20, borderWidth: 1, backgroundColor: COLOURS.Aqua}}>
                            Back to home page
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    )
};
export default Success;