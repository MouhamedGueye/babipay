
import {primary, secondary } from '../variables/colors'
import {StyleSheet} from 'react-native'

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
        marginTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center'
    },

    headerSecond: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 30,
        paddingHorizontal: 15,
        alignItems: 'center'
    },

    img_profil: {
        width: 60,
        height: 60,
        backgroundColor: 'white',
        overflow: 'hidden',
        borderRadius: 40,
        borderColor: secondary,
        borderWidth: 1
    },

    image_profil: {
        height: 60,
        width: 60,
        borderRadius: 40,
        padding: 2,
        resizeMode: 'contain'
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

    nomApp: {
        fontFamily: 'Poppins-Medium',
        fontSize: 30,
        color: 'rgba(255, 255, 255, 0.4)',
        alignSelf: 'center',
        marginHorizontal: '22%'
    },

    img_notif: {
        alignContent: 'flex-end',
        alignSelf: 'flex-end',
        alignItems: 'flex-end'
    },

    bloc_qr: {

        width: 75,
        height: 75,
        alignContent: 'center',
        alignItems: 'center'
    },

    image_qr: {

        width: 55,
        height: 55,
        marginBottom: -3,
        resizeMode: 'contain'

    },

    text_payez: {
        color: 'white',
        marginTop: 5,
        fontFamily: 'Poppins-Medium',
        fontSize: 17
    },

    bloc_solde: {
        
        width: 75,
        height: 75,
        alignItems: 'flex-end',
        // backgroundColor: 'red',
        flex: 1,
        flexDirection: 'column',
        paddingEnd: 1
    },

    bloc_solde1: {
        alignItems: 'center',
        // backgroundColor: 'yellow',
        flex: 1,
        flexDirection: 'row',
    },

    img_show: {
        marginHorizontal: 15
    },

    titre_solde: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: 'white',
        alignSelf: 'flex-end'
    },

    content_solde: {
        fontFamily: 'Poppins-Medium',
        fontSize: 20,
        color: 'white',
        alignSelf: 'flex-end'
    },

    bloc_content: {
        backgroundColor: colorBackgroundGray,
        flex: 1,
        minHeight: 700,
        marginTop: 60
    },
    
    bloc_menu: {
        backgroundColor: 'white',
        minHeight: 80,
        borderColor: secondary,
        borderWidth: 2,
        borderRadius: 20,
        marginTop: -40,
        marginHorizontal: 10,
        flexDirection: 'row',
        // flex: 1
    },

    btn_menu: {

        flexDirection: 'column',
        // backgroundColor: 'yellow',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center'
        // flex: 1
    },

    btn_transferts: {

        height: 80,
        // backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center'
    },


    btn_services : {

        height: 80,
        // backgroundColor: 'red',
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderLeftColor: colorBorderButtonMenuGray,
        borderRightColor: colorBorderButtonMenuGray,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },

    image_btn_menu: {
        width: 30,
        height: 30,
        marginBottom: 1
    },

    text_btn_menu: {
        color: colorTextButtonMenuGray,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        marginTop: 4
    },

    bloc_transactions: {

        marginTop: 30,
        marginHorizontal: 10
    },

    titre_transactions: {
        color: colorTextButtonMenuGray,
        fontFamily: 'Poppins-Medium',
        fontSize: 17
    },

    list_transactions: {
        marginTop: 5
    },

    bouton_voir: {

        backgroundColor: secondary,
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 'auto',
        minWidth: '40%',
        marginTop: 30,
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginHorizontal: '20%'
    },

    text_voir: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'Poppins-Medium'
    },

    loader_trx: {
        marginTop: 50
    },

    no_transaction: {
        marginTop: 50,
        flex: 1,
    },

    no_transaction_text: {

        fontFamily: 'Poppins-LightItalic',
        fontSize: 18,
        color: colorTextButtonMenuGray,
        textAlign: 'center'
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
        marginTop: 30,
        color: primary
    },

    text_succes: {
        fontFamily: 'Poppins-Medium',
        fontSize: 18,
        marginHorizontal: 15,
        marginTop: 40,
        textAlign: 'center'
    },

    bouton_oui: {

        height: 50,
        backgroundColor: secondary,
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 'auto',
        minWidth: '30%',
        marginTop: 30,
        marginHorizontal: 10
    },

    bouton_non: {

        height: 50,
        backgroundColor: 'white',
        borderRadius: 50,
        paddingVertical: 15,
        paddingHorizontal: 'auto',
        minWidth: '30%',
        marginTop: 30,
        borderColor: secondary,
        borderWidth: 2,
        marginHorizontal: 10
    },

    boutons_modal: {
        flexDirection: 'row',
        // backgroundColor: 'red',
        justifyContent: 'center'
    },

    text_oui:  {
        color: 'white',
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        flex: 1,
        textAlign: 'center'
    },

    text_non:  {
        color: secondary,
        fontFamily: 'Poppins-Medium',
        fontSize: 16,
        flex: 1,
        textAlign: 'center'
    },
    

})