import React from 'react';
import Home from './components/screens/Home';
import ProductInfo from './components/screens/ProductInfo';
import Success from './components/screens/Success';
import MyCart from './components/screens/MyCart';
import Payment from './components/screens/Payment';
import {  NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const ReactNative = require('react-native');
  try {
    ReactNative.I18nManager.allowRTL(false);
  } catch (e) {
    console.log(e);
  }
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false,}}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="ProductInfo" component={ProductInfo}></Stack.Screen>
        <Stack.Screen name="Success" component={Success}></Stack.Screen>
        <Stack.Screen name='MyCart' component={MyCart}></Stack.Screen>
        <Stack.Screen name='Payment' component={Payment}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


