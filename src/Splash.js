import React, { Component } from "react";
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
export default class Splash extends Component{
    constructor(props){
        super();
    }
    render(){

        return(
            <View style={{flex:1, backgroundColor:'#ffffff'}}>

                <LottieView source={require('../resources/heartbeat.json')} autoPlay 
                loop={false}
                onAnimationFinish={()=>{
                    this.props.navigation.replace('Home');
                }}
                />
            </View>
        )
    }
}