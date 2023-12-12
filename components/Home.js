import React from 'react';
import { View, Text, ActivityIndicator, ScrollView, Image, FlatList, ImageBackground } from 'react-native'
import { TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import { customFonts } from '../variables/fonts';
import AppLoading from 'expo-app-loading';
import TransactionItem from './reporting/TransactionItem';
import { getBalance, getLastTransactions } from '../api/TransApi';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_DETAILS } from '../variables/constants';
import Modal from 'react-native-modal';
import { NavigationActions, StackActions } from 'react-navigation';
import { styles } from './HomeStyles';

class Home extends React.Component {

    expTransactions = [
        {
            id: 424,
            montant: 100.0,
            codeService: "SN_CASHOUT_PAYSEN",
            commission: 60.0,
            frais: 0.0,
            tokenTX: "1632017329579",
            latitude: "15675759923221",
            longitude: "15675759923221",
            tag: "SUCCESS",
            dateCreation: 1632017329000,
            numeroBeneficiaire: "777135431",
            prenomBeneficiaire: "Modou",
            deviseDestinataire: "XOF",
            paysDestinataire: "SN",
            codePays: "SN"
          }
    ]

    state = {
        fontsLoaded: false,
        erreur: '',
        definePin: true,
        sourceImg: '',
        solde: '',
        isLoading: false,
        isLoadingSolde: false,
        isLoadingTransactions: false,
        noTransaction: false,
        listTransactionsToShow: [],
        openModalLogout: false,
        codePin: ""
      };

    constructor(props) {
        super(props);
        this.numero = "";
        this.prenom = "";
        this.nom = "";
        this.detailsUserCon = ""
        

    }

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
        this.setState({
            sourceImg: require('../images/ic_user_default.png')
        })
        this.numero = this.props.navigation.state.params.dataUser.numero;
        this.prenom = this.props.navigation.state.params.dataUser.prenom;
        this.nom = this.props.navigation.state.params.dataUser.nom;
        this.state.codePin = this.props.navigation.state.params.codePin;
        this._getSoldeFromApi()
        this._getLastTransactionsFromApi()
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

    _displayLoaderSolde(){

        if(this.state.isLoadingSolde){
            return (
                <View>
                    <ActivityIndicator size='small' />
                </View>
            );
        }  else {
            return(
                <View style={styles.bloc_solde1}>
                    <Image source={require('../images/ic_show.png')} style={styles.img_show} />

                    <View>
                        <Text style={styles.titre_solde}>Solde</Text>
                        <Text style={styles.content_solde}>{this.state.solde} fcfa</Text>
                    </View>
                </View>
            )
        }
    }

    _displayLoaderTransactions(){

        if(this.state.isLoadingTransactions){
            return (
                <View style={styles.loader_trx}>
                    <ActivityIndicator size='large' />
                </View>
            );
        }  else {

            if(this.state.noTransaction){
                return(
                    <View style={styles.no_transaction}>
                        <Text style={styles.no_transaction_text}>Aucune transaction trouvée</Text>
                    </View>
                )
            } else {
                return(
                <View>
                    <FlatList
                    style={styles.list_transactions}
                    data={this.state.listTransactionsToShow}
                    renderItem={({item}) => <TransactionItem transaction={item} />}/>

                    <TouchableOpacity style={styles.bouton_voir}
                        onPress={() => this._voirPlus()}>
                        <Text style={styles.text_voir} >Voir plus</Text>
                    </TouchableOpacity>
                </View>
            )
            }
            
        }
    }


    _render() {

        return(
            <View style={styles.generalView}>
                <ScrollView style={styles.generalViewScrol}>

                    <View style={styles.header}>
                        <TouchableOpacity style={styles.img_profil}
                        onPress={() => this._deconnexion()}>
                            <Image source={require('../images/user.png')} style={styles.image_profil}/>
                        </TouchableOpacity>

                        <Text style={styles.nomApp}>BABI PAY</Text>

                        <TouchableOpacity style={styles.img_notif}>
                            <Image source={require('../images/ic_notification.png')} style={styles.image_notif}/>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.headerSecond}>

                        <TouchableOpacity style={styles.bloc_qr}>
                            <Image source={require('../images/ic_qr_example.png')} style={styles.image_qr}/>
                            <Text style={styles.text_payez}>Payez</Text>
                        </TouchableOpacity>

                        <View  style={styles.bloc_solde}>

                            {this._displayLoaderSolde()}

                        </View>

                    </View>

                    <View style={styles.bloc_content}>
                        <ImageBackground source={require('../images/background_pagne.png')} resizeMode="cover" style={styles.imageBacground}>


                        <View style={styles.bloc_menu}>

                            <View style={styles.btn_transferts}>
                                <TouchableOpacity style={styles.btn_touchable}
                                onPress={() => this._btnTransferts()}>
                                    <View style={styles.btn_menu}>
                                        <Image source={require('../images/ic_transferts.png')} style={styles.image_btn_menu}/>
                                        <Text style={styles.text_btn_menu}>Transferts</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.btn_services}>
                                <TouchableOpacity
                                onPress={() => this._btnServices()}>
                                    <View style={styles.btn_menu}>
                                        <Image source={require('../images/ic_services.png')} style={styles.image_btn_menu}/>
                                        <Text style={styles.text_btn_menu}>Factures</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                            <View style={styles.btn_transferts}>
                                <TouchableOpacity
                                onPress={() => this._btnRecharge()}>
                                    <View style={styles.btn_menu}>
                                        <Image source={require('../images/ic_recharger.png')} style={styles.image_btn_menu}/>
                                        <Text style={styles.text_btn_menu}>Crédit</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        </View>

