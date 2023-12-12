import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import moment from 'moment';
import * as Font from 'expo-font';
import { customFonts } from '../../variables/fonts';
import AppLoading from 'expo-app-loading';
import { styles } from './TransactionItemStyles';

class TransactionItem extends React.Component {

    state = {
        fontsLoaded: false
      };

    constructor(props) {
        super(props);
        
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

    _render() {

        const { transaction } = this.props;

        return(
            <View style={styles.bloc}>

                <View style={styles.ligne1}>

                    <View style={styles.nom_service}><Text style={styles.text_service}>{transaction.codeService}</Text></View>

                    <View style={styles.montant}><Text style={styles.text_montant}>{Math.round(transaction.montant)} fcfa</Text></View>

                </View>

                <View style={styles.ligne2}>

                    <View style={styles.nom_partenaire}><Text style={styles.text_partenaire}>{transaction.numeroBeneficiaire}  </Text></View>

                    <View style={styles.date}><Text style={styles.text_date}>{moment(new Date(transaction.dateCreation)).format('DD/MM/YYYY HH:mm')}</Text></View>

                </View>

            </View>
        )
    }

}



export default TransactionItem;