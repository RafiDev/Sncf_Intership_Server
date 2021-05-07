exports.getInfoStateRames = function (array) {
    var statut = [];
    var libelle = [];

    var H1 = 0;
    var H2 = 0;
    var H3 = 0;
    var H4 = 0;

    var nbAnalyseRex_H1 = 0;
    var nbCloturé_H1 = 0;
    var nbEnCours_H1 = 0;
    var nbAttPieces_H1 = 0;
    var nbATraiter_H1 = 0;
    var nbRameAVigiler_H1 = 0;
    
    var nbAnalyseRex_H2 = 0;
    var nbCloturé_H2 = 0;
    var nbEnCours_H2 = 0;
    var nbAttPieces_H2 = 0;
    var nbATraiter_H2 = 0;
    var nbRameAVigiler_H2 = 0;

    var nbAnalyseRex_H3 = 0;
    var nbCloturé_H3 = 0;
    var nbEnCours_H3 = 0;
    var nbAttPieces_H3 = 0;
    var nbATraiter_H3 = 0;
    var nbRameAVigiler_H3 = 0;

    var nbAnalyseRex_H4 = 0;
    var nbCloturé_H4 = 0;
    var nbEnCours_H4 = 0;
    var nbAttPieces_H4 = 0;
    var nbATraiter_H4 = 0;
    var nbRameAVigiler_H4 = 0;

    for (let i = 0; i != array.length; i++) {
        statut.push(array[i]['Statut']);
        libelle.push(array[i]['Libellé de l\'événement']);     
    }

    for (let i = 0; i != statut.length && i != libelle.length; i++) {
        if (libelle[i].split('_')[1] === 'H1' && statut[i] === 'Analyse REX') {
            nbAnalyseRex_H1++;
        } else if (libelle[i].split('_')[1] === 'H1' && statut[i] === 'Cloturé') {
            nbCloturé_H1++;
        } else if (libelle[i].split('_')[1] === 'H1' && statut[i] === 'En cours') {
            nbEnCours_H1++;
        } else if (libelle[i].split('_')[1] === 'H1' && statut[i] === 'Att pièces') {
            nbAttPieces_H1++;
        } else if (libelle[i].split('_')[1] === 'H1' && statut[i] === 'A traiter') {
            nbATraiter_H1++;
        } else if (libelle[i].split('_')[1] === 'H1' && statut[i] ===  'Rame à vigiler') {
            nbRameAVigiler_H1++;
        }
        H1++;
    }

    for (let i = 0; i != statut.length && i != libelle.length; i++) {
        if (libelle[i].split('_')[1] === 'H2' && statut[i] === 'Analyse REX') {
            nbAnalyseRex_H2++;
        } else if (libelle[i].split('_')[1] === 'H2' && statut[i] === 'Cloturé') {
            nbCloturé_H2++;
        } else if (libelle[i].split('_')[1] === 'H2' && statut[i] === 'En cours') {
            nbEnCours_H2++;
        } else if (libelle[i].split('_')[1] === 'H2' && statut[i] === 'Att pièces') {
            nbAttPieces_H2++;
        } else if (libelle[i].split('_')[1] === 'H2' && statut[i] === 'A traiter') {
            nbATraiter_H2++;
        } else if (libelle[i].split('_')[1] === 'H2' && statut[i] ===  'Rame à vigiler') {
            nbRameAVigiler_H2++;
        }
        H2++;
    }

    for (let i = 0; i != statut.length && i != libelle.length; i++) {
        if (libelle[i].split('_')[1] === 'H3' && statut[i] === 'Analyse REX') {
            nbAnalyseRex_H3++;
        } else if (libelle[i].split('_')[1] === 'H3' && statut[i] === 'Cloturé') {
            nbCloturé_H3++;
        } else if (libelle[i].split('_')[1] === 'H3' && statut[i] === 'En cours') {
            nbEnCours_H3++;
        } else if (libelle[i].split('_')[1] === 'H3' && statut[i] === 'Att pièces') {
            nbAttPieces_H3++;
        } else if (libelle[i].split('_')[1] === 'H3' && statut[i] === 'A traiter') {
            nbATraiter_H3++;
        } else if (libelle[i].split('_')[1] === 'H3' && statut[i] ===  'Rame à vigiler') {
            nbRameAVigiler_H3++;
        }
        H3++;
    }

    for (let i = 0; i != statut.length && i != libelle.length; i++) {
        if (libelle[i].split('_')[1] === 'H4' && statut[i] === 'Analyse REX') {
            nbAnalyseRex_H4++;
        } else if (libelle[i].split('_')[1] === 'H4' && statut[i] === 'Cloturé') {
            nbCloturé_H4++;
        } else if (libelle[i].split('_')[1] === 'H4' && statut[i] === 'En cours') {
            nbEnCours_H4++;
        } else if (libelle[i].split('_')[1] === 'H4' && statut[i] === 'Att pièces') {
            nbAttPieces_H4++;
        } else if (libelle[i].split('_')[1] === 'H4' && statut[i] === 'A traiter') {
            nbATraiter_H4++;
        } else if (libelle[i].split('_')[1] === 'H4' && statut[i] ===  'Rame à vigiler') {
            nbRameAVigiler_H4++;
        }
        H4++;
    }

    var data_statut = {
        "H1": {
            "Analyse REX": nbAnalyseRex_H1,
            "Cloturé": nbCloturé_H1,
            "En cours": nbEnCours_H1,
            "Att pièces": nbAttPieces_H1,
            "A traiter": nbATraiter_H1,
            "Rame à vigiler": nbRameAVigiler_H1,
            "Nombre de Statut total H1": H1
        }, "H2": {
            "Analyse REX": nbAnalyseRex_H2,
            "Cloturé": nbCloturé_H2,
            "En cours": nbEnCours_H2,
            "Att pièces": nbAttPieces_H2,
            "A traiter": nbATraiter_H2,
            "Rame à vigiler": nbRameAVigiler_H2,
            "Nombre de Statut total H2": H2
        }, "H3": {
            "Analyse REX": nbAnalyseRex_H3,
            "Cloturé": nbCloturé_H3,
            "En cours": nbEnCours_H3,
            "Att pièces": nbAttPieces_H3,
            "A traiter": nbATraiter_H3,
            "Rame à vigiler": nbRameAVigiler_H3,
            "Nombre de Statut total H3": H3
        }, "H4": {
            "Analyse REX": nbAnalyseRex_H4,
            "Cloturé": nbCloturé_H4,
            "En cours": nbEnCours_H4,
            "Att pièces": nbAttPieces_H4,
            "A traiter": nbATraiter_H4,
            "Rame à vigiler": nbRameAVigiler_H4,
            "Nombre de Statut total H4": H4
        }
    }
    
    return data_statut;
}