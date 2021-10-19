import React,{Component} from 'react';
import {Text,View} from 'react-native';
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
export default class Transaction extends Component{
render(){
    return(
        <View style={{flex:1,justifyContent:'right',alignItems:'center'}}>
            <Text>Issue or Return</Text>
        </View>
    )
}
} 