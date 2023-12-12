
import { StyleSheet } from 'react-native'
import {colorBackgroundGray, colorBorderButtonMenuGray, colorTextButtonMenuGray, colorTextFraisGray, primary, secondary } from '../../variables/colors'

export const styles = StyleSheet.create({

    generalView: {
        // marginTop: 10,
        flex: 1,
        backgroundColor: primary
    },

    generalViewScrol: {

        flex: 1,
        // backgroundColor: 'red'
    },

    header: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 35,
        marginHorizontal: 10,
        alignItems: 'center'
    },

    btn_retour_touchable: {
        // backgroundColor: 'red',
        flexDirection: 'column',
        textAlign: 'center',
        padding: 10
    },

    btn_retour: {
        width: 30,
        height: 20,
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        resizeMode: 'contain'
        // flex: 1
    },

    titre: {
        fontFamily: 'Poppins-Medium',
        color: 'white',
        marginHorizontal: 1,
        fontSize: 20
    },

    body: {
        backgroundColor: colorBackgroundGray,
        marginTop: 10,
        paddingVertical: 30,
        paddingHorizontal: 15,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        flex: 1,
        height: 800
    },

    onglets: {
        backgroundColor: 'rgba(10, 5, 40, 0.14)',
        borderRadius: 50,
        marginHorizontal: 20,
        padding: 4,
        flexDirection: 'row',
    },

    bouton_onglet_actif: {
        backgroundColor: secondary,
        flex: 1,
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 40
        
    },

    text_onglet_actif: {
        color: 'white',
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },

    text_onglet_inactif: {
        color: colorTextButtonMenuGray,
        fontSize: 17,
        fontFamily: 'Poppins-Medium',
        textAlign: 'center'
    },

    bouton_onglet_inactif: {
        flex: 1,
        borderRadius: 50,
        paddingHorizontal: 15,
        paddingVertical: 10
    },

    text_indisponible: {
        fontSize: 17,
        fontFamily: 'Poppins-LightItalic',
        // flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        marginTop: 40,
        textAlign: 'center',
        marginHorizontal: 30
    },

    introduction: {
        fontFamily: 'Poppins-Medium',
        color: '#707070',
        fontSize: 15,
        marginHorizontal: 25,
        textAlign: 'center',
        marginTop: 25
    },

    form_numero: {
        flexDirection: 'row', 
        padding: 15,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },

    one_item: {

        // width: 50,
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        fontSize: 35,
        justifyContent: 'center',
        textAlignVertical: 'center',
        fontFamily: 'Poppins-SemiBold'
    },

    bloc: {

        // width: 50,
        height: 70,
        backgroundColor: 'rgba(8, 22, 85, 0.07)',
        marginHorizontal: 5,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    bouton_resend: {

        width: 50,
        height: 50,
        backgroundColor: secondary,
        borderRadius: 10,
        marginHorizontal: 5,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    edit_form: {
        height: 40,
        // backgroundColor: 'red',
        fontFamily: 'Poppins-Medium',
        flex: 1,
        fontSize: 20,
        marginHorizontal: 10,
        color: primary
    },

    icone_form: {

        alignSelf: 'center',
        //color: primary
    },

    bouton_connecter: {

        backgroundColor: primary,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 'auto',
        minWidth: '60%',
        marginTop: 30,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: '30%'
    },

    text_connecter: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginRight: 10
    },

    btn_pad: {
        fontFamily: 'Poppins-Bold',
        fontSize: 40,
        // backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },

    keyboard: {
        marginTop: 20,
        alignSelf: 'center'
    },

    keyboard_sh: {
        marginTop: 20,
        flexDirection: 'row'
    },

    bouton_clavier: {
        width: 60,
        height: 60,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow',
        marginHorizontal: 10
    },

    loader: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#000000',
        opacity: 0.2
    },

    erreur: {
        fontFamily: 'Poppins-LightItalic',
        color: 'red',
        fontSize: 18,
        marginHorizontal: 25,
        textAlign: 'center',
        marginTop: 10
    },

    image_success: {

        alignSelf: 'center'
    },

    modal_succes: {

        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
        borderColor: secondary,
        borderWidth: 2
    },

    bravo: {
        fontFamily: 'Poppins-Medium',
        fontSize: 25,
        alignSelf: 'center',
        marginTop: 30
    },

    text_succes1: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        marginHorizontal: 15,
        marginTop: 40,
        textAlign: 'center',
        color: colorTextFraisGray
    },

    text_succes2: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        marginHorizontal: 15,
        textAlign: 'center',
        color: primary
    },

    bouton_continuer: {

        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 30,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderColor: primary,
        borderWidth: 1
    },

    bloc_boutons: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20

    },

    bloc_frais: {
        flexDirection: 'row',
        marginTop: 10,
        marginHorizontal: 20
    },

    view_btn_contacts: {

    },

    bouton_contact: {
        backgroundColor: 'rgba(7, 22, 85, 0.15)',
        borderColor: primary,
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 9
    },

    text_contact: {
        color: primary,
        fontSize: 17,
        fontFamily: 'Poppins-Medium'
    },

    bouton_fleche_continuer: {
        backgroundColor: secondary,
        borderRadius: 50,
        paddingHorizontal: 25,
        paddingVertical: 10,
        alignSelf: 'flex-end',
        right: 0,
        alignItems: 'flex-end'
    },

    view_btn_continuer: {
        flex: 1
    },

    texte_fleche: {
        fontFamily: 'Poppins-Medium',
        fontSize: 40,
        color: secondary,
        marginEnd:10
    },

    text_frais: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: colorTextFraisGray
    },

    text_value_frais: {
        fontFamily: 'Poppins-Medium',
        fontSize: 15,
        color: colorBorderButtonMenuGray
    },

    bloc_recap: {
        marginHorizontal: 20,
        borderRadius: 20,
        backgroundColor: 'white',
        borderColor: secondary,
        borderWidth: 1,
        paddingHorizontal: 15,
        paddingVertical: 10
    },

    text_tire: {
        marginTop: 12,
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: colorTextFraisGray
    },

    texte_valeur: {
        marginBottom: 5,
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: colorTextButtonMenuGray
    },

    text_total_titre: {
        marginTop: 16,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Poppins-Medium',
        color: colorTextFraisGray
    },

    text_total_valeur: {
        marginTop: 2,
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontFamily: 'Poppins-SemiBold',
        color: colorTextButtonMenuGray
    }

})