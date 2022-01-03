import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Weather = ({ apiResult }) => {
    const { cod, main } = apiResult;
console.log(apiResult)
    if (cod !== 200) {
        return null
        
    }
    return (
        <View style={styles.weather}>
            <Text style={[styles.weatherText, styles.current]}>{parseInt(main.temp)}
            <Text style={styles.temperature}>
                &#x2103;
            </Text>
            <Image
            style={{width:66, height:58}}
            source={{uri:`http://openweathermap.org/img/wn/${apiResult.weather[0].icon}@2x.png`}}
            />
            </Text>
            <View style={styles.temperatures}>
            <Text style={[styles.weatherText]}>Max {' '}
            <Text style={styles.temperature}>
            {parseInt(main.temp_max)}&#x2103;
            </Text>
            </Text>
            <Text style={[styles.weatherText]}>Min {' '}
            <Text style={styles.temperature}>
            {parseInt(main.temp_min)}&#x2103;
            </Text>
            </Text>
            </View>
        </View>
    )
}


export default Weather

const styles = StyleSheet.create({
    weather:{
    },
    current:{
        fontSize:80,
        marginRight:0,
        fontWeight:'bold'
    },
    weatherText:{
        color:'#fff',
        fontSize:20,
        textAlign:'center',
        marginRight:20
    },
    temperature:{
        fontSize:24,
        fontWeight:'bold'
    },
    temperatures:{
        flexDirection:'row',
        justifyContent:'center'

    }
})
