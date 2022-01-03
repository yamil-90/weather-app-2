import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, Keyboard, Alert } from 'react-native';
import axios from 'axios';


import Form from './src/components/Form';

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
    const [apiResult, setApiResult] = useState('')
    useEffect(() => {
        const requestApi = () => {
            if (consultApi) {
                    console.log('so?');
                    const weatherEnabler = "3f40706fa65396a8e1ae8be95faad4c1"
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherEnabler}`
                    axios.get(url)                    
                    .then((result)=>{
                        setApiResult(result.data);
                    })
                    .catch(err=>{
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

    return (
        <>
            <Pressable
                style={styles.app}
                onPress={() => {
                    hideKeyBoard()
                }}>
                <View>
                    <View style={styles.content}>
                        <Form
                            setSearch={setSearch}
                            search={search}
                            setConsultApi={setConsultApi}
                        />
                    </View>
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
        backgroundColor: 'rgb(71,149,212)',
        justifyContent: 'center'
    },
    content: {
        marginHorizontal: '2.5%'
    }

})

export default App;
