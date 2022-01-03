import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Pressable, Animated, Alert } from 'react-native';
// install react native picker
import { Picker } from '@react-native-picker/picker';

const Form = ({ search, setSearch, setConsultApi }) => {
    const { country, city } = search;

    const [animationBtn] = useState(new Animated.Value(1))

const requestWeather = ()=>{
    if(country.trim()==='' || city.trim()===''){
        showAlert()
        return
    }
    setConsultApi(true)
}
const showAlert = ()=>{
    Alert.alert(
        'Error',
        'All the fields are mandatory',
        [
            {text: 'Ok'}
        ]
    )
}

    const inAnimation = () => {
        console.log('in');
        Animated.spring(animationBtn, {
            toValue: 0.9,
            useNativeDriver: false
        }).start();
    }
    const outAnimation = () => {
        console.log('uot');
        Animated.spring(animationBtn, {
            toValue: 1,
            friction: 4,
            tension: 30,
            useNativeDriver: false
        }).start();
    }

    const animationStyle = {
        transform: [{ scale: animationBtn }]
    }
   
    return (
        <View style={styles.form}>
            <View>
                <TextInput
                    value={city}
                    onChangeText={cityText => setSearch({ ...search, city:cityText })}
                    style={styles.input}
                    placeholder='city'
                    placeholderTextColor='#666'
                />
            </View>
            <View>
                <Picker
                    onValueChange={(countryText) => (
                        setSearch({ ...search, country:countryText })
                    )}
                    selectedValue={country}
                    style={{ height: 50, backgroundColor: '#fff' }}>
                    <Picker.Item label='-- select --' value='' />
                    <Picker.Item label='United States' value='USA' />
                    <Picker.Item label='MEXICO' value='MX' />
                    <Picker.Item label='Argentina' value='ARG' />
                    <Picker.Item label='Costa Rica' value='CR' />
                    <Picker.Item label='Spain' value='ES' />
                    <Picker.Item label='Colombia' value='CO' />
                    <Picker.Item label='Peru' value='PE' />
                </Picker>
                <Pressable
                    onPressIn={() => {
                        inAnimation()
                    }}
                    onPressOut={() => {
                        outAnimation()
                    }}
                    onPress={()=>{
                        requestWeather()
                    }}
                >
                    <Animated.View
                        style={[styles.btnSearch, animationStyle]}>
                        <Text style={styles.btnText}>search weather</Text>
                    </Animated.View>
                </Pressable>
            </View>
        </View>
    )
}

export default Form;

const styles = StyleSheet.create({

    form: {
        marginTop: 50
    },
    input: {
        padding: 10,
        height: 50,
        backgroundColor: '#fff',
        fontSize: 20,
        marginBottom: 20,
        textAlign: 'center'
    },
    btnSearch: {
        marginTop: 50,
        backgroundColor: '#000',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 10
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: '700',
        fontSize: 18
    }
})