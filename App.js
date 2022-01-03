import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Keyboard, Alert } from 'react-native';
import axios from 'axios';


import Form from './src/components/Form';
import Weather from './src/components/Weather';

const hideKeyBoard = () => {
    Keyboard.dismiss();
}

const App = () => {

    const [search, setSearch] = useState({
        country: '',
        city: ''
    })
    const [consultApi, setConsultApi] = useState(false);
    const { country, city } = search;
    const [apiResult, setApiResult] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('rgb(71,149,212)')
    useEffect(() => {
        const requestApi = () => {
            if (consultApi) {

                const weatherEnabler = "3f40706fa65396a8e1ae8be95faad4c1"
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherEnabler}&units=metric`
                axios.get(url)
                    .then((result) => {
                        setApiResult(result.data);
                        const {main}= result.data;
                        const current = main.temp;
                        if(current <10){
                            setBackgroundColor('rgb(105,108,149)')
                        }else if (current >= 10 && current <25){
                            setBackgroundColor('rgb(71,149,212)')
                        }else{
                            setBackgroundColor('rgb(178,28,61)')  
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        showAlert()
                    })


            }
            setConsultApi(false)
        }
        requestApi()
    }, [consultApi])

    const showAlert = () => {
        Alert.alert(
            'Error',
            'request error',
            [
                { text: 'Ok' }
            ]
        )
    }
    const bgColorApp = backgroundColor

    return (
        <>
            <Pressable
                style={[styles.app, {backgroundColor:bgColorApp}]}
                onPress={() => {
                    hideKeyBoard()
                }}>
                    <View style={styles.content}>
                        
                        <Weather
                        apiResult={apiResult}
                        />
                    
                        <Form
                            setSearch={setSearch}
                            search={search}
                            setConsultApi={setConsultApi}
                        />
                    </View>
            </Pressable>

        </>
    )
};

weatherEnabler = "3f40706fa65396a8e1ae8be95faad4c1"
mapEnabler = "AIzaSyA-A7EI0w6HlycpbiuJTduX6Fynl_Sg6wc"

const styles = StyleSheet.create({
    app: {
        flex: 1,
    },
    content: {
        marginHorizontal: '2.5%',
        marginTop:50
        
    }

})

export default App;
