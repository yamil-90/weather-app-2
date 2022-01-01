import React from 'react';
import {Text, View, StyleSheet, TextInput, Pressable } from 'react-native';
// install react native picker
import Picker from '@react-native-picker/picker';

const Form =()=>{
    return (
        <View style={styles.form}>
            <View>
                <Text>hola form</Text>
                <TextInput
                style={styles.input}
                    placeholder='city'
                    placeholderTextColor='#666'
                />
            </View>
            <View>
                <Picker
                itemStyle={{height:120, backgroundColor:'#fff'}}>
                    <Picker.Item label='-- select --' value='' />
                    <Picker.Item label='United States' value='USA' />
                    <Picker.Item label='MEXICO' value='MX' />
                    <Picker.Item label='Argentina' value='ARG' />
                    <Picker.Item label='Costa Rica' value='CR' />
                    <Picker.Item label='Spain' value='ES' />
                    <Picker.Item label='Colombia' value='CO' />
                </Picker>
                <Pressable>
                    <View
                    style={styles.btnSearch}>
                        <Text style={styles.btnText}>search weather</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    )
}

export default Form;

const styles = StyleSheet.create({

form:{
    marginTop: 100
},
input:{
    padding: 10,
    height:50,
    backgroundColor: '#fff',
    fontSize: 20,
    marginBottom: 20,
    texAlign: 'center'
},
btnSearch:{
    marginTop:50,
    backgroundColor:'#000',
    padding:10,
    justifyContent: 'center'
}, 
btnText:{
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize:18
}
})