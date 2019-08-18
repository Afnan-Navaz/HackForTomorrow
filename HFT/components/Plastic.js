import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import sasi from '../assets/back.png';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Button } from 'native-base';

export default function Home() {
    return (
      <ImageBackground source={sasi} style={{ flex: 1, width: '100%', alignItems: 'center' }}>
    <View style={{ }} >
<Button primary rounded style={{ top: 380, width: 200 }} onPress={() => {props.navigation.navigate('Details')}}><Text style={{ left: 50, color: 'white' }} >Ready for Pick Up</Text>
</Button>
<Button primary rounded style={{ top: 400, width: 200, alignItems: 'center' }} onPress={() => {props.navigation.navigate('Confirm')}}><Text style={{ left: 60, color: 'white' }}>Pickup History</Text>
</Button>
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
