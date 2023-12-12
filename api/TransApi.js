import base64 from 'react-native-base64';

const BASE_URL = "http://185.98.139.160/paysen-wallet/part/api2/";

export function getBalance(login, numero, code){

    var contextUrl = 'getBalance';
    const fullUrl = BASE_URL + contextUrl;

    console.log(fullUrl)
    return fetch(fullUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Basic " + base64.encode("QSzMTcVqSoGyGDgaaOF7J2DPtsoeftVDLz8bCZ3f63OfVuY0cz" + ":" + "vqV58rqOnKHWhOtUyI7xPW9KQ7CGoFeDI5J")
        },
        body: JSON.stringify({
            loginClient: login,
            numeroCompte: numero,
            codePIN: code
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function getLastTransactions(login){

    var contextUrl = 'listTransaction';
    const fullUrl = BASE_URL + contextUrl;

    console.log(fullUrl)
    return fetch(fullUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Basic " + base64.encode("QSzMTcVqSoGyGDgaaOF7J2DPtsoeftVDLz8bCZ3f63OfVuY0cz" + ":" + "vqV58rqOnKHWhOtUyI7xPW9KQ7CGoFeDI5J")
        },
        body: JSON.stringify({
            loginClient: login,
            "statut" : "FINISHED"
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function sendTransaction(login, mdp, body){

    var contextUrl = 'initiationTransactionB2C';
    const fullUrl = BASE_URL + contextUrl;

    console.log(fullUrl+" "+body)
    return fetch(fullUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Basic " + base64.encode("QSzMTcVqSoGyGDgaaOF7J2DPtsoeftVDLz8bCZ3f63OfVuY0cz" + ":" + "vqV58rqOnKHWhOtUyI7xPW9KQ7CGoFeDI5J")
        },
        body: JSON.stringify({
            loginApi: login,
            mdpApi : mdp,
            transaction: body
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}