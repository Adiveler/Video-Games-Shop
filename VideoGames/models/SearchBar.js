import React from 'react';
import { View, TextInput, Button, Keyboard } from 'react-native';
import {Feather, Entypo} from '@expo/vector-icons';
import  styles from '../assets/Style';

const SearchBar = ({clicked, setClicked, searchPhrase, setSearchPhrase}) => {
    return (
      <View style={styles.container_2}>
        <View style={clicked? 
            styles.search_bar_clicked : styles.search_bar_unclicked}>
            {/* Search icon */}
            <Feather 
            name='search'
            size={20}
            color='black'
            style={{marginLeft: 1}}></Feather>
            <TextInput style={styles.search_bar_input} placeholder='Search' onPress={() => setSearchPhrase('')}
            value={searchPhrase} onChangeText={setSearchPhrase} onFocus={() => {setClicked(true)}}/>
            {/* Cross icon, depending on if the search bar is clicked or not */}
            {clicked && (
                <Entypo name='cross' size={20} color='black' style={{padding: 1}} onPress={() => setSearchPhrase('')}></Entypo>
            )}
        </View>
        <View>
            <Button title='Cancel' onPress={() => {Keyboard.dismiss(); setClicked(false)}}></Button>
        </View>
      </View>
    );
}

export default SearchBar;
