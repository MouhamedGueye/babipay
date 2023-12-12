import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import {primary, secondary } from '../../variables/colors'
import { TouchableOpacity, Switch } from 'react-native';
import * as Font from 'expo-font';
import { customFonts } from '../../variables/fonts';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { validerCodeOtp } from '../../api/AuthApi';
import Modal from 'react-native-modal';
import { dolliThiere } from '../../variables/Crypto';
import { styles } from './CodeOtpStyles';


class CodeOtp extends React.Component {

    state = {
        fontsLoaded: false,
        code: '',
        currentBloc: 0,
        code1: '',
        code3: '',
        code4: '',
        code5: '',
        erreur: '',
        isModalVisible: false
      };

    constructor(props) {
        super(props);
        this.detailsUser = this.props.navigation.state.params.data
        
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
        var myloop1 = [];
        var myloop2 = [];
        var myloop3 = [];
        for(let i = 1; i < 4; i++){
            myloop1.push(this._renderButtonKeypad(i));
            myloop2.push(this._renderButtonKeypad(i+3));
            myloop3.push(this._renderButtonKeypad(i+6));
        }

        return(
            <View style={styles.generalView}>

                <ScrollView style={styles.generalViewScrol}>

                    <View style={styles.header}>

                        <TouchableOpacity style={styles.btn_retour_touchable}
                            onPress={() => this._goBack()}>
                            <Image source={require('../../images/ic_retour.png')} style={styles.btn_retour}/>
                        </TouchableOpacity>

                        <Text style={styles.titre}>Code de vérification</Text>

                    </View>

                    <View style={styles.body}>

                        <Text style={styles.introduction}>Entrez le code de vérification reçu par SMS :</Text>


                        <View>
                            <Text style={styles.erreur}>{this.state.erreur}</Text>
                        </View>


                        <View style={styles.form_numero}>

                            <View style={styles.bloc}><Text style={styles.one_item}>{this.state.code1}</Text></View>
                            <View style={styles.bloc}><Text style={styles.one_item}>{this.state.code2}</Text></View>
                            <View style={styles.bloc}><Text style={styles.one_item}>{this.state.code3}</Text></View>
                            <View style={styles.bloc}><Text style={styles.one_item}>{this.state.code4}</Text></View>
                            

                            <TouchableOpacity style={styles.bouton_resend}
                                onPress={() => this._sendCode()}>
                                <Image source={require('../../images/ic_refresh.png')}/>
                            </TouchableOpacity>

                        </View>


                        <TouchableOpacity style={styles.bouton_connecter}
                            onPress={() => this._fakeConfirmCode()}>
                            <Text style={styles.text_connecter}>Confirmer</Text>
                        </TouchableOpacity>

                        <View style={styles.keyboard}>

                            <View style={styles.keyboard_sh}>{myloop1}</View>
                            <View style={styles.keyboard_sh}>{myloop2}</View>
                            <View style={styles.keyboard_sh}>{myloop3}</View>
                            <View style={styles.keyboard_sh}>
                                {this._renderButtonKeypad('-')}
                                {this._renderButtonKeypad(0)}
                                {this._renderButtonKeypadEffacer()}
                            </View>

                        </View>

                    </View>

                    {this._displayLoader()}

                    <Modal isVisible={this.state.isModalVisible}
                        animationIn="pulse">
                        <View style={styles.modal_succes}>
                            
                            <Image source={require('../../images/ic_success.png')} style={styles.image_success}/>
                            
                            <Text style={styles.bravo}>B  R  A  V  O  !</Text>
                            <Text style={styles.text_succes}>Votre compte a été créé avec succès. Vous pouvez continuer en définissant votre code PIN :</Text>

                            <TouchableOpacity style={styles.bouton_continuer}
                                onPress={() => this._continuer()}>
                                <Text style={styles.text_connecter} >Continuer</Text>
                            </TouchableOpacity>

                            {/* <Button title="Hide modal" onPress={toggleModal} /> */}

                        </View>
                    </Modal>


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

    _renderButtonKeypad(numero){
        return(
                    <TouchableOpacity style={styles.bouton_clavier}
                        onPress={() => this._putCode(numero)}>
                        <Text style={styles.btn_pad}>{numero}</Text>
                    </TouchableOpacity>
        )
    }

    _renderButtonKeypadEffacer(){
        return(
                    <TouchableOpacity style={styles.bouton_clavier}
                        onPress={() => this._effacer()}>
                        
                        <Image source={require('../../images/ic_effacer.png')}/>
                    </TouchableOpacity>
        )
    }

    _putCode(numero){

        if(this.state.currentBloc==0){
            this.setState({
                currentBloc: 1,
                code1: numero,

            })
        } else if(this.state.currentBloc==1){
            this.setState({
                currentBloc: 2,
                code2: numero,

            })
        } else if(this.state.currentBloc==2){
            this.setState({
                currentBloc: 3,
                code3: numero,

            })
        } else if(this.state.currentBloc==3){
            this.setState({
                currentBloc: 4,
                code4: numero,

            })
        } else {

        }
        
    }

    _effacer(){

        if(this.state.currentBloc==4){
            this.setState({
                currentBloc: 3,
                code4: '',

            })
        } else if(this.state.currentBloc==3){
            this.setState({
                currentBloc: 2,
                code3: '',

            })
        } else if(this.state.currentBloc==2){
            this.setState({
                currentBloc: 1,
                code2: '',

            })
        } else if(this.state.currentBloc==1){
            this.setState({
                currentBloc: 0,
                code1: '',

            })
        } else {

        }
    }

    _continuer(){

        this.setState( { 
            isModalVisible: false
        });

        this.props.navigation.navigate('AppCodePin', 
            {
                dataUser: this.detailsUser,
                definePin: true
            })

    }

    _goBack(){
        this.props.navigation.goBack()
    }

    _fakeConfirmCode(){

        this.setState( { 
            isModalVisible: true
        });

    }

    _confirmCode(){

        this.setState( { 
            isLoading: true,
            erreur: ''
        });

        var fullC = ""+this.state.code1+this.state.code2+this.state.code3+this.state.code4

        validerCodeOtp(this.detailsUser.numero, dolliThiere(fullC))
        .then(data => {
 
            console.log(data)
            if(data.errorCode != null){
                if(data.errorCode == '200'){
                    //Enregistrer en local numero et nom
                    try{
                        // storeData(data)
                        this.setState( { 
                            isModalVisible: true
                        });
                    } catch(e){
                        console.log(e)
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
        })

    }
}

const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('details_user')
      if(value !== null) {
        // value previously stored
        return value;
      }
    } catch(e) {
      // error reading value
    }
  }



export default CodeOtp;