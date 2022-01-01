import React from 'react';
import {Text, View, StyleSheet, Pressable, Keyboard} from 'react-native';

import Form from './src/components/Form'

const hideKeyBoard = ()=>{
    Keyboard.dismiss();
}

const App =()=>{
return(
    <>
<Pressable  onPress={()=>{
    hideKeyBoard()
}}>
<View style={styles.app}>
    <View style={styles.content}>
        <Form/>
    </View>
</View>
</Pressable>

    </>
)
};

weatherEnabler = "3f40706fa65396a8e1ae8be95faad4c1"
mapEnabler = "AIzaSyA-A7EI0w6HlycpbiuJTduX6Fynl_Sg6wc"

const styles = StyleSheet.create({
    app:{
    backgroundColor: 'rgb(71,149,212)',
    justifyContent: 'center'
    },
    content:{
        marginHorizontal: '2.5%'
    }

})

export default App;
