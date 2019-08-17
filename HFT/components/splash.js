import React, {useEffect} from 'react'
import {View, Text} from 'react-native'

function Splash(props){

    useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('Login');
        }, 1500)
    }, []);

    return(
        <View style={{flex : 1, justifyContent : 'center', alignItems: 'center',}}>
            <Text>
                Splash screen
            </Text>
        </View>
    )
}

export default Splash;