import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet, ScrollView, Image, TextInput, FlatList } from 'react-native'
import {colorBackgroundGray, colorTextButtonMenuGray, primary, secondary } from '../../variables/colors'
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as Font from 'expo-font';
import { customFonts } from '../../variables/fonts';
import AppLoading from 'expo-app-loading';
import Modal from 'react-native-modal';
import { styles } from './HomeFacturesStyles';


class HomeFactures extends React.Component {

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
        isVisibleOngletOthers: false,
        facturiersList : [
            { 
                id: '1', 
                title: 'Cie',
                image: require("../../images/facture_cie.png")
            },
            { 
                id: '2', 
                title: 'Sodeci',
                image: require("../../images/facture_sodeci.png")
            },,
            { 
                id: '3', 
                title: 'Oolu',
                image: require("../../images/facture_oolu.png")
            },
          ]

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

                        <Text style={styles.titre}>Factures</Text>

                    </View>

                    <View style={styles.body}>

                    <Text style={styles.introduction}>Choisissez la facture que vous souhaitez régler :</Text>
                    <View style={styles.bloc_services}>
                        <TouchableOpacity
                            onPress={() => this._goToFacturier('cie')}>
                                <Image source={require('../../images/facture_cie.png')} style={styles.imageItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            >
                                <Image source={require('../../images/facture_sodeci.png')} style={styles.imageItem}/>
                        </TouchableOpacity>
                        
                        <TouchableOpacity
                            >
                                <Image source={require('../../images/facture_canal.png')} style={styles.imageItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            >
                                <Image source={require('../../images/facture_oolu.png')} style={styles.imageItem}/>
                        </TouchableOpacity>
                        <TouchableOpacity
                            >
                                <Image source={require('../../images/facture_hkb.png')} style={styles.imageItem}/>
                        </TouchableOpacity>
                        
                    </View>

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

    _goToFacturier(code){

        if(code=='cie'){
            this.props.navigation.navigate('FacturePutDetails',
            {
                // dataUserCon: data,
                dataUser: this.props.navigation.state.params.dataUser,
                codePin: this.state.codePin
            })
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

    _renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.title}</Text>
          <Image  style={styles.imageItem} source={item && item.image }/>
        </View>
      );

}

const facturiersList = [
    { 
        id: '1', 
        title: 'Cie',
        image: require("../../images/facture_cie.png")
    },
    { 
        id: '2', 
        title: 'Sodeci',
        image: require("../../images/facture_sodeci.png")
    },,
    { 
        id: '3', 
        title: 'Oolu',
        image: require("../../images/facture_oolu.png")
    },
  ];

  const abonnementsList = [
    { 
        id: '4', 
        title: 'Canal',
        image: require("../../images/facture_canal.png")
    },
    { 
        id: '5', 
        title: 'Pont HKB',
        image: require("../../images/facture_sodeci.png")
    },,
    { 
        id: '3', 
        title: 'Oolu',
        image: require("../../images/facture_oolu.png")
    },
  ];

  

export default HomeFactures;