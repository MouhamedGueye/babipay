import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'

import Tutoriel from '../components/Tutoriel'
import Login from '../components/Login'
import Formulaire from '../components/inscription/Formulaire'
import CodeOtp from '../components/inscription/CodeOtp'
import Home from '../components/Home'
import CodePin from '../components/inscription/CodePin'
import SplashScreen from '../components/SplashScreen'
import HomeTransferts from '../components/transferts/HomeTransferts'
import PutAmount from '../components/transferts/PutAmount'
import ResumeTransfert from '../components/transferts/ResumeTransfert'
import HomeFactures from '../components/factures/HomeFactures'
import FacturePutDetails from '../components/factures/FacturePutDetails'
import FactureResume from '../components/factures/FactureResume'


const AppNavigator = createStackNavigator({

    Splash: {
        screen: SplashScreen,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    AppTuto: {
        screen: Tutoriel,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    AppInscription: {
        screen: Formulaire,
        navigationOptions: {
            title: "Toto",
            headerShown : false,
        }
    },

    AppCodeOtp: {
        screen: CodeOtp,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    AppCodePin: {
        screen: CodePin,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    Login: {
        screen: Login,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    Accueil: {
        screen: Home,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    HomeTransferts: {
        screen: HomeTransferts,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    TransfertMontant: {
        screen: PutAmount,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    ResumeTransfert: {
        screen: ResumeTransfert,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    HomeFactures: {
        screen: HomeFactures,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    FacturePutDetails: {
        screen: FacturePutDetails,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    },

    FactureResume: {
        screen: FactureResume,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    }



})

const AppTest = createStackNavigator({

    AppTuto: {
        screen: ResumeTransfert,
        navigationOptions: {
            title: "Toto",
            headerShown : false
        }
    }

})


const styles = StyleSheet.create({
    
    icon: {
        width: 19,
        height: 19,
        alignItems: 'center',
        alignContent: 'center',
        //flex: 1,
        resizeMode: 'contain',
        // backgroundColor: 'red'
    }
})


export default createAppContainer(AppNavigator)