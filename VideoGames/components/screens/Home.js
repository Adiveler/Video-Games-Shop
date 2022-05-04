import { TouchableOpacity, View, Text, StatusBar, SafeAreaView, FlatList, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, {useState, useEffect} from 'react'
import { Videogames, listTab} from '../database/database'
import  styles, { COLOURS }  from '../../assets/Style';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchBar from '../../models/SearchBar';


const numOfColumns = 2;
//const WIDTH = Dimensions.get("window").width;
const Home = ({navigation}) =>{
    const [genre, setgenre] = useState('All');
    const [datalist, setDatalist] = useState(Videogames);

    // Search bar
    const [searchPhrase, setSearchPhrase] = useState('');
    const [clicked, setClicked] = useState(false);

    const setGenreFilter = genre => {
        if(genre != 'All'){
            setDatalist([...Videogames.filter(game => game.genre === genre)]);
        }
        else {
            setDatalist(Videogames);
        }
        setgenre(genre);
    }

    // Get product by search bar
    const searchBarText = searchPhrase => {
        if(clicked && searchPhrase != ''){
            setDatalist([...datalist.filter(game => game.name.includes(searchPhrase) || game.price.toString().includes(searchPhrase))])
            setClicked(false);
        }
        if(clicked && searchPhrase == ''){
            setGenreFilter(genre)
            setClicked(false);
        }
    }

    const renderItem = ({item}) => {
        return(
            <TouchableOpacity 
            onPress={() => navigation.navigate("ProductInfo", {productId: item.id})}
            style={styles.Home_TouchableOpacity_1}>
                <ImageBackground source={item.image} resizeMode="cover" style={styles.image}>
                    <View key={item.id}>
                        <View>
                            <Text style={styles.home_text1}>{item.name}</Text>
                            <Text style={{marginLeft: 10, fontSize: 20}}>{'\uFF04'}{item.price}</Text>
                        </View>
                    </View>
                </ImageBackground> 
            </TouchableOpacity>
        )
    }
    //starts on screen loads
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
        });
        return unsubscribe;
    }, [navigation])
    
    return(
        <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss(); setClicked(true); searchBarText(searchPhrase);}} accessible={false}>
            <View style={styles.Home_view2}>
                <StatusBar backgroundColor={COLOURS.white} barStyle="dark-content"></StatusBar>
                <SafeAreaView style={{flex:1 }}showsVerticalScrollIndicator={false}>
                    <View style={styles.home_view1}>
                        <TouchableOpacity>
                            <Entypo name="shopping-bag" style={styles.home_entypo}></Entypo>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('MyCart')}>
                            <MaterialCommunityIcons name="cart" style={styles.home_entypo}></MaterialCommunityIcons>
                        </TouchableOpacity>
                    </View>
                    <SearchBar searchPhrase={searchPhrase} setSearchPhrase={setSearchPhrase} clicked={clicked} setClicked={setClicked}></SearchBar>
                    <TouchableOpacity style={styles.Home_TouchableOpacity_2} onPress={() => {Keyboard.dismiss(); setClicked(true); searchBarText(searchPhrase)}}>
                        <Text style={{width: 70, padding: 5}}>Search</Text>
                    </TouchableOpacity>
                    <View style={{marginBottom: 10, padding: 16,}}>
                        <Text style={styles.home_text1}>Video Game shop and Services</Text>
                        <Text style={styles.home_text2}>Best Games Shop on the internet. Our Shop offers both products and services</Text>
                    </View>
                    <SafeAreaView style={styles.container}>
                        <View style={styles.listTabStyle}>
                            <FlatList data={listTab} horizontal={true} renderItem={({item}) => 
                                <TouchableOpacity key={item.key} style={[styles.btnTab, genre === item.genre && styles.btnTabActive]}
                                onPress={() => setGenreFilter(item.genre)}>
                                    <Text style={[styles.btnTextTab, genre === item.genre && styles.textTabActive]}>{item.genre}</Text>
                                </TouchableOpacity>}>
                            </FlatList>
                        </View>
                        <View>
                            <Text style={styles.home_text3}>Number of items: {datalist.length}</Text>
                            <TouchableOpacity style={[styles.btnTab, {right: -100, borderRadius: 15, borderWidth: 0.8, backgroundColor: COLOURS.backgroundLight}]}
                            onPress={() => setGenreFilter('All')}>
                                <Text style={styles.home_text4}>
                                    See All
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <FlatList data={datalist}
                        searchPhrase={searchPhrase}
                        setClicked={setClicked}
                        renderItem={renderItem}
                        keyExtractor={item => item.key}
                        numColumns={numOfColumns}
                        />
                    </SafeAreaView>
                </SafeAreaView>
            </View>
        </TouchableWithoutFeedback>
    ) 
};

export default Home;