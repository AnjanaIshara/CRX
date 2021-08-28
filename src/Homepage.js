import React, {Component} from 'react';
import {View,Text} from 'react-native';
export default class Homepage extends Component{
    constructor(props){
        super();
    }
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#ff45ff',justifyContent:'center',alignItems:'center'}}>
                <Text>Hello home page</Text>
            </View>
        )
    }
}