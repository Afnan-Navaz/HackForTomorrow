import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import cc from '../assets/back.png';

function Confirm(props){
    return(
        
<ImageBackground source={cc} style={{ flex: 1, width: '100%', alignItems: 'center' }}>
<View style={{justifyContent : 'center', alignItems : 'center', flex : 1 }}>
<TouchableOpacity onPress={() => {props.navigation.navigate('Home')}}>
    <View style={{backgroundColor : '#de6274', width : 200, height : 200, borderRadius : 100, justifyContent : 'center', alignItems : 'center'}}>
        <Text style = {{fontSize : 20, fontWeight : 'bold', color : 'white'}}>
            Confirm Pickup
        </Text>
    </View>
</TouchableOpacity>
</View>
             </ImageBackground>
        
    )
}

export default  Confirm;