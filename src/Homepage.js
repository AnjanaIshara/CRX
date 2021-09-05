import React, { Component, useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import LottieView from 'lottie-react-native';
export default class Homepage extends Component {
    constructor(props) {
        super();
    }
    state = {
        photo: null,
        probability: null,
        disease: "",
        prediction:false,
    }
    handleChoosePhoto = () => {
        this.setState({ probability: null });
        this.setState({ disease: "" });
        this.setState({prediction:false});
        const options = {
            noData: true,
        };
        ImagePicker.launchImageLibrary(options, response => {
            if (response.assets[0].uri) {
                console.log("imhere");
                this.setState({ photo: response.assets[0] });
            }
        })
    }
    getPredictions = async () => {
        console.log("Button clicked");
        const data = new FormData();
        data.append('imagefile', {
            name: this.state.photo["fileName"],
            type: this.state.photo["type"],
            uri: this.state.photo["uri"]
        })
        let response = await fetch('http://localhost:5000/getimg', {
            method: 'POST',
            body: data
        });
        let json = await response.json();
        this.setState({ probability:"Prediction Probability: "+ json.Probability });
        this.setState({ disease:"Status of the X-Ray: " + json.PredictedClassName });
        this.setState({prediction:true});
        console.log(json.Probability);
       
    }




    render() {
        const { photo } = this.state;

        return (
            <View style={{ flex: 1, alignItems: 'center' }}>


                <LottieView source={require('../resources/background.json')} autoPlay
                    loop={true}
                    onAnimationFinish={() => {
                        this.props.navigation.replace('Home');
                    }}
                    resizeMode="cover"
                >
                </LottieView>


                <Text style={{ fontSize: 40, fontFamily: 'Merriweather', color: '#FFFFFF' }} >Hello home page</Text>
                {
                    photo
                    &&
                    (<Image source={{ uri: photo.uri }} style={{ width: 300, height: 300 }} />

                    )
                }


                <Button style={{ marginBottom: 100 }} title="choose" onPress={this.handleChoosePhoto} />
                <View style={{
                    width: 20,
                    height: 20,
                }} />
                <Button
                    disabled={!photo}
                    title="get Predictions" onPress={this.getPredictions} />
                <View style={{
                    width: 20,
                    height: 40,
                }} />
                {


                }
                <Text style={{fontSize:15,color:"#F0F0F0"}}>
                    {this.state.probability}
                </Text>
                <Text style={{fontSize:15,color:"#F0F0F0"}}>

                    {this.state.disease}
                </Text>
            </View>



        )


    }


}