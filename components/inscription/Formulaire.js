import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import {primary, secondary } from '../../variables/colors'
import { TouchableOpacity, Switch } from 'react-native';
import * as Font from 'expo-font';
import { customFonts } from '../../variables/fonts';
import AppLoading from 'expo-app-loading';
import PhoneInput from 'react-native-phone-input'
import { inscription } from '../../api/AuthApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_TUTO_DONE } from '../../variables/constants';
import { styles } from './FormulaireStyles';

class Formulaire extends React.Component {

    state = {
        fontsLoaded: false,
        erreur: ''
      };

    constructor(props) {
        super(props);
        this.numero = "";
        this.prenom = "";
        this.nom = "";
        
    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
        // this.setState({
        //     pickerData: this.phone.getPickerData()
        // })
        // console.log(this.state.pickerData)
    }

    render(){
        if (this.state.fontsLoaded) {
            return this._render()
          } else {
            return <AppLoading />;
          }
        
    }

    _displayLoader(){

        if(this.state.isLoading){
            return (
                <View style={styles.loader}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }
    }

    _render() {
        return(
            <View style={styles.generalView}>

                <ScrollView style={styles.generalViewScrol}>

                    <View style={styles.header}>

                        <TouchableOpacity style={styles.btn_retour_touchable}
                            onPress={() => this._goBack()}>
                            <Image source={require('../../images/ic_retour.png')} style={styles.btn_retour}/>
                        </TouchableOpacity>

                        <Text style={styles.titre}>Inscription</Text>

                    </View>

                    <View style={styles.body}>

                        <Text style={styles.introduction}>Entrez votre numéro de téléphone et votre nom complet pour vous inscrire</Text>

                        <View>
                            <Text style={styles.erreur}>{this.state.erreur}</Text>
                        </View>

                        <View style={styles.form_numero}>

                            <PhoneInput ref='phone' initialCountry='ci'/>
                            <TextInput style={styles.edit_form} keyboardType="phone-pad" placeholder="Numéro de téléphone" placeholderTextColor="#707070" onChangeText={(text) => this._validNumero(text)}/>
                            

                        </View>

                        <View style={styles.form_nom}>

                            <Image source={require('../../images/ic_identifiant.png')} style={styles.icone_form}/>
                            <TextInput style={styles.edit_form} placeholder="Prénom" placeholderTextColor="#707070" onChangeText={(text) => this._validPrenom(text)}/>

                        </View>

                        <View style={styles.form_nom}>

                            <Image source={require('../../images/ic_identifiant.png')} style={styles.icone_form}/>
                            <TextInput style={styles.edit_form} placeholder="Nom" placeholderTextColor="#707070" onChangeText={(text) => this._validNom(text)}/>

                        </View>

                        <TouchableOpacity style={styles.bouton_connecter}
                            onPress={() => this._fakeInscription()}>
                            <Text style={styles.text_connecter}>Suivant</Text>
                            <Image source={require('../../images/ic_arrow_right.png')}/>
                        </TouchableOpacity>

                    </View>


                </ScrollView>

                {this._displayLoader()}

            </View>
        )
    }

    _fakeInscription(){

        data = {
            nom: this.nom,
            prenom: this.prenom,
            numero: this.numero
        }

        this.props.navigation.navigate('AppCodeOtp', {data: data})
    }

    _inscription(){

        this.setState( { 
            isLoading: true,
            erreur: ''
        });

        //Lancer la requete d'initiation de l'inscription
        inscription(this.numero, this.prenom, this.nom, 'SN')
        .then(data => {
            console.log(data)
            //Traitement des infos
            if(data.errorCode != null){
                if(data.errorCode == '200'){
                    //Enregistrer en local numero et nom
                    try{
                        //storeData(data)
                        this.props.navigation.navigate('AppCodeOtp', {data: data})
                    } catch(e){
                        log.console(e)
                        this.setState({
                            erreur: data.errorMessage
                        })
                    }
                } else {
                    this.setState({
                        erreur: data.errorMessage
                    })
                }
            }
            
            //Enlever le loader
           this.setState( { isLoading: false});
        })
        .catch(error => {

            //Enlever le loader
            this.setState( { isLoading: false});
            this.setState({
                erreur: 'Une erreur est survenue. Merci de vérifier votre connexion internet puis réessayer.'
            })
        })

    }
    
    _validNumero(text){
        this.numero = text;
    }

    _validPrenom(text){
        this.prenom = text;
    }

    _validNom(text){
        this.nom = text;
    }

    _goBack(){
        this.props.navigation.goBack()
    }

    
}

const storeData = async (value) => {
    try {
      await AsyncStorage.setItem(KEY_TUTO_DONE, true)
    } catch (e) {
      // saving error
    }
  }



export default Formulaire;