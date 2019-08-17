import React from 'react';
import {View, Text, Button} from 'react-native';

function Home(props){
    return(
        <View style={{justifyContent : 'center', alignItems : 'center', flex : 1 }}>
            <Text>Home</Text>
            <Button title="details" onPress={() => {props.navigation.navigate('Details')}} />
            <Button title="order" onPress={() => {props.navigation.navigate('Confirm')}} />
        </View>
    )
}

export default  Home;