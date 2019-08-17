/* @flow */

import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
import { TouchableOpacity, ImageBackground, View,
Text,
StyleSheet, } from 'react-native';
import sasi from './assets/as.png';


export default class Sign extends Component {
  render() {
    return (

      <React.Fragment>
            <ImageBackground source={sasi} style={{ flex: 1, width: '100%', alignItems: 'center' }}>
      <View style={{ top: 314, width: '80%', alignItems: 'center', alignSelf: 'center' }}>
        <Item rounded style={{ alignSelf: 'center', backgroundColor: '#fff' }}>
          <Input placeholder='Your Name' />
          </Item>
      </View>
      <View style={{ top: 320, width: '80%', alignItems: 'center', alignSelf: 'center', }}>
       <Item rounded style={{ alignItems: 'center', backgroundColor: '#fff' }}>
          <Input placeholder='Email' />
        </Item>
      </View>

      <View style={{ top: 326, width: '80%', alignItems: 'center', alignSelf: 'center' }}>
        <Item rounded style={{ alignItems: 'center', backgroundColor: '#fff' }}>
           <Input placeholder='Password' style={{ }} />
        </Item>
      </View>
      <View
style={{ height: 40, width: 200, backgroundColor: '#F55A5A', top: 350, borderRadius: 20, alignItems: 'center', alignSelf: 'center', justifyContents: 'center'
        }}
      >
      <TouchableOpacity style={{ alignItems: 'center', alignSelf: 'center', top: 8 }}>
      <Text style={{ fontSize: 20, color: '#fff' }}>
      Register For Free</Text>
      </TouchableOpacity>
</View>
  </ImageBackground>
      </React.Fragment>

    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
