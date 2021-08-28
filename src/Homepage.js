import React, {Component} from 'react';
import {View,Text,Image,Button} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
export default class Homepage extends Component{
    constructor(props){
        super();
    }
    state={
        photo:null,
    }
    handleChoosePhoto=()=>{
        const options={
            noData:true,
        };
        ImagePicker.launchImageLibrary(options,response=>{
            if(response.assets[0].uri){
                console.log("imhere");
                this.setState({photo:response.assets[0]});
            }
        })
    }
    render(){
        const {photo} =this.state;
        return(
            <View style={{flex:1,backgroundColor:'#f0f0f0',justifyContent:'center',alignItems:'center'}}>
                <Text>Hello home page</Text>
                {
                photo 
                && 
                (<Image source={{uri:photo.uri}} style={{width:300,height:300}}/>
                    
                )
                }
                <Button title="choose" onPress={this.handleChoosePhoto}/>
            </View>
        )
    }
}