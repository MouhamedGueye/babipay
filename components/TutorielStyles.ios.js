
import {primary, secondary } from '../variables/colors'
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    generalView: {
        // marginTop: 10,
        flex: 1,
        backgroundColor: '#FFFFFF'
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },

    logo: {
        position: 'absolute',
        top: 100,
        alignSelf: 'center',
        height: 160,
        width: 250
    },

    imageslide: {
        width: 320,
        height: 320,
      },
      
      text: {
        fontSize: 16
      },

    slide: {
        flex: 1,
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        // height: 300
    },
    
    slides: {
      flex: 1,
    //   backgroundColor: 'red'
      // marginTop: 100
    },
    title: {
      fontSize: 20,
      color: '#DBD6D0',
      textAlign: 'center'

    },
    textTut: {
      fontSize: 15,
      fontFamily: 'Poppins-Regular',
      margin: 15,
      textAlign: 'center',
      color: primary
    },
    imageTut: {
      alignContent: 'center',
      marginLeft: 'auto',
      marginRight: 'auto'
    },

    view_buttons: {
        backgroundColor: primary,
        paddingVertical: 30,
        position: 'absolute',
        bottom: 0,
        minHeight: 100,
        width: '100%',
        alignSelf: 'center',
        borderRadius: 20
    },

    bouton_connecter: {

        backgroundColor: secondary,
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        minWidth: '70%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },

    bouton_inscrire: {

        backgroundColor: secondary,
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 15,
        minWidth: '70%',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },

    text_connecter: {
        fontSize: 20,
        color: 'white',
        fontFamily: 'Poppins-Medium'
    }
})