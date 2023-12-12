
import { colorTextButtonMenuGray, primary } from '../../variables/colors';
import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

    bloc: {
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 15,
        marginTop: 10
    }, 

    ligne1: {
        flex: 1,
        flexDirection: 'row'
    },

    ligne2: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 3
    },

    nom_service: {

        flexDirection: 'row',
        flex: 1
    },

    text_service: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: primary,
        // backgroundColor: 'red'
    },

    text_montant: {
        fontFamily: 'Poppins-Medium',
        fontSize: 14,
        color: primary,
        // backgroundColor: 'red'
    },

    nom_partenaire: {

        flexDirection: 'row',
        flex: 1
    },

    text_partenaire: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: colorTextButtonMenuGray,
        // backgroundColor: 'red'
    },

    text_date: {
        fontFamily: 'Poppins-Light',
        fontSize: 14,
        color: colorTextButtonMenuGray,
        // backgroundColor: 'red'
    },
    
})