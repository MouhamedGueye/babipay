
import {primary, secondary, colorTextBlack, colorTextFraisGray, colorBackgroundGray } from '../variables/colors'
import {StyleSheet} from 'react-native'


export const styles = StyleSheet.create({

    generalView: {
        // marginTop: 10,
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    logo: {
        position: 'absolute',
        top: 50,
        alignSelf: 'center',
        width: 50,
        height: 50
    },

    body: {
        marginTop: 160,
        backgroundColor: primary,
        minHeight: 100,
        flex: 1,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        height: 800
    },

    image_login: {
        alignSelf: 'center',
        top: -90,
        height: 160,
        width: 250
        // backgroundColor: 'red'
    }, 

    intro: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        alignSelf: 'stretch',
        // backgroundColor: 'red',
        position: 'relative',
        top: -80,
        marginHorizontal: 25
    },

    form: {

        top: -20,
        // backgroundColor: 'red',
    },

    form_identifiant: {
        flexDirection: 'row', 
        backgroundColor: 'rgba(255, 255, 255, 0.47)',
        marginHorizontal: 40,
        borderRadius: 10,
        padding: 15,
        alignContent: 'center'
    }, 

    form_password: {
        flexDirection: 'row', 
        backgroundColor: 'rgba(255, 255, 255, 0.47)',
        marginHorizontal: 40,
        borderRadius: 10,
        padding: 15,
        alignContent: 'center',
        marginTop: 20
    }, 

    edit_form: {
        flex: 1,
        fontSize: 16,
        marginHorizontal: 10,
        color: colorTextBlack
    },

    bouton_connecter: {

        backgroundColor: secondary,
        alignSelf: 'stretch',
        borderRadius: 50,
        paddingVertical: 10,
        minWidth: '70%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        marginHorizontal: 40,
    },

    text_connecter: {
        fontSize: 17,
        color: 'white',
        fontFamily: 'Poppins-Medium'
    },

    bouton_fingerprint: {
        marginTop: 30,
        alignSelf: 'center',
        
    },

    btn_fingerprint: {
        width: 100,
        height:100
    },
    
    erreur: {
        fontFamily: 'Poppins-LightItalic',
        color: 'red',
        fontSize: 13,
        marginHorizontal: 25,
        textAlign: 'center',
        marginTop: -65,
        // backgroundColor: 'red',
        position: 'relative',

    },

    bloc_erreur: {
        backgroundColor: 'red',
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

    login_inscription: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        fontFamily: 'Poppins-LightItalic',
        paddingVertical: 10
    },

    text_inscription: {

        fontFamily: 'Poppins-LightItalic',
        color: 'white'
    }

})