

import React from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
import { TouchableOpacity, ImageBackground } from 'react-native';
import sasi from '../assets/back.png';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Login(props) {
    return (

      <React.Fragment>
            <ImageBackground source={sasi} style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent : 'center' }}>

      <View style = {{shadowColor: "#000",
shadowOffset: {
	width: 10,
	height: 10,
},
shadowOpacity: 0.80,
shadowRadius: 13.97,

elevation: 30,
backgroundColor : 'white',
padding : 30,
borderRadius : 10}}>
      <View style={{  width: '80%', alignItems: 'center', alignSelf: 'center', marginBottom: 10 }}>
       <Item rounded style={{ alignItems: 'center', backgroundColor : 'white', borderColor: 'black' }}>
          <Input placeholder='Email' style = {{textAlign : 'center'}} />
        </Item>
      </View>

      <View style={{  width: '80%', alignItems: 'center', alignSelf: 'center', marginBottom: 15 }}>
        <Item rounded style={{ alignItems: 'center', backgroundColor : 'white', borderColor : 'blackssss' }}>
           <Input placeholder='Password' style={{textAlign : 'center'}} secureTextEntry={true} />
        </Item>
      </View>
      
      <TouchableOpacity style={{ alignItems: 'center', alignSelf: 'center' }} onPress = {() => props.navigation.navigate('Home')}>
      <View style={{height: 40, width: 150, backgroundColor: '#F55A5A', borderRadius: 10, justifyContent : 'center'}}>
      <Text style={{ fontSize: 20, color: '#fff', textAlign : 'center' }}>
      Login</Text>
      </View>
      </TouchableOpacity>
      </View>
  </ImageBackground>
      </React.Fragment>

    );
}

const styles = StyleSheet.create({
  container: {

  },
});
