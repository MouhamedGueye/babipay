import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TextInput } from 'react-native'
import {colorBackgroundGray, colorTextButtonMenuGray, primary, secondary } from '../../variables/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { customFonts } from '../../variables/fonts';
import AppLoading from 'expo-app-loading';
import Modal from 'react-native-modal';
import { styles } from './HomeTransfertsStyles';


class HomeTransferts extends React.Component {

    state = {
        fontsLoaded: false,
        numero: '',
        erreur: '',
        isModalVisible: false,
        styleBoutonWallet: styles.bouton_onglet_actif,
        styleTextWallet: styles.text_onglet_actif,
        styleBoutonOthers: styles.bouton_onglet_inactif,
        styleTextOthers: styles.text_onglet_inactif,
        isVisibleOngletWallet: true,
        isVisibleOngletOthers: false

      };

    constructor(props) {
        super(props);
        // console.log(this.props)
        this.detailsUser = this.props.navigation.state.params.dataUser;
        this.codePinNiekh = this.props.navigation.state.params.codePin;
        // console.log(this.detailsUser);
        
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

    _renderViewIntra(){

        if(this.state.isVisibleOngletWallet){
            var myloop1 = [];
            var myloop2 = [];
            var myloop3 = [];
            for(let i = 1; i < 4; i++){
                myloop1.push(this._renderButtonKeypad(i));
                myloop2.push(this._renderButtonKeypad(i+3));
                myloop3.push(this._renderButtonKeypad(i+6));
            }

            return (
                <View style={styles.view_intra} hide={this.state.isVisibleOngletWallet}
                            >

                    <Text style={styles.introduction}>Veuillez renseigner le numéro du bénéficiaire :</Text>

                    <View>
                        <Text style={styles.erreur}>{this.state.erreur}</Text>
                    </View>

                    <View style={styles.form_numero}>

                        <View style={styles.bloc}><TextInput keyboardType="phone-pad" style={styles.one_item} onChangeText={(text) => this._validNumero(text)}>{this.state.numero}</TextInput></View>

                    </View>

                    <View style={styles.bloc_boutons}>

                        <View style={styles.view_btn_contacts}>
                            {/* <TouchableOpacity style={styles.bouton_contact}
                                onPress={() => this._openContact()}>
                                <Text style={styles.text_contact}>Contacts</Text>
                            </TouchableOpacity> */}
                        </View>

                        <View style={styles.view_btn_continuer}>
                            <TouchableOpacity style={styles.bouton_fleche_continuer}
                                onPress={() => this._goToNext()}>
                                <Image source={require('../../images/ic_arrow_continuer.png')} style={styles.btn_retour}/>
                            </TouchableOpacity>
                        </View>
                    </View>

                    
                </View>
        )
    
        }
    }

    __openContact(){

    }

    _goToNext(){
        this.props.navigation.navigate('TransfertMontant', 
        {
            dataUser: this.detailsUser,
            numeroBenef: this.state.numero,
            codePin: this.codePinNiekh
        })

    }

    _renderViewOthers(){
        if(this.state.isVisibleOngletOthers){

            return(
                <View style={styles.bloc_indisponible}>
                    <Text style={styles.text_indisponible}>Cette fonctionnalité est pour le moment indisponible !</Text>
                </View>
            )
        }
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

                        <View style={styles.onglets}>

                            <View style={this.state.styleBoutonWallet}>
                                <TouchableOpacity
                                    onPress={() => this._loadView('wallet')}>
                                    <Text style={this.state.styleTextWallet}>Babi</Text>
                                </TouchableOpacity>
                            </View>

                            <View  style={this.state.styleBoutonOthers}>
                                <TouchableOpacity
                                    onPress={() => this._loadView('others')}>
                                    <Text style={this.state.styleTextOthers}>Autres</Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                        {this._renderViewIntra()}
                        {this._renderViewOthers()}

                    </View>

                    {this._displayLoader()}

                    <Modal isVisible={this.state.isModalVisible}
                        animationIn="flash">
                        <View style={styles.modal_succes}>
                            
                            <Image source={require('../../images/ic_success.png')} style={styles.image_success}/>
                            
                            <Text style={styles.bravo}>B  R  A  V  O  !</Text>
                            <Text style={styles.text_succes}>Votre compte a été créé avec succès. Vous pouvez continuer en définissant votre code PIN :</Text>

                            <TouchableOpacity style={styles.bouton_continuer}
                                onPress={() => this._continuer()}>
                                <Text style={styles.text_contact}>Continuer</Text>
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
    
    _validNumero(text){
        this.state.numero = text;
    }

}


export default HomeTransferts;