                        <View style={styles.bloc_transactions}>

                            <Text style={styles.titre_transactions}>Dernières transactions</Text>

                            {this._displayLoaderTransactions()}

                        </View>
                        </ImageBackground>

                    </View>


                </ScrollView>

                <Modal isVisible={this.state.openModalLogout}
                        animationIn="pulse">
                        <View style={styles.modal_succes}>
                            
                            <Text style={styles.bravo}>CONFIRMATION !</Text>
                            <Text style={styles.text_succes}>Confirmer la deconnexion ?</Text>

                            <View style={styles.boutons_modal}>
                                <TouchableOpacity style={styles.bouton_non}
                                    onPress={() => this._btnNon()}>
                                    <Text style={styles.text_non} >Non</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.bouton_oui}
                                    onPress={() => this._btnOui()}>
                                    <Text style={styles.text_oui} >Oui</Text>
                                </TouchableOpacity>

                            </View>
                            

                            {/* <Button title="Hide modal" onPress={toggleModal} /> */}

                        </View>
                    </Modal>

                {this._displayLoader()}

                

            </View>
        )
    }

    _btnTransferts(){
        this.props.navigation.navigate('HomeTransferts',
        {
            // dataUserCon: data,
            dataUser: this.props.navigation.state.params.dataUser,
            codePin: this.state.codePin
        })
    }

    _btnServices(){
        this.props.navigation.navigate('HomeFactures',
        {
            // dataUserCon: data,
            dataUser: this.props.navigation.state.params.dataUser,
            codePin: this.state.codePin
        })
    
    }

    _btnRecharge(){
        
    }

    _btnNon() {
        
        this.setState({
            openModalLogout: false
        })

    }

    _btnOui() {

        this.setState({
            openModalLogout: false
        })
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ 
                routeName: 'Login',
                params: {
                    dataUser: this.detailsUser,
                    codePin: this.codePinNiekh
                } })],
        });
        this.props.navigation.dispatch(resetAction)
    }

    _voirPlus(){

    }

    _getSoldeFromApi(){

        this.setState( { 
            isLoadingSolde: true
        });

        var loginClient = this.numero
        var numeroCompte = this.numero
        var codePin = this.props.navigation.state.params.codePin;

        getBalance(loginClient, numeroCompte, codePin)
        .then(data => {
            //Traitement des infos
            if(data.errorCode != null){
                if(data.errorCode == '200'){
                    //Enregistrer en local numero et nom
                    this.setState({
                        isLoadingSolde: false,
                        solde: data.infoCompte.solde
                    })
                } else {
                    this.setState({
                        isLoadingSolde: false,
                        solde: '-'
                    });
                }
            }
            
            //Enlever le loader
        //    this.setState( { isLoadingSolde: false});
        })
        .catch(error => {

            //Enlever le loader
            this.setState( { 
                isLoadingSolde: false,
                solde: '-'
            });
        })
    }

    _getLastTransactionsFromApi(){

        this.setState( { 
            isLoadingTransactions: true,
            listTransactionsToShow: []
        });

        getLastTransactions(this.numero)
        .then(data => {
            //Traitement des infos
            if(data.errorCode != null){
                if(data.errorCode == '200'){
                    //Enregistrer en local numero et nom
                    if(data.listTransaction != null && data.listTransaction.length>0){
                        this.setState({
                            isLoadingTransactions: false,
                            listTransactionsToShow: data.listTransaction,
                            noTransaction: false
                        })
                    } else {
                        this.setState({
                            isLoadingTransactions: false,
                            listTransactionsToShow: [],
                            noTransaction: true
                        })
                    }
                    
                } else {
                    this.setState({
                        isLoadingTransactions: false,
                        noTransaction: true
                    });
                }
            }
            
            //Enlever le loader
        //    this.setState( { isLoadingSolde: false});
        })
        .catch(error => {

            //Enlever le loader
            this.setState( { 
                isLoadingTransactions: false,
                noTransaction: true
            });
        })
    }

    _deconnexion(){

        this.setState({
            openModalLogout: true
        })
    }
}

const getData = async () => {
    try {
       return await AsyncStorage.getItem(KEY_DETAILS)
      
    } catch(e) {
      // error reading value
    }
  }



export default Home;