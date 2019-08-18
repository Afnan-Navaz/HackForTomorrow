

import React from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
import { TouchableOpacity, ImageBackground } from 'react-native';
import sasi from '../assets/as.png';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function Login(props) {
    return (

      <React.Fragment>
            <ImageBackground source={sasi} style={{ flex: 1, width: '100%', alignItems: 'center' }}>

      <View style={{ top: 320, width: '80%', alignItems: 'center', alignSelf: 'center' }}>
       <Item rounded style={{ alignItems: 'center', backgroundColor : 'white' }}>
          <Input placeholder='Email' style = {{textAlign : 'center'}} />
        </Item>
      </View>

      <View style={{ top: 326, width: '80%', alignItems: 'center', alignSelf: 'center' }}>
        <Item rounded style={{ alignItems: 'center', backgroundColor : 'white' }}>
           <Input placeholder='Password' style={{textAlign : 'center'}} />
        </Item>
      </View>
      
      <TouchableOpacity style={{ alignItems: 'center', alignSelf: 'center', top: 350 }} onPress = {() => props.navigation.navigate('Home')}>
      <View style={{height: 40, width: 200, backgroundColor: '#F55A5A', borderRadius: 20, justifyContent : 'center'}}>
      <Text style={{ fontSize: 20, color: '#fff', textAlign : 'center' }}>
      Login</Text>
      </View>
      </TouchableOpacity>
  </ImageBackground>
      </React.Fragment>

    );
}

const styles = StyleSheet.create({
  container: {

  },
});
