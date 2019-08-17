import React from 'react';
import {View, Text, Button} from 'react-native';

function Login(props){
    return(
        <View style={{justifyContent : 'center', alignItems : 'center', flex : 1 }}>
            <Text>login</Text>
            <Button title="press" onPress={() => {props.navigation.navigate('Home')}} />
        </View>
    )
}

export default  Login;