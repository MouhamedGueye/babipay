import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image } from 'react-native'
import {colorBackgroundGray, colorBorderButtonMenuGray, colorTextButtonMenuGray, colorTextFraisGray, primary, secondary } from '../../variables/colors'
import { TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { customFonts } from '../../variables/fonts';
import AppLoading from 'expo-app-loading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';
import { NavigationActions, StackActions } from 'react-navigation';
import { sendTransaction } from '../../api/TransApi';
import { styles } from './FactureResumeStyles';


class FactureResume extends React.Component {

    state = {
        fontsLoaded: false,
        numero: '',
        erreur: '',
        refClient: '',
        numeroFacture: '',
        isModalVisible: false,
        styleBoutonWallet: styles.bouton_onglet_actif,
        styleTextWallet: styles.text_onglet_actif,
        styleBoutonOthers: styles.bouton_onglet_inactif,
        styleTextOthers: styles.text_onglet_inactif,
        isVisibleOngletWallet: true,
        isVisibleOngletOthers: false,

        montantTransaction: 3500,
        beneficiaire: '77 666 88 00',
        frais: 0

      };

    constructor(props) {
        super(props);
        this.detailsUser = this.props.navigation.state.params.dataUser;
        this.codePinNiekh = this.props.navigation.state.params.codePin;
        this.state.beneficiaire = this.props.navigation.state.params.numeroBenef;
        this.state.montantTransaction = this.props.navigation.state.params.montant;
        this.state.frais = this.props.navigation.state.params.frais;
        this.state.numeroFacture = this.props.navigation.state.params.numeroFacture;
        this.state.refClient = this.props.navigation.state.params.refClient;
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

    _loadView(code){

        if(code == 'wallet'){
            this.setState({
                styleBoutonWallet: styles.bouton_onglet_actif,
                styleTextWallet: styles.text_onglet_actif,
                styleBoutonOthers: styles.bouton_onglet_inactif,
                styleTextOthers: styles.text_onglet_inactif,
                isVisibleOngletWallet: true,
                isVisibleOngletOthers: false
            })
        } else {
            this.setState({
                styleBoutonWallet: styles.bouton_onglet_inactif,
                styleTextWallet: styles.text_onglet_inactif,
                styleBoutonOthers: styles.bouton_onglet_actif,
                styleTextOthers: styles.text_onglet_actif,
                isVisibleOngletWallet: false,
                isVisibleOngletOthers: true
            })
        }
    }

    _renderView(){

        return (
            <View style={styles.view_intra} hide={this.state.isVisibleOngletWallet}
                        >

                <Text style={styles.introduction}>Veuillez confirmer les détails du transfert :</Text>

                <View>
                    <Text style={styles.erreur}>{this.state.erreur}</Text>
                </View>

                <View style={styles.bloc_recap}>

                        <Text style={styles.text_tire}>Référence Client</Text>
                        <Text style={styles.texte_valeur}>{this.state.refClient}</Text>

                        <Text style={styles.text_tire}>Numéro de la facture</Text>
                        <Text style={styles.texte_valeur}>{this.state.numeroFacture}</Text>

                        <Text style={styles.text_tire}>Date limite de paiement</Text>
                        <Text style={styles.texte_valeur}>12/01/2024</Text>

                        <Text style={styles.text_tire}>Montant (en Fcfa)</Text>
                        <Text style={styles.texte_valeur}>{this.state.montantTransaction}</Text>

                        <Text style={styles.text_tire}>Frais (en Fcfa)</Text>
                        <Text style={styles.texte_valeur}>{this.state.frais}</Text>

                        <Text style={styles.text_total_titre}>TOTAL A FACTURER (en Fcfa)</Text>
                        <Text style={styles.text_total_valeur}>{this.state.frais+this.state.montantTransaction}</Text>

                </View>

                <View style={styles.bloc_boutons}>

                    <View style={styles.view_btn_continuer}>
                        <TouchableOpacity style={styles.bouton_fleche_continuer}
                            onPress={() => this._sendFakeTransaction()}>
                            <Image source={require('../../images/ic_arrow_continuer.png')} style={styles.btn_retour}/>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>
    )
    }

    _sendFakeTransaction(){
        this.setState( { 
            isModalVisible: true
        });
    }

    _sendTransaction(){
        this.setState({
            isLoading: true
        })

        var body = {
            montant: this.state.montantTransaction+this.state.frais,
            codeService: 'TRANSFERT',
            numeroBeneficiaire: this.state.beneficiaire,
            numeroEnvoyeur: this.detailsUser.numero,
            codePays: "SN",
        };

        console.log('body Transaction')
        console.log(body)
        sendTransaction(this.detailsUser.numero, this.codePinNiekh, body)
        .then(data => {
            console.log(data)
            //Traitement des info
            
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

            console.log(e)
            //Enlever le loader
            this.setState( { isLoading: false});
        })
    }

    __openContact(){

    }

    _goBack(){
        this.props.navigation.goBack()
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

                        <Text style={styles.titre}>Transferts</Text>

                    </View>

                    <View style={styles.body}>

                        <Image source={require('../../images/logo_header_cie.png')} style={styles.logo_header}/>

                        <Text style={styles.introduction}>Veuillez valider les informations :</Text>


                <View style={styles.bloc_recap}>

                        <Text style={styles.text_tire}>Référence Client</Text>
                        <Text style={styles.texte_valeur}>{this.state.refClient}</Text>

                        <Text style={styles.text_tire}>Numéro de la facture</Text>
                        <Text style={styles.texte_valeur}>{this.state.numeroFacture}</Text>

                        <Text style={styles.text_tire}>Date limite de paiement</Text>
                        <Text style={styles.texte_valeur}>12/01/2024</Text>

                        <Text style={styles.text_tire}>Montant (en Fcfa)</Text>
                        <Text style={styles.texte_valeur}>{this.state.montantTransaction}</Text>

                        <Text style={styles.text_tire}>Frais (en Fcfa)</Text>
                        <Text style={styles.texte_valeur}>{this.state.frais}</Text>

                        <Text style={styles.text_total_titre}>TOTAL A PAYER (en Fcfa)</Text>
                        <Text style={styles.text_total_valeur}>{this.state.frais+this.state.montantTransaction}</Text>

                </View>

                <View style={styles.bloc_boutons}>

                    <View style={styles.view_btn_continuer}>
                        <TouchableOpacity style={styles.bouton_fleche_continuer}
                            onPress={() => this._sendFakeTransaction()}>
                            <Image source={require('../../images/ic_arrow_continuer.png')} style={styles.btn_retour}/>
                        </TouchableOpacity>
                    </View>
                </View>

                    </View>

                    {this._displayLoader()}

                    <Modal isVisible={this.state.isModalVisible}
                        animationIn="tada">
                        <View style={styles.modal_succes}>
                            
                            <Image source={require('../../images/ic_success.png')} style={styles.image_success}/>
                            
                            <Text style={styles.text_succes1}>Votre facture a été payée</Text>
                            <Text style={styles.text_succes2}>avec succès !</Text>

                            <TouchableOpacity style={styles.bouton_continuer}
                                onPress={() => this._ok()}>
                                <Text style={styles.text_contact}>OK</Text>
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

    _ok() {
        this.setState({
            isModalVisible: false
        })
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ 
                routeName: 'Accueil',
                params: {
                    dataUser: this.detailsUser,
                    codePin: this.codePinNiekh
                } })],
        });
        this.props.navigation.dispatch(resetAction)
    }

}


export default FactureResume;