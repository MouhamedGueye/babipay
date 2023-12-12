
import { StyleSheet } from 'react-native'
import {colorBackgroundGray, primary, secondary } from '../../variables/colors'

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

    introduction: {
        fontFamily: 'Poppins-Medium',
        color: '#707070',
        fontSize: 14,
        marginHorizontal: 25,
        textAlign: 'center',
        marginTop: 15
    },

    erreur: {
        fontFamily: 'Poppins-LightItalic',
        color: 'red',
        fontSize: 15,
        marginHorizontal: 25,
        textAlign: 'center',
        marginTop: 10
    },

    form_numero: {
        flexDirection: 'row', 
        backgroundColor: 'rgba(8, 22, 85, 0.07)',
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 15,
        alignContent: 'center',
        marginTop: 40
    },

    form_nom: {
        flexDirection: 'row', 
        backgroundColor: 'rgba(8, 22, 85, 0.07)',
        marginHorizontal: 5,
        borderRadius: 10,
        padding: 15,
        alignContent: 'center',
        marginTop: 40
    },

    edit_form: {
        height: 40,
        // backgroundColor: 'red',
        fontFamily: 'Poppins-Medium',
        flex: 1,
        fontSize: 15,
        marginHorizontal: 10,
        color: 'black'
    },

    icone_form: {

        alignSelf: 'center',
        //color: primary
    },

    bouton_connecter: {

        backgroundColor: primary,
        alignSelf: 'stretch',
        borderRadius: 50,
        paddingVertical: 12,
        paddingHorizontal: 'auto',
        minWidth: '70%',
        marginTop: 30,
        alignContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30,
        flexDirection: 'row',
    },

    text_connecter: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        marginLeft: '32%',
        marginRight: 10
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

})