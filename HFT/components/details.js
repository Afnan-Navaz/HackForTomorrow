import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';


function Details(props){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://logs11.herokuapp.com/')
            .then(resp => resp.json())
            .then(data => setData(data.results))
    }, []);

    return(
        <View style={{justifyContent : 'center', alignItems : 'center', flex : 1 }}>
            <FlatList 
            data = {data}
            style = {styles.flat}
            renderItem = {({item}) => (
            <View style = {styles.box}>
                <View style={{padding : 10}}>
                    <Text style={{color : 'white', fontSize : 25, textAlign : 'center', fontWeight: 'bold',}}>{item.date}</Text>
                </View>
                <View style={{backgroundColor : '#a3c2cc', padding : 10, borderBottomStartRadius : 10, borderBottomEndRadius : 10}}>
                    <Text style={styles.detail}>quantity : {item.quantity}</Text>
                    <Text style = {styles.detail}>Harm : 
                        <Text style = {{color : (item.harm === "High" || item.harm === "Medium") ? ((item.harm === "Medium") ? "#eaed8e" : "#f27474") : '#86f08d', fontWeight : 'bold'}}>{item.harm}</Text>
                    </Text>
                </View>
            </View>)} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    flat : {
        width : "100%",
        paddingLeft : 15,
        paddingRight : 15,
        marginBottom : 20
    },
    box : {
        backgroundColor : '#379dbf',
        marginTop : 10,
        borderRadius : 10,
    },
    detail : {
        color : 'white',
        fontSize : 18, 
        textAlign : 'center'
    }
})

export default Details;