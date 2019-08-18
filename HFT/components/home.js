import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import sasi from '../assets/back.png';
import logo from '../assets/logo.png'
import {
  View,
  Text,
  StyleSheet,
 TouchableOpacity,
 Image
} from 'react-native';

export default function Home(props) {
    return (
      <ImageBackground source={sasi} style={{ flex: 1, width: '100%', alignItems: 'center' }}>
    <Image source = {logo} style={{width : 200, height : 200, top : 80}}/>
    <View style={{top : 230 }} >
    <TouchableOpacity style = {{width : 200, height : 40, borderRadius : 10, marginBottom : 10}} onPress={() => {props.navigation.navigate('Confirm')}}>
        <View style ={{width : '100%', backgroundColor : '#246796', height : '100%', flex : 1, justifyContent : 'center', borderRadius : 10}}>
            <Text style = {{textAlign : 'center', color : 'white'}}>Ready For Pick Up</Text>
        </View>
    </TouchableOpacity>
    <TouchableOpacity style = {{width : 200, height : 40, borderRadius : 10}} onPress={() => {props.navigation.navigate('Details')}}>
        <View style ={{width : '100%', backgroundColor : '#246796', height : '100%', flex : 1, justifyContent : 'center', borderRadius : 10}}>
            <Text style = {{textAlign : 'center', color : 'white'}}>Pickup History</Text>
        </View>
    </TouchableOpacity>
</View>
    <View style={styles.container} />
  </ImageBackground>

    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
