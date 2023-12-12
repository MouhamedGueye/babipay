import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, ImageBackground, Button, Pressable } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import {primary, secondary } from '../variables/colors'
import { TouchableOpacity, Switch } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { customFonts } from '../variables/fonts';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_DETAILS, KEY_TUTO_DONE } from '../variables/constants';

class SplashScreen extends React.Component {

    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        //Check user
        console.log('didMounnt')
        this.props.navigation.replace('AppTuto')

        getTutoDone()
        .then((value) =>  {
            if(value == null){

        console.log('then value')
                this.props.navigation.replace('AppTuto')
            } else {

        console.log('verify login')
                //Verifiy login
                this.verifyLogin
            }
        })
    }
    
    verifyLogin(){

        getSession()
        .then((value) => {
            if(value == null){
                //Go to login
                this.props.navigation.replace('Login')
            } else {
                //Go to Home
                this.props.navigation.replace('Accueil', {
                    dataUser: value
                })
            }
        })
    }
    render(){

        return(
            <View style={styles.generalView}>

                <Image source={require('../images/logo_dv.png')} />

                <ActivityIndicator size='small' style={styles.loader}/>

            </View>
        )
    }
}

const getTutoDone = async () => {
    try {
      return value = await AsyncStorage.getItem(KEY_TUTO_DONE)
    } catch(e) {
      return null;
    }
  }

  const getSession = async () => {
      try {
        return value = await AsyncStorage.getItem(KEY_DETAILS)
      } catch(e) {
        return null;
      }
    }

const styles = StyleSheet.create({

    generalView: {
        // marginTop: 10,
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    loader: {
        marginTop: 20
    }
})

export default SplashScreen;