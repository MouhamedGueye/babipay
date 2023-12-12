export function dolliNiekh(chaine) {

    var chaineToRet = chaine;

    var compteur = 0;
    var taille = chaine.length;

    if (taille > 0) {
        while (compteur < taille) {
            if (compteur == 10) {
                chaineToRet = rajouterLetrre(chaineToRet, '1', 10);
                taille++;
            } else if (compteur == 15) {
                chaineToRet = rajouterLetrre(chaineToRet, 'n', 15);
                taille++;
            } else if (compteur == 21) {
                chaineToRet = rajouterLetrre(chaineToRet, '7', 21);
                taille++;
            } else if (compteur == 16) {
                chaineToRet = rajouterLetrre(chaineToRet, 'o', 16);
                taille++;
            } else if (compteur == 22) {
                chaineToRet = rajouterLetrre(chaineToRet, 'u', 22);
                taille++;
            } else if (compteur == 3) {
                chaineToRet = rajouterLetrre(chaineToRet, 'C', 3);
                taille++;
            } else if (compteur == 9) {
                chaineToRet = rajouterLetrre(chaineToRet, 'h', 9);
                taille++;
            }

            compteur++;
        }
    }

    console.log(chaine+" = "+chaineToRet)
    return chaineToRet;

}

function rajouterLetrre(chaine, lettre, position){

    var ch = "";

    if (position < chaine.length) {
        for (var compt = 0; compt < chaine.length; compt++) {
            if (compt == position) {
                ch = chaine.substring(0, compt) + lettre + chaine.substring(compt);
                return ch;
            }
        }
    } else {
        return chaine + lettre;
    }

    return chaine;
}

export function dolliThiere(chaine){

    var template = "454153595449434B4554";

        var compteur = 0;
        var taille = chaine.length;
        var pos = "$";

        for (var i = 0; i < taille; i++) {
            var ps = positionAleatoire(template.length);
            template = rajouterLetrre(template, chaine.charAt(i), ps);
            pos = pos + ps + "$";
        }

        console.log(chaine+" = "+template + pos)
        return template + pos;
}

function positionAleatoire(max) {

    var rdm = 0;

    rdm = Math.round(Math.random() * max);
    console.log('rdm : '+rdm)
    return rdm;
}