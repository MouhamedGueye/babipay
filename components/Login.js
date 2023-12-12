import React from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { customFonts } from '../variables/fonts';
import AppLoading from 'expo-app-loading';
import { authentification } from '../api/AuthApi';
import { dolliThiere } from '../variables/Crypto';
import { KEY_DETAILS } from '../variables/constants';
import { NavigationActions, StackActions } from 'react-navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from './LoginStyles';

class Login extends React.Component {

    expDataUser = {
        numero: "",
        prenom: "Jean Ives",
        nom: "Diamana",
        codePin: "0000"
    }

    state = {
        fontsLoaded: false,
        erreur: '',
        numero: '',
        pin: '',
        isLoading: false
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
    }

    render(){
        if (this.state.fontsLoaded) {
            return this._render()
          } else {
            return <AppLoading />;
          }
        
    }

    _render() {
        return(
            <View style={styles.generalView}>
            <ScrollView style={styles.generalView}>

                <View style={styles.body}>

                    <Image source={require('../images/logo_slogan.png')} style={styles.image_login}/>

                    <Text style={styles.intro}>Entrez vos identifiants pour accéder à votre profil !</Text>

                    {
                        this.state.erreur ? 
                        (
                            <View style={styles.bloc_erreur} >
                                <Text style={styles.erreur}>{this.state.erreur}</Text>
                            </View>
                        ) : null
                    }

                    <View style={styles.form}>

                        <View style={styles.form_identifiant}>

                            <Image source={require('../images/ic_identifiant.png')} style={styles.icone_form}/>
                            <TextInput style={styles.edit_form} keyboardType="phone-pad" placeholder="N° de téléphone" placeholderTextColor="#707070"  onChangeText={(text) => this._validNumero(text)}/>

                        </View>


                        <View style={styles.form_password}>

                            <Image source={require('../images/ic_password.png')} style={styles.icone_form}/>
                            <TextInput style={styles.edit_form}  keyboardType="phone-pad" placeholder="Code PIN" secureTextEntry={true} placeholderTextColor="#707070"  onChangeText={(text) => this._validPin(text)}/>

                        </View>

                        <TouchableOpacity style={styles.bouton_connecter}
                            onPress={() => this._fakeConnexion()}>
                            <Text style={styles.text_connecter}>SE CONNECTER</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.login_inscription}
                            onPress={() => this._redirectInscription()}>
                            <Text style={styles.text_inscription}>Vous êtes nouveau ? Inscrivez-vous !</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                {this._displayLoader()}

                </ScrollView>
            </View>
        )
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

    _fakeConnexion(){

        if(this.numero == undefined || this.numero.length < 5){
            this.setState( { 
                erreur: 'Le numero est invalide'
            });
            return;
        }
        if(this.pin == undefined || this.pin.length < 4){
            this.setState( { 
                erreur: 'Le code PIN est invalide'
            });
            return;
        }

        var dolli = dolliThiere(this.pin)
        this.expDataUser.codePin = dolli;
        this.expDataUser.numero = this.numero;

        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ 
                routeName: 'Accueil',
                params: {
                    dataUserCon: this.expDataUser,
                    dataUser: this.expDataUser,
                    codePin: dolli
                } })],
        });
        this.props.navigation.dispatch(resetAction)

    }

    _redirectInscription(){

        this.props.navigation.navigate("AppInscription")
    }

    _connexion(){

        if(this.numero == undefined || this.numero.length < 5){
            this.setState( { 
                erreur: 'Le numero est invalide'
            });
            return;
        }
        if(this.pin == undefined || this.pin.length < 4){
            this.setState( { 
                erreur: 'Le code PIN est invalide'
            });
            return;
        }
        this.setState( { 
            isLoading: true,
            erreur: ''
        });

        var dolli = dolliThiere(this.pin)

        //Lancer la requete d'initiation de l'inscription
        authentification(this.numero, dolli)
        .then(data => {
            console.log(data)
            //Traitement des infos
            if(data.errorCode != null){
                if(data.errorCode == '200'){
                    //Enregistrer en local numero et nom
                    try{
                        // storeData(data)
                        // .then( result => {
                        //     console.log(result)
                        // })
                        // .catch(error =>{
                        //     console.log(error)
                        // })
                        const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ 
                                routeName: 'Accueil',
                                params: {
                                    dataUserCon: data,
                                    dataUser: data.compteRestlet,
                                    codePin: dolli
                                } })],
                        });
                        this.props.navigation.dispatch(resetAction)
                    } catch(e){
                        console.log(e)
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

            console.log(error)
            //Enlever le loader
            this.setState( { isLoading: false});
            this.setState({
                erreur: 'Une erreur est survenue. Merci de vérifier votre connexion internet puis réessayer.'
            })


        })

    }

    _fingerprint(){

    }
    
    _validNumero(text){
        this.numero = text;
    }

    _validPin(text){
        this.pin = text;
    }
}

const storeData = async (value) => {
    try {
        console.log('dataUser :')
        console.log(value)
      await AsyncStorage.setItem(KEY_DETAILS, value)
    } catch (e) {
      // saving error

    }
  }

export default Login;