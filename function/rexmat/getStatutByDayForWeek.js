function isUnique(item, position, array) {
    return array.indexOf(item) === position;
}

function weekH1(statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'A traiter' && libelle[i].split('_')[1] === 'H1' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbATraiter;
                if (isNaN(weekDataATraiter[info.filter(isUnique)[j-1]])) {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]];
                } else {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]] - weekDataATraiter[info.filter(isUnique)[j-1]];
                }
                objATraiter[info.filter(isUnique)[j]] = Atraiter;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Analyse REX' && libelle[i].split('_')[1] === 'H1' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbRex;
                if (isNaN(weekDataRex[info.filter(isUnique)[j-1]])) {
                    Rex = weekDataRex[info.filter(isUnique)[j]];
                } else {
                    Rex = weekDataATraiter[info.filter(isUnique)[j]] - weekDataRex[info.filter(isUnique)[j-1]];
                }
                objRex[info.filter(isUnique)[j]] = Rex;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Rame à vigiler' && libelle[i].split('_')[1] === 'H1' && date[i] === info.filter(isUnique)[j]) {
                weekDataRameAVigiler[info.filter(isUnique)[j]] = ++nbRameAVigiler;
                if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[j-1]])) {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]];
                } else {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]] - weekDataRameAVigiler[info.filter(isUnique)[j-1]];
                }
                objRameAVigiler[info.filter(isUnique)[j]] = RameAVigiler;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'En cours' && libelle[i].split('_')[1] === 'H1' && date[i] === info.filter(isUnique)[j]) {
                weekDataEnCours[info.filter(isUnique)[j]] = ++nbEnCours;
                if (isNaN(weekDataEnCours[info.filter(isUnique)[j-1]])) {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]];
                } else {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]] - weekDataEnCours[info.filter(isUnique)[j-1]];
                }
                objEnCours[info.filter(isUnique)[j]] = EnCours;
            } 
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    };

    return data;
}

function weekH2(statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'A traiter' && libelle[i].split('_')[1] === 'H2' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbATraiter;
                if (isNaN(weekDataATraiter[info.filter(isUnique)[j-1]])) {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]];
                } else {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]] - weekDataATraiter[info.filter(isUnique)[j-1]];
                }
                objATraiter[info.filter(isUnique)[j]] = Atraiter;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Analyse REX' && libelle[i].split('_')[1] === 'H2' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbRex;
                if (isNaN(weekDataRex[info.filter(isUnique)[j-1]])) {
                    Rex = weekDataRex[info.filter(isUnique)[j]];
                } else {
                    Rex = weekDataATraiter[info.filter(isUnique)[j]] - weekDataRex[info.filter(isUnique)[j-1]];
                }
                objRex[info.filter(isUnique)[j]] = Rex;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Rame à vigiler' && libelle[i].split('_')[1] === 'H2' && date[i] === info.filter(isUnique)[j]) {
                weekDataRameAVigiler[info.filter(isUnique)[j]] = ++nbRameAVigiler;
                if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[j-1]])) {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]];
                } else {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]] - weekDataRameAVigiler[info.filter(isUnique)[j-1]];
                }
                objRameAVigiler[info.filter(isUnique)[j]] = RameAVigiler;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'En cours' && libelle[i].split('_')[1] === 'H2' && date[i] === info.filter(isUnique)[j]) {
                weekDataEnCours[info.filter(isUnique)[j]] = ++nbEnCours;
                if (isNaN(weekDataEnCours[info.filter(isUnique)[j-1]])) {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]];
                } else {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]] - weekDataEnCours[info.filter(isUnique)[j-1]];
                }
                objEnCours[info.filter(isUnique)[j]] = EnCours;
            } 
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    };

    return data;
}

function weekH3(statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'A traiter' && libelle[i].split('_')[1] === 'H3' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbATraiter;
                if (isNaN(weekDataATraiter[info.filter(isUnique)[j-1]])) {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]];
                } else {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]] - weekDataATraiter[info.filter(isUnique)[j-1]];
                }
                objATraiter[info.filter(isUnique)[j]] = Atraiter;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Analyse REX' && libelle[i].split('_')[1] === 'H3' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbRex;
                if (isNaN(weekDataRex[info.filter(isUnique)[j-1]])) {
                    Rex = weekDataRex[info.filter(isUnique)[j]];
                } else {
                    Rex = weekDataATraiter[info.filter(isUnique)[j]] - weekDataRex[info.filter(isUnique)[j-1]];
                }
                objRex[info.filter(isUnique)[j]] = Rex;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Rame à vigiler' && libelle[i].split('_')[1] === 'H3' && date[i] === info.filter(isUnique)[j]) {
                weekDataRameAVigiler[info.filter(isUnique)[j]] = ++nbRameAVigiler;
                if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[j-1]])) {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]];
                } else {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]] - weekDataRameAVigiler[info.filter(isUnique)[j-1]];
                }
                objRameAVigiler[info.filter(isUnique)[j]] = RameAVigiler;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'En cours' && libelle[i].split('_')[1] === 'H3' && date[i] === info.filter(isUnique)[j]) {
                weekDataEnCours[info.filter(isUnique)[j]] = ++nbEnCours;
                if (isNaN(weekDataEnCours[info.filter(isUnique)[j-1]])) {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]];
                } else {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]] - weekDataEnCours[info.filter(isUnique)[j-1]];
                }
                objEnCours[info.filter(isUnique)[j]] = EnCours;
            } 
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    };

    return data;
}

function weekH4(statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'A traiter' && libelle[i].split('_')[1] === 'H4' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbATraiter;
                if (isNaN(weekDataATraiter[info.filter(isUnique)[j-1]])) {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]];
                } else {
                    Atraiter = weekDataATraiter[info.filter(isUnique)[j]] - weekDataATraiter[info.filter(isUnique)[j-1]];
                }
                objATraiter[info.filter(isUnique)[j]] = Atraiter;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Analyse REX' && libelle[i].split('_')[1] === 'H4' && date[i] === info.filter(isUnique)[j]) {
                weekDataATraiter[info.filter(isUnique)[j]] = ++nbRex;
                if (isNaN(weekDataRex[info.filter(isUnique)[j-1]])) {
                    Rex = weekDataRex[info.filter(isUnique)[j]];
                } else {
                    Rex = weekDataATraiter[info.filter(isUnique)[j]] - weekDataRex[info.filter(isUnique)[j-1]];
                }
                objRex[info.filter(isUnique)[j]] = Rex;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'Rame à vigiler' && libelle[i].split('_')[1] === 'H4' && date[i] === info.filter(isUnique)[j]) {
                weekDataRameAVigiler[info.filter(isUnique)[j]] = ++nbRameAVigiler;
                if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[j-1]])) {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]];
                } else {
                    RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[j]] - weekDataRameAVigiler[info.filter(isUnique)[j-1]];
                }
                objRameAVigiler[info.filter(isUnique)[j]] = RameAVigiler;
            } 
        }
    }

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0;i != statut.length && i != libelle.length && i != date.length; i++) {
            if (statut[i] === 'En cours' && libelle[i].split('_')[1] === 'H4' && date[i] === info.filter(isUnique)[j]) {
                weekDataEnCours[info.filter(isUnique)[j]] = ++nbEnCours;
                if (isNaN(weekDataEnCours[info.filter(isUnique)[j-1]])) {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]];
                } else {
                    EnCours = weekDataEnCours[info.filter(isUnique)[j]] - weekDataEnCours[info.filter(isUnique)[j-1]];
                }
                objEnCours[info.filter(isUnique)[j]] = EnCours;
            } 
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    };

    return data;
}

function weekH1ByLigneL(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneL = ['78L', '79L', '87L', '99L', '101L', '103L', '104L', '106L',
    '108L', '112L', '116L', '118L', '120L', '126L', '128L', '130L', '132L',
    '134L', '144L', '150L', '152L', '154L', '157L', '159L', '160L', '161L',
    '162L', '163L', '166L', '168L', '169L', '171L', '172L', '197L', '199L',
    '201L', '202L', '203L', '204', '205L', '206L', '208L', '209L', '211L',
    '214L', '215L', '216L', '217L', '218L', '220L', '221L', '226L', '227L',
    '234L', '235', '236L', '238L', '239L', '240L', '241L', '242L', '245L',
    '246L', '247L', '248L', '251L', '254L', '255L', '256L', '261L', '263L',
    '267L', '268L', '271L', '272L', '273L', '274L', '275L', '276L', '277L',
    '278L', '279L', '280L', '283L', '284L', '285L', '286L', '287L', '288L',
    '289L', '295L', '316L'];

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}

function weekH1ByLigneJ(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneJ = ['80L', '81L', '86L', '88L', '110L', '114L', '122L', '124L',
    '136L', '146L', '147L', '148L', '149L', '151L', '153L', '155L', '156L', 
    '158L', '164L', '165L', '167L', '17OL', '195L', '196L', '198L', '200L', 
    '207L', '210L', '212L', '213L', '219L', '228L', '229L', '230L', '231L',
    '232L', '233L', '237L', '243L', '244L', '249L', '250L', '252L', '253L',
    '257L', '258L', '259L', '260L', '262L', '264L', '265L', '266L', '269L',
    '270L', '281L', '282L', '290L', '291L', '292L', '293L', '294L', '314L',
    '315L', '317L'];
    
    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}

function weekH2ByLigneL(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneL = ['78L', '79L', '87L', '99L', '101L', '103L', '104L', '106L',
    '108L', '112L', '116L', '118L', '120L', '126L', '128L', '130L', '132L',
    '134L', '144L', '150L', '152L', '154L', '157L', '159L', '160L', '161L',
    '162L', '163L', '166L', '168L', '169L', '171L', '172L', '197L', '199L',
    '201L', '202L', '203L', '204', '205L', '206L', '208L', '209L', '211L',
    '214L', '215L', '216L', '217L', '218L', '220L', '221L', '226L', '227L',
    '234L', '235', '236L', '238L', '239L', '240L', '241L', '242L', '245L',
    '246L', '247L', '248L', '251L', '254L', '255L', '256L', '261L', '263L',
    '267L', '268L', '271L', '272L', '273L', '274L', '275L', '276L', '277L',
    '278L', '279L', '280L', '283L', '284L', '285L', '286L', '287L', '288L',
    '289L', '295L', '316L'];

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}

function weekH2ByLigneJ(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneJ = ['80L', '81L', '86L', '88L', '110L', '114L', '122L', '124L',
    '136L', '146L', '147L', '148L', '149L', '151L', '153L', '155L', '156L', 
    '158L', '164L', '165L', '167L', '17OL', '195L', '196L', '198L', '200L', 
    '207L', '210L', '212L', '213L', '219L', '228L', '229L', '230L', '231L',
    '232L', '233L', '237L', '243L', '244L', '249L', '250L', '252L', '253L',
    '257L', '258L', '259L', '260L', '262L', '264L', '265L', '266L', '269L',
    '270L', '281L', '282L', '290L', '291L', '292L', '293L', '294L', '314L',
    '315L', '317L'];
    
    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}

function weekH3ByLigneL(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneL = ['78L', '79L', '87L', '99L', '101L', '103L', '104L', '106L',
    '108L', '112L', '116L', '118L', '120L', '126L', '128L', '130L', '132L',
    '134L', '144L', '150L', '152L', '154L', '157L', '159L', '160L', '161L',
    '162L', '163L', '166L', '168L', '169L', '171L', '172L', '197L', '199L',
    '201L', '202L', '203L', '204', '205L', '206L', '208L', '209L', '211L',
    '214L', '215L', '216L', '217L', '218L', '220L', '221L', '226L', '227L',
    '234L', '235', '236L', '238L', '239L', '240L', '241L', '242L', '245L',
    '246L', '247L', '248L', '251L', '254L', '255L', '256L', '261L', '263L',
    '267L', '268L', '271L', '272L', '273L', '274L', '275L', '276L', '277L',
    '278L', '279L', '280L', '283L', '284L', '285L', '286L', '287L', '288L',
    '289L', '295L', '316L'];

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}

function weekH3ByLigneJ(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneJ = ['80L', '81L', '86L', '88L', '110L', '114L', '122L', '124L',
    '136L', '146L', '147L', '148L', '149L', '151L', '153L', '155L', '156L', 
    '158L', '164L', '165L', '167L', '17OL', '195L', '196L', '198L', '200L', 
    '207L', '210L', '212L', '213L', '219L', '228L', '229L', '230L', '231L',
    '232L', '233L', '237L', '243L', '244L', '249L', '250L', '252L', '253L',
    '257L', '258L', '259L', '260L', '262L', '264L', '265L', '266L', '269L',
    '270L', '281L', '282L', '290L', '291L', '292L', '293L', '294L', '314L',
    '315L', '317L'];
    
    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}


function weekH4ByLigneL(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneL = ['78L', '79L', '87L', '99L', '101L', '103L', '104L', '106L',
    '108L', '112L', '116L', '118L', '120L', '126L', '128L', '130L', '132L',
    '134L', '144L', '150L', '152L', '154L', '157L', '159L', '160L', '161L',
    '162L', '163L', '166L', '168L', '169L', '171L', '172L', '197L', '199L',
    '201L', '202L', '203L', '204', '205L', '206L', '208L', '209L', '211L',
    '214L', '215L', '216L', '217L', '218L', '220L', '221L', '226L', '227L',
    '234L', '235', '236L', '238L', '239L', '240L', '241L', '242L', '245L',
    '246L', '247L', '248L', '251L', '254L', '255L', '256L', '261L', '263L',
    '267L', '268L', '271L', '272L', '273L', '274L', '275L', '276L', '277L',
    '278L', '279L', '280L', '283L', '284L', '285L', '286L', '287L', '288L',
    '289L', '295L', '316L'];

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneL.length; z++) {
                if (ligneL[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}

function weekH4ByLigneJ(rames, statut, libelle, date, info) {
    var weekDataATraiter = {};
    var objATraiter = {};
    var Atraiter = 0;
    var nbATraiter = 0;

    var weekDataRex = {};
    var objRex = {};
    var Rex = 0;
    var nbRex = 0;

    var weekDataRameAVigiler = {};
    var objRameAVigiler = {};
    var RameAVigiler = 0;
    var nbRameAVigiler = 0;

    var weekDataEnCours = {};
    var objEnCours = {};
    var EnCours = 0;
    var nbEnCours = 0;

    var ligneJ = ['80L', '81L', '86L', '88L', '110L', '114L', '122L', '124L',
    '136L', '146L', '147L', '148L', '149L', '151L', '153L', '155L', '156L', 
    '158L', '164L', '165L', '167L', '17OL', '195L', '196L', '198L', '200L', 
    '207L', '210L', '212L', '213L', '219L', '228L', '229L', '230L', '231L',
    '232L', '233L', '237L', '243L', '244L', '249L', '250L', '252L', '253L',
    '257L', '258L', '259L', '260L', '262L', '264L', '265L', '266L', '269L',
    '270L', '281L', '282L', '290L', '291L', '292L', '293L', '294L', '314L',
    '315L', '317L'];
    
    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'A traiter' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataATraiter[info.filter(isUnique)[x]] = ++nbATraiter;
                    if (isNaN(weekDataATraiter[info.filter(isUnique)[x - 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataATraiter[info.filter(isUnique)[x + 1]])) {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]];
                    } else {
                        Atraiter = weekDataATraiter[info.filter(isUnique)[x]] - weekDataATraiter[info.filter(isUnique)[x-1]];
                    }
                    objATraiter[info.filter(isUnique)[x]] = Atraiter;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Analyse REX' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRex[info.filter(isUnique)[x]] = ++nbRex;
                    if (isNaN(weekDataRex[info.filter(isUnique)[x - 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRex[info.filter(isUnique)[x + 1]])) {
                        Rex = weekDataRex[info.filter(isUnique)[x]];
                    } else {
                        Rex = weekDataRex[info.filter(isUnique)[x]] - weekDataRex[info.filter(isUnique)[x-1]];
                    }
                    objRex[info.filter(isUnique)[x]] = Rex;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'Rame à vigiler' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataRameAVigiler[info.filter(isUnique)[x]] = ++nbRameAVigiler;
                    if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x - 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataRameAVigiler[info.filter(isUnique)[x + 1]])) {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]];
                    } else {
                        RameAVigiler = weekDataRameAVigiler[info.filter(isUnique)[x]] - weekDataRameAVigiler[info.filter(isUnique)[x-1]];
                    }
                    objRameAVigiler[info.filter(isUnique)[x]] = RameAVigiler;
                }
            }
        }
    }

    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligneJ.length; z++) {
                if (ligneJ[z] === rames[y] 
                    && statut[y] === 'En cours' 
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataEnCours[info.filter(isUnique)[x]] = ++nbEnCours;
                    if (isNaN(weekDataEnCours[info.filter(isUnique)[x - 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataEnCours[info.filter(isUnique)[x + 1]])) {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]];
                    } else {
                        EnCours = weekDataEnCours[info.filter(isUnique)[x]] - weekDataEnCours[info.filter(isUnique)[x-1]];
                    }
                    objEnCours[info.filter(isUnique)[x]] = EnCours;
                }
            }
        }
    }

    var data = {
        'A traiter': objATraiter,
        'Analyse REX': objRex,
        'Rame à vigiler': objRameAVigiler,
        'En cours': objEnCours
    }

    return(data);
}

exports.getHierarchieByDayForWeek = function(array) {
    var statut = [];
    var libelle = [];
    var date = [];
    var rames = [];
    var info = [];

    for (let i = 0; i != array.length; i++) {
        statut.push(array[i]['Statut']);
        libelle.push(array[i]['Libellé de l\'événement']);
        date.push(array[i]['Date de création'].split(' ')[0]);
        rames.push(array[i]['Engin impactée']);
    }

    for (let i = 0; i != date.length; i++) {
        if (date[i] != date[i + 1] && date[i] != '') {
            info.push(date[i]);
        }
    }

    var weekData = {
        'L/j': {
            'H1': weekH1(statut, libelle, date, info),
            'H2': weekH2(statut, libelle, date, info),
            'H3': weekH3(statut, libelle, date, info),
            'H4': weekH4(statut, libelle, date, info),
        },
        'L': {
            'H1': weekH1ByLigneL(rames, statut, libelle, date, info),
            'H2': weekH2ByLigneL(rames, statut, libelle, date, info),
            'H3': weekH3ByLigneL(rames, statut, libelle, date, info),
            'H4': weekH4ByLigneL(rames, statut, libelle, date, info),
        },
        'J': {
            'H1': weekH1ByLigneJ(rames, statut, libelle, date, info),
            'H2': weekH2ByLigneJ(rames, statut, libelle, date, info),
            'H3': weekH3ByLigneJ(rames, statut, libelle, date, info),
            'H4': weekH4ByLigneJ(rames, statut, libelle, date, info),
        }
    }

    //console.log(weekData);
    return weekData;
}