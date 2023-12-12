import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, ImageBackground, Button, Pressable } from 'react-native'
import AppIntroSlider from 'react-native-app-intro-slider';
import {primary, secondary } from '../variables/colors'
import { TouchableOpacity, Switch } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { customFonts } from '../variables/fonts';
import AppLoading from 'expo-app-loading';
import { styles } from './TutorielStyles';


class Tutoriel extends React.Component {
    state = {
        fontsLoaded: false,
      };

    constructor(props) {
        super(props);
        
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
        
        console.log('then value')
    }

    render(){
        if (this.state.fontsLoaded) {

            return this._render()
          } else {

            return <AppLoading />;
          }
        
    }

    _render() {

      console.log('then value render')
        return(
            <View style={styles.generalView}>
                <ImageBackground source={require('../images/background_tuto.png')} resizeMode="contain" style={styles.image}>


                    <AppIntroSlider 
                        style={styles.slides}
                        renderItem={this._renderItem} 
                        data={slides} 
                        onDone={this._onDone}
                        dotStyle={{ backgroundColor: primary }}
                        activeDotStyle={{ backgroundColor: secondary }}
                        showNextButton={false}
                        />


                    <Image source={require('../images/logo_slogan.png')} style={styles.logo}></Image>
                    <View style={styles.view_buttons}>

                        <TouchableOpacity style={styles.bouton_connecter}
                            onPress={() => this._connecter()}>
                            <Text style={styles.text_connecter}>SE CONNECTER</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.bouton_inscrire}
                            onPress={() => this._inscription()}>
                            <Text style={styles.text_connecter}>S'INSCRIRE</Text>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>
                
            </View>
        )
    }

    _connecter = () => {
      this.props.navigation.replace("Login")
    }

    _inscription = () => {
      this.props.navigation.navigate("AppInscription")
    }

    _renderItem = ({ item }) => {
        return (
          <View style={styles.slide}>
          <Image source={item.imageslide} style={styles.imageTut}/>
            {/* <Text style={styles.title}>{item.title}</Text> */}
            <Text style={styles.textTut}>{item.text}</Text>
          </View>
        );
      }
}

const slides = [
    {
      key: 'tutoriel1',
      title: 'Gérez votre argent comme bon vous semble !',
      text: "Gérez votre argent à votre image : Rechargez, transférez, achetez et payez...",
      imageslide: require('../images/tuto1.png'),
    //   imageStyle: styles.image,
      // backgroundColor: '#59b2ab',
    },
    {
      key: 'tutoriel2',
      title: 'Reproting fiable',
      text: "Retrouvez facilement toutes les transactions que vous avez effectuées.",
      imageslide: require('../images/tuto2.png'),
    //   imageStyle: styles.image,
      // backgroundColor: '#febe29',
    },
    {
      key: 'tutoriel3',
      title: "Catalogue large de services digitaux.",
      text: "Payez vos factures, faites vos abonnements et achetez du crédit téléphonique le plus facilement possible.",
      imageslide: require('../images/tuto3.png'),
    //   imageStyle: styles.image,
      // backgroundColor: '#22bcb5',
    }
    
  ];



export default Tutoriel;