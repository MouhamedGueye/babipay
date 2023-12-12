import base64 from 'react-native-base64';

const BASE_URL = "http://185.98.139.160/paysen-wallet/part/api2/";

export function inscription(numero, prenom, nom, codePays){

    var contextUrl = 'inscriptionClient';
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
            numero: numero,
            prenom: prenom,
            nom: nom,
            codePays: codePays
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function validerCodeOtp(numero, code) {

    var contextUrl = 'valInscriptionClient';
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
            numero: numero,
            codeSecret: code
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function defineCodePin(numero, pin) {

    var contextUrl = 'creationCodePINClient';
    const fullUrl = BASE_URL + contextUrl;

    var body = JSON.stringify({
        numero: numero,
        codePIN: pin
    })
    console.log(fullUrl+body)
    return fetch(fullUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': "Basic " + base64.encode("QSzMTcVqSoGyGDgaaOF7J2DPtsoeftVDLz8bCZ3f63OfVuY0cz" + ":" + "vqV58rqOnKHWhOtUyI7xPW9KQ7CGoFeDI5J")
        },
        body: JSON.stringify({
            numero: numero,
            codePIN: pin
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}

export function authentification(numero, pin) {

    var contextUrl = 'authentificationClient';
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
            numero: numero,
            codePIN: pin
        })
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
}