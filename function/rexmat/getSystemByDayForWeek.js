function isUnique(item, position, array) {
    return array.indexOf(item) === position;
}

function weekH1(systeme, date, info) {
    var weekBS = {};
    var objBS = {};
    var nbBS = 0;
    var bs = 0;
    
    var weekClim = {};
    var objClim = {}
    var nbClim = 0;
    var clim = 0;
    
    var weekComp = {};
    var objComp = {};
    var nbComp = 0;
    var comp = 0;
    
    var weekDetec = {};
    var objDetec = {};
    var nbDetec = 0;
    var detec = 0;
    
    var weekCctv = {};
    var objCctv = {};
    var nbCctv = 0;
    var cctv = 0;
    
    var weekTcms = {};
    var objTcms = {};
    var nbTcms = 0;
    var tcms = 0;
    
    var weekTrac = {};
    var objTrac = {};
    var nbTrac = 0;
    var trac = 0;
    
    var weekAtess = {};
    var objAtess = {};
    var nbAtess = 0;
    var atess = 0;
    
    var weekTdb = {};
    var objTdb = {};
    var nbTdb = 0;
    var tdb = 0;
    
    var weekEmco = {};
    var objEmco = {};
    var nbEmco = 0; 
    var emco = 0;
    
    var weekEqs = {};
    var objEqs = {};
    var nbEqs = 0;
    var eqs = 0;
    
    var weekPorte = {};
    var objPorte = {};
    var nbPorte = 0;
    var porte = 0;
    
    var weekFrein = {};
    var objFrein = {};
    var nbFrein = 0;
    var frein = 0;
    
    var weekCompPass = {};
    var objCompPass = {};
    var nbCompPass = 0;
    var compPass = 0;
   
    var weekAff = {};
    var objAff = {};
    var nbAff = 0;
    var aff = 0;
    
    var weekLect = {};
    var objLect = {};
    var nbLect = 0;
    var lect = 0;
    
    var weekEcl = {};
    var objEcl = {};
    var nbEcl = 0;
    var ecl = 0;
    
    var weekPup = {};
    var objPup = {};
    var nbPup = 0;
    var pup = 0;
    
    var weekSono = {};
    var objSono = {};
    var nbSono = 0;
    var sono = 0;
    
    var weekCoup = {};
    var objCoup = {};
    var nbCoup = 0;
    var coup = 0;
    
    var weekStm = {};
    var objStm = {};
    var nbStm = 0;
    var stm = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0; i != systeme.length && i != date.length; i++) {
            if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'BS' && date[i] === info.filter(isUnique)[j]) {
                weekBS[info.filter(isUnique)[j]] = ++nbBS;
                if (isNaN(weekBS[info.filter(isUnique)[j-1]])) {
                    bs = weekBS[info.filter(isUnique)[j]];
                } else {
                    bs = weekBS[info.filter(isUnique)[j]] - weekBS[info.filter(isUnique)[j-1]]
                }
                objBS[info.filter(isUnique)[j]] = bs;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'CLIMATISATION' && date[i] === info.filter(isUnique)[j]) {
                weekClim[info.filter(isUnique)[j]] = ++nbClim;
                if (isNaN(weekClim[info.filter(isUnique)[j-1]])) {
                    clim = weekClim[info.filter(isUnique)[j]];
                } else {
                    clim = weekClim[info.filter(isUnique)[j]] - weekClim[info.filter(isUnique)[j-1]];
                }
                objClim[info.filter(isUnique)[j]] = clim;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'COMPRESSEUR' && date[i] === info.filter(isUnique)[j]) {
                weekComp[info.filter(isUnique)[j]] = ++nbComp;
                if (isNaN(weekComp[info.filter(isUnique)[j-1]])) {
                    comp = weekComp[info.filter(isUnique)[j]];
                } else {
                    comp = weekComp[info.filter(isUnique)[j]] - weekComp[info.filter(isUnique)[j-1]];
                }
                objComp[info.filter(isUnique)[j]] = comp;
            } else if (systeme[i].split('_')[1] === 'H1' && (systeme[i].split('_')[2] === 'Detection' && systeme[i].split('_')[3] ==='incendie') && date[i] === info.filter(isUnique)[j]) {
                weekDetec[info.filter(isUnique)[j]] = ++nbDetec;
                if (isNaN(weekDetec[info.filter(isUnique)[j-1]])) {
                    detec = weekDetec[info.filter(isUnique)[j]];
                } else {
                    detec = weekDetec[info.filter(isUnique)[j]] - weekDetec[info.filter(isUnique)[j-1]];
                }
                objDetec[info.filter(isUnique)[j]] = detec;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'CCTV' && date[i] === info.filter(isUnique)[j]) {
                weekCctv[info.filter(isUnique)[j]] = ++nbCctv;
                if (isNaN(weekCctv[info.filter(isUnique)[j-1]])) {
                    cctv = weekCctv[info.filter(isUnique)[j]];
                } else {
                    cctv = weekCctv[info.filter(isUnique)[j]] - weekCctv[info.filter(isUnique)[j-1]];
                }
                objCctv[info.filter(isUnique)[j]] = cctv;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'TCMS' && date[i] === info.filter(isUnique)[j]) {
                weekTcms[info.filter(isUnique)[j]] = ++nbTcms;
                if (isNaN(weekTcms[info.filter(isUnique)[j-1]])) {
                    tcms = weekTcms[info.filter(isUnique)[j]];
                } else {
                    tcms = weekTcms[info.filter(isUnique)[j]] -weekTcms[info.filter(isUnique)[j-1]];
                }
                objTcms[info.filter(isUnique)[j]] = tcms;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'TRACTION' && date[i] === info.filter(isUnique)[j]) {
                weekTrac[info.filter(isUnique)[j]] = ++nbTrac;
                if (isNaN(weekTrac[info.filter(isUnique)[j-1]])) {
                    trac = weekTrac[info.filter(isUnique)[j]];
                } else {
                    trac = weekTrac[info.filter(isUnique)[j]] - weekTrac[info.filter(isUnique)[j-1]];
                }
                objTrac[info.filter(isUnique)[j]] = trac;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'ATESS' && date[i] === info.filter(isUnique)[j]) {
                weekAtess[info.filter(isUnique)[j]] == ++nbAtess;
                if (isNaN(weekAtess[info.filter(isUnique)[j-1]])) {
                    atess = weekAtess[info.filter(isUnique)[j]];
                } else {
                    atess = weekAtess[info.filter(isUnique)[j]] - weekAtess[info.filter(isUnique)[j-1]];
                }
                objAtess[info.filter(isUnique)[j]] = atess;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'TDB' && date[i] === info.filter(isUnique)[j]) {
                weekTdb[info.filter(isUnique)[j]] = ++nbTdb;
                if (isNaN(weekTdb[info.filter(isUnique)[j-1]])) {
                    tdb = weekTdb[info.filter(isUnique)[j]];
                } else {
                    tdb = weekTdb[info.filter(isUnique)[j]] - weekTdb[info.filter(isUnique)[j-1]];
                }
                objTdb[info.filter(isUnique)[j]] = tdb;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'EMCO' && date[i] === info.filter(isUnique)[j]) {
                weekEmco[info.filter(isUnique)[j]] = ++nbEmco;
                if (isNaN(weekEmco[info.filter(isUnique)[j-1]])) {
                    emco = weekEmco[info.filter(isUnique)[j]];
                } else {
                    emco = weekEmco[info.filter(isUnique)[j]] - weekEmco[info.filter(isUnique)[j-1]];
                }
                objEmco[info.filter(isUnique)[j]] = emco;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'EQS' && date[i] === info.filter(isUnique)[j]) {
                weekEqs[info.filter(isUnique)[j]] = ++nbEqs;
                if (isNaN(weekEqs[info.filter(isUnique)[j-1]])) {
                    eqs = weekEqs[info.filter(isUnique)[j]];
                } else {
                    eqs = weekEqs[info.filter(isUnique)[j]] - weekEqs[info.filter(isUnique)[j-1]];
                }
                objEqs[info.filter(isUnique)[j]] = eqs;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'PORTE' && date[i] === info.filter(isUnique)[j]) {
                weekPorte[info.filter(isUnique)[j]] = ++nbPorte;
                if (isNaN(weekPorte[info.filter(isUnique)[j-1]])) {
                    porte = weekPorte[info.filter(isUnique)[j]];
                } else {
                    porte = weekPorte[info.filter(isUnique)[j]] - weekPorte[info.filter(isUnique)[j-1]];
                }
                objPorte[info.filter(isUnique)[j]] = porte;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'FREIN' && date[i] === info.filter(isUnique)[j]) {
                weekFrein[info.filter(isUnique)[j]] = ++nbFrein;
                if (isNaN(weekFrein[info.filter(isUnique)[j-1]])) {
                    frein = weekFrein[info.filter(isUnique)[j]];
                } else {
                    frein = weekFrein[info.filter(isUnique)[j]] - weekFrein[info.filter(isUnique)[j-1]]
                }
                objFrein[info.filter(isUnique)[j]] = frein;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'ComptagePassagers' && date[i] === info.filter(isUnique)[j]) {
                weekCompPass[info.filter(isUnique)[j]] = ++nbCompPass;
                if (isNaN(weekCompPass[info.filter(isUnique)[j-1]])) {
                    compPass = weekCompPass[info.filter(isUnique)[j]];
                } else {
                    compPass = weekCompPass[info.filter(isUnique)[j]] - weekCompPass[info.filter(isUnique)[j-1]]
                }
                objCompPass[info.filter(isUnique)[j]] = compPass;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'AFFICHEUR' && date[i] === info.filter(isUnique)[j]) {
                weekAff[info.filter(isUnique)[j]] = ++nbAff;
                if (isNaN(weekAff[info.filter(isUnique)[j-1]])) {
                    aff = weekAff[info.filter(isUnique)[j]];
                } else {
                    aff = weekAff[info.filter(isUnique)[j]] - weekAff[info.filter(isUnique)[j-1]];
                }
                objAff[info.filter(isUnique)[j]] = aff;
            } else if (systeme[i].split('_')[1] === 'H1' && (systeme[i].split('_')[2] === 'LECTEUR' && systeme[i].split('_')[3] === 'BADGE') && date[i] === info.filter(isUnique)[j]) {
                weekLect[info.filter(isUnique)[j]] = ++nbLect;
                if (isNaN(weekLect[info.filter(isUnique)[j-1]])) {
                    lect = weekLect[info.filter(isUnique)[j]];
                } else {
                    lect = weekLect[info.filter(isUnique)[j]] - weekLect[info.filter(isUnique)[j-1]];
                }
                objLect[info.filter(isUnique)[j]] = lect;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'ECLAIRAGE' && date[i] === info.filter(isUnique)[j]) {
                weekEcl[info.filter(isUnique)[j]] = ++nbEcl;
                if (isNaN(weekEcl[info.filter(isUnique)[j-1]])) {
                    ecl = weekEcl[info.filter(isUnique)[j]];
                } else {
                    ecl = weekEcl[info.filter(isUnique)[j]] - weekEcl[info.filter(isUnique)[j-1]];
                }
                objEcl[info.filter(isUnique)[j]] = ecl;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'PUPITRE' && date[i] === info.filter(isUnique)[j]) {
                weekPup[info.filter(isUnique)[j]] = ++nbPup;
                if (isNaN(weekPup[info.filter(isUnique)[j-1]])) {
                    pup = weekPup[info.filter(isUnique)[j]];
                } else {
                    pup = weekPup[info.filter(isUnique)[j]] - weekPup[info.filter(isUnique)[j-1]];
                }
                objPup[info.filter(isUnique)[j]] = pup;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'SONO' && date[i] === info.filter(isUnique)[j]) {
                weekSono[info.filter(isUnique)[j]] = ++nbSono;
                if (isNaN(weekSono[info.filter(isUnique)[j-1]])) {
                    sono = weekSono[info.filter(isUnique)[j]];
                } else {
                    sono = weekSono[info.filter(isUnique)[j]] - weekSono[info.filter(isUnique)[j-1]];
                }
                objSono[info.filter(isUnique)[j]] = sono;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'COUPLEUR' && date[i] === info.filter(isUnique)[j]) {
                weekCoup[info.filter(isUnique)[j]] = ++nbCoup;
                if (isNaN(weekCoup[info.filter(isUnique)[j-1]])) {
                    coup = weekCoup[info.filter(isUnique)[j]];
                } else {
                    coup = weekCoup[info.filter(isUnique)[j]] - weekCoup[info.filter(isUnique)[j-1]];
                }
                objCoup[info.filter(isUnique)[j]] = coup;
            } else if (systeme[i].split('_')[1] === 'H1' && systeme[i].split('_')[2] === 'STMAutonome' && date[i] === info.filter(isUnique)[j]) {
                weekStm[info.filter(isUnique)[j]] = ++nbStm;
                if (isNaN(weekStm[info.filter(isUnique)[j-1]])) {
                    stm = weekStm[info.filter(isUnique)[j]];
                } else {
                    stm = weekStm[info.filter(isUnique)[j]] - weekStm[info.filter(isUnique)[j-1]];
                }
                objStm[info.filter(isUnique)[j]] = stm;
            }
        } 
    }

    var data = {
        "BS": objBS, "Climatisation": objClim, "Detection Incendie": objDetec, 
        "CCTV": objCctv, "TCMS": objTcms, "Traction": objTrac, "ATESS": objAtess, 
        "TDB": objTdb, "EMCO": objEmco, "EQS": objEqs, "Porte": objPorte, 
        "Frein": objFrein, "Comptage Passagers": objCompPass, "Afficheur": objAff, 
        "Lecteur Badge": objLect, "Eclairage": objEcl, "Pupitre": objPup, 
        "Sonorisation": objSono, "Compresseur": objComp, "STMAutonome": objStm, 
        "Coupleur": objCoup,
    }

    return(data);
}


function weekH1ByLigneL(rames, systeme, date, info) {
    var weekBS = {};
    var objBS = {};
    var nbBS = 0;
    var bs = 0;
    
    var weekClim = {};
    var objClim = {}
    var nbClim = 0;
    var clim = 0;
    
    var weekComp = {};
    var objComp = {};
    var nbComp = 0;
    var comp = 0;
    
    var weekDetec = {};
    var objDetec = {};
    var nbDetec = 0;
    var detec = 0;
    
    var weekCctv = {};
    var objCctv = {};
    var nbCctv = 0;
    var cctv = 0;
    
    var weekTcms = {};
    var objTcms = {};
    var nbTcms = 0;
    var tcms = 0;
    
    var weekTrac = {};
    var objTrac = {};
    var nbTrac = 0;
    var trac = 0;
    
    var weekAtess = {};
    var objAtess = {};
    var nbAtess = 0;
    var atess = 0;
    
    var weekTdb = {};
    var objTdb = {};
    var nbTdb = 0;
    var tdb = 0;
    
    var weekEmco = {};
    var objEmco = {};
    var nbEmco = 0; 
    var emco = 0;
    
    var weekEqs = {};
    var objEqs = {};
    var nbEqs = 0;
    var eqs = 0;
    
    var weekPorte = {};
    var objPorte = {};
    var nbPorte = 0;
    var porte = 0;
    
    var weekFrein = {};
    var objFrein = {};
    var nbFrein = 0;
    var frein = 0;
    
    var weekCompPass = {};
    var objCompPass = {};
    var nbCompPass = 0;
    var compPass = 0;
   
    var weekAff = {};
    var objAff = {};
    var nbAff = 0;
    var aff = 0;
    
    var weekLect = {};
    var objLect = {};
    var nbLect = 0;
    var lect = 0;
    
    var weekEcl = {};
    var objEcl = {};
    var nbEcl = 0;
    var ecl = 0;
    
    var weekPup = {};
    var objPup = {};
    var nbPup = 0;
    var pup = 0;
    
    var weekSono = {};
    var objSono = {};
    var nbSono = 0;
    var sono = 0;
    
    var weekCoup = {};
    var objCoup = {};
    var nbCoup = 0;
    var coup = 0;
    
    var weekStm = {};
    var objStm = {};
    var nbStm = 0;
    var stm = 0;

    var ligne = ['78L', '79L', '87L', '99L', '101L', '103L', '104L', '106L',
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
            for (let z = 0; z != ligne.length; z++) {
                if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'BS' && date[y] === info.filter(isUnique)[x]) {
                    weekBS[info.filter(isUnique)[x]] = ++nbBS;
                    if (isNaN(weekBS[info.filter(isUnique)[x-1]])) {
                        bs = weekBS[info.filter(isUnique)[x]];
                    } else {
                        bs = weekBS[info.filter(isUnique)[x]] - weekBS[info.filter(isUnique)[x-1]]
                    }
                    objBS[info.filter(isUnique)[x]] = bs;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'CLIMATISATION' && date[y] === info.filter(isUnique)[x]) {
                    weekClim[info.filter(isUnique)[x]] = ++nbClim;
                    if (isNaN(weekClim[info.filter(isUnique)[x-1]])) {
                        clim = weekClim[info.filter(isUnique)[x]];
                    } else {
                        clim = weekClim[info.filter(isUnique)[x]] - weekClim[info.filter(isUnique)[x-1]];
                    }
                    objClim[info.filter(isUnique)[x]] = clim;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'COMPRESSEUR' && date[y] === info.filter(isUnique)[x]) {
                    weekComp[info.filter(isUnique)[x]] = ++nbComp;
                    if (isNaN(weekComp[info.filter(isUnique)[x-1]])) {
                        comp = weekComp[info.filter(isUnique)[x]];
                    } else {
                        comp = weekComp[info.filter(isUnique)[x]] - weekComp[info.filter(isUnique)[x-1]];
                    }
                    objComp[info.filter(isUnique)[x]] = comp;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && (systeme[y].split('_')[2] === 'Detection' && systeme[i].split('_')[3] ==='incendie') && date[y] === info.filter(isUnique)[x]) {
                    weekDetec[info.filter(isUnique)[x]] = ++nbDetec;
                    if (isNaN(weekDetec[info.filter(isUnique)[x-1]])) {
                        detec = weekDetec[info.filter(isUnique)[x]];
                    } else {
                        detec = weekDetec[info.filter(isUnique)[x]] - weekDetec[info.filter(isUnique)[x-1]];
                    }
                    objDetec[info.filter(isUnique)[x]] = detec;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'CCTV' && date[y] === info.filter(isUnique)[x]) {
                    weekCctv[info.filter(isUnique)[x]] = ++nbCctv;
                    if (isNaN(weekCctv[info.filter(isUnique)[x-1]])) {
                        cctv = weekCctv[info.filter(isUnique)[x]];
                    } else {
                        cctv = weekCctv[info.filter(isUnique)[x]] - weekCctv[info.filter(isUnique)[x-1]];
                    }
                    objCctv[info.filter(isUnique)[x]] = cctv;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'TCMS' && date[y] === info.filter(isUnique)[x]) {
                    weekTcms[info.filter(isUnique)[x]] = ++nbTcms;
                    if (isNaN(weekTcms[info.filter(isUnique)[x-1]])) {
                        tcms = weekTcms[info.filter(isUnique)[x]];
                    } else {
                        tcms = weekTcms[info.filter(isUnique)[x]] -weekTcms[info.filter(isUnique)[x-1]];
                    }
                    objTcms[info.filter(isUnique)[x]] = tcms;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'TRACTION' && date[y] === info.filter(isUnique)[x]) {
                    weekTrac[info.filter(isUnique)[x]] = ++nbTrac;
                    if (isNaN(weekTrac[info.filter(isUnique)[x-1]])) {
                        trac = weekTrac[info.filter(isUnique)[x]];
                    } else {
                        trac = weekTrac[info.filter(isUnique)[x]] - weekTrac[info.filter(isUnique)[x-1]];
                    }
                    objTrac[info.filter(isUnique)[x]] = trac;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'ATESS' && date[y] === info.filter(isUnique)[x]) {
                    weekAtess[info.filter(isUnique)[x]] == ++nbAtess;
                    if (isNaN(weekAtess[info.filter(isUnique)[x-1]])) {
                        atess = weekAtess[info.filter(isUnique)[x]];
                    } else {
                        atess = weekAtess[info.filter(isUnique)[x]] - weekAtess[info.filter(isUnique)[x-1]];
                    }
                    objAtess[info.filter(isUnique)[x]] = atess;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'TDB' && date[y] === info.filter(isUnique)[x]) {
                    weekTdb[info.filter(isUnique)[x]] = ++nbTdb;
                    if (isNaN(weekTdb[info.filter(isUnique)[x-1]])) {
                        tdb = weekTdb[info.filter(isUnique)[x]];
                    } else {
                        tdb = weekTdb[info.filter(isUnique)[x]] - weekTdb[info.filter(isUnique)[x-1]];
                    }
                    objTdb[info.filter(isUnique)[x]] = tdb;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'EMCO' && date[y] === info.filter(isUnique)[x]) {
                    weekEmco[info.filter(isUnique)[x]] = ++nbEmco;
                    if (isNaN(weekEmco[info.filter(isUnique)[x-1]])) {
                        emco = weekEmco[info.filter(isUnique)[x]];
                    } else {
                        emco = weekEmco[info.filter(isUnique)[x]] - weekEmco[info.filter(isUnique)[x-1]];
                    }
                    objEmco[info.filter(isUnique)[x]] = emco;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'EQS' && date[y] === info.filter(isUnique)[x]) {
                    weekEqs[info.filter(isUnique)[x]] = ++nbEqs;
                    if (isNaN(weekEqs[info.filter(isUnique)[x-1]])) {
                        eqs = weekEqs[info.filter(isUnique)[x]];
                    } else {
                        eqs = weekEqs[info.filter(isUnique)[x]] - weekEqs[info.filter(isUnique)[x-1]];
                    }
                    objEqs[info.filter(isUnique)[x]] = eqs;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'PORTE' && date[y] === info.filter(isUnique)[x]) {
                    weekPorte[info.filter(isUnique)[x]] = ++nbPorte;
                    if (isNaN(weekPorte[info.filter(isUnique)[x-1]])) {
                        porte = weekPorte[info.filter(isUnique)[x]];
                    } else {
                        porte = weekPorte[info.filter(isUnique)[x]] - weekPorte[info.filter(isUnique)[x-1]];
                    }
                    objPorte[info.filter(isUnique)[x]] = porte;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'FREIN' && date[y] === info.filter(isUnique)[x]) {
                    weekFrein[info.filter(isUnique)[x]] = ++nbFrein;
                    if (isNaN(weekFrein[info.filter(isUnique)[x-1]])) {
                        frein = weekFrein[info.filter(isUnique)[x]];
                    } else {
                        frein = weekFrein[info.filter(isUnique)[x]] - weekFrein[info.filter(isUnique)[x-1]]
                    }
                    objFrein[info.filter(isUnique)[x]] = frein;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'ComptagePassagers' && date[y] === info.filter(isUnique)[x]) {
                    weekCompPass[info.filter(isUnique)[x]] = ++nbCompPass;
                    if (isNaN(weekCompPass[info.filter(isUnique)[x-1]])) {
                        compPass = weekCompPass[info.filter(isUnique)[x]];
                    } else {
                        compPass = weekCompPass[info.filter(isUnique)[x]] - weekCompPass[info.filter(isUnique)[x-1]]
                    }
                    objCompPass[info.filter(isUnique)[x]] = compPass;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'AFFICHEUR' && date[y] === info.filter(isUnique)[x]) {
                    weekAff[info.filter(isUnique)[x]] = ++nbAff;
                    if (isNaN(weekAff[info.filter(isUnique)[x-1]])) {
                        aff = weekAff[info.filter(isUnique)[x]];
                    } else {
                        aff = weekAff[info.filter(isUnique)[x]] - weekAff[info.filter(isUnique)[x-1]];
                    }
                    objAff[info.filter(isUnique)[x]] = aff;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && (systeme[y].split('_')[2] === 'LECTEUR' && systeme[i].split('_')[3] === 'BADGE') && date[y] === info.filter(isUnique)[x]) {
                    weekLect[info.filter(isUnique)[x]] = ++nbLect;
                    if (isNaN(weekLect[info.filter(isUnique)[x-1]])) {
                        lect = weekLect[info.filter(isUnique)[x]];
                    } else {
                        lect = weekLect[info.filter(isUnique)[x]] - weekLect[info.filter(isUnique)[x-1]];
                    }
                    objLect[info.filter(isUnique)[x]] = lect;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'ECLAIRAGE' && date[y] === info.filter(isUnique)[x]) {
                    weekEcl[info.filter(isUnique)[x]] = ++nbEcl;
                if (isNaN(weekEcl[info.filter(isUnique)[x-1]])) {
                    ecl = weekEcl[info.filter(isUnique)[x]];
                } else {
                    ecl = weekEcl[info.filter(isUnique)[x]] - weekEcl[info.filter(isUnique)[x-1]];
                }
                objEcl[info.filter(isUnique)[x]] = ecl;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'PUPITRE' && date[y] === info.filter(isUnique)[x]) {
                    weekPup[info.filter(isUnique)[x]] = ++nbPup;
                    if (isNaN(weekPup[info.filter(isUnique)[x-1]])) {
                        pup = weekPup[info.filter(isUnique)[x]];
                    } else {
                        pup = weekPup[info.filter(isUnique)[x]] - weekPup[info.filter(isUnique)[x-1]];
                    }
                    objPup[info.filter(isUnique)[x]] = pup;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'SONO' && date[y] === info.filter(isUnique)[x]) {
                    weekSono[info.filter(isUnique)[x]] = ++nbSono;
                    if (isNaN(weekSono[info.filter(isUnique)[x-1]])) {
                        sono = weekSono[info.filter(isUnique)[x]];
                    } else {
                        sono = weekSono[info.filter(isUnique)[x]] - weekSono[info.filter(isUnique)[x-1]];
                    }
                    objSono[info.filter(isUnique)[x]] = sono;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'COUPLEUR' && date[y] === info.filter(isUnique)[x]) {
                    weekCoup[info.filter(isUnique)[x]] = ++nbCoup;
                    if (isNaN(weekCoup[info.filter(isUnique)[x-1]])) {
                        coup = weekCoup[info.filter(isUnique)[x]];
                    } else {
                        coup = weekCoup[info.filter(isUnique)[x]] - weekCoup[info.filter(isUnique)[x-1]];
                    }
                    objCoup[info.filter(isUnique)[x]] = coup;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'STMAutonome' && date[y] === info.filter(isUnique)[x]) {
                    weekStm[info.filter(isUnique)[x]] = ++nbStm;
                    if (isNaN(weekStm[info.filter(isUnique)[x-1]])) {
                        stm = weekStm[info.filter(isUnique)[x]];
                    } else {
                        stm = weekStm[info.filter(isUnique)[x]] - weekStm[info.filter(isUnique)[x-1]];
                    }
                    objStm[info.filter(isUnique)[x]] = stm;
                }
            }
        }
    }

    var data = {
        "BS": objBS, "Climatisation": objClim, "Detection Incendie": objDetec, 
        "CCTV": objCctv, "TCMS": objTcms, "Traction": objTrac, "ATESS": objAtess, 
        "TDB": objTdb, "EMCO": objEmco, "EQS": objEqs, "Porte": objPorte, 
        "Frein": objFrein, "Comptage Passagers": objCompPass, "Afficheur": objAff, 
        "Lecteur Badge": objLect, "Eclairage": objEcl, "Pupitre": objPup, 
        "Sonorisation": objSono, "Compresseur": objComp, "STMAutonome": objStm, 
        "Coupleur": objCoup,
    }

    return(data);
}

function weekH1ByLigneJ(rames, systeme, date, info) {
    var weekBS = {};
    var objBS = {};
    var nbBS = 0;
    var bs = 0;
    
    var weekClim = {};
    var objClim = {}
    var nbClim = 0;
    var clim = 0;
    
    var weekComp = {};
    var objComp = {};
    var nbComp = 0;
    var comp = 0;
    
    var weekDetec = {};
    var objDetec = {};
    var nbDetec = 0;
    var detec = 0;
    
    var weekCctv = {};
    var objCctv = {};
    var nbCctv = 0;
    var cctv = 0;
    
    var weekTcms = {};
    var objTcms = {};
    var nbTcms = 0;
    var tcms = 0;
    
    var weekTrac = {};
    var objTrac = {};
    var nbTrac = 0;
    var trac = 0;
    
    var weekAtess = {};
    var objAtess = {};
    var nbAtess = 0;
    var atess = 0;
    
    var weekTdb = {};
    var objTdb = {};
    var nbTdb = 0;
    var tdb = 0;
    
    var weekEmco = {};
    var objEmco = {};
    var nbEmco = 0; 
    var emco = 0;
    
    var weekEqs = {};
    var objEqs = {};
    var nbEqs = 0;
    var eqs = 0;
    
    var weekPorte = {};
    var objPorte = {};
    var nbPorte = 0;
    var porte = 0;
    
    var weekFrein = {};
    var objFrein = {};
    var nbFrein = 0;
    var frein = 0;
    
    var weekCompPass = {};
    var objCompPass = {};
    var nbCompPass = 0;
    var compPass = 0;
   
    var weekAff = {};
    var objAff = {};
    var nbAff = 0;
    var aff = 0;
    
    var weekLect = {};
    var objLect = {};
    var nbLect = 0;
    var lect = 0;
    
    var weekEcl = {};
    var objEcl = {};
    var nbEcl = 0;
    var ecl = 0;
    
    var weekPup = {};
    var objPup = {};
    var nbPup = 0;
    var pup = 0;
    
    var weekSono = {};
    var objSono = {};
    var nbSono = 0;
    var sono = 0;
    
    var weekCoup = {};
    var objCoup = {};
    var nbCoup = 0;
    var coup = 0;
    
    var weekStm = {};
    var objStm = {};
    var nbStm = 0;
    var stm = 0;

    var ligne = ['80L', '81L', '86L', '88L', '110L', '114L', '122L', '124L',
    '136L', '146L', '147L', '148L', '149L', '151L', '153L', '155L', '156L', 
    '158L', '164L', '165L', '167L', '17OL', '195L', '196L', '198L', '200L', 
    '207L', '210L', '212L', '213L', '219L', '228L', '229L', '230L', '231L',
    '232L', '233L', '237L', '243L', '244L', '249L', '250L', '252L', '253L',
    '257L', '258L', '259L', '260L', '262L', '264L', '265L', '266L', '269L',
    '270L', '281L', '282L', '290L', '291L', '292L', '293L', '294L', '314L',
    '315L', '317L'];
    
    for (let x = 0; x != info.filter(isUnique).length; x++) {
        for (let y = 0; y != rames.length; y++) {
            for (let z = 0; z != ligne.length; z++) {
                if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'BS' && date[y] === info.filter(isUnique)[x]) {
                    weekBS[info.filter(isUnique)[x]] = ++nbBS;
                    if (isNaN(weekBS[info.filter(isUnique)[x-1]])) {
                        bs = weekBS[info.filter(isUnique)[x]];
                    } else {
                        bs = weekBS[info.filter(isUnique)[x]] - weekBS[info.filter(isUnique)[x-1]]
                    }
                    objBS[info.filter(isUnique)[x]] = bs;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'CLIMATISATION' && date[y] === info.filter(isUnique)[x]) {
                    weekClim[info.filter(isUnique)[x]] = ++nbClim;
                    if (isNaN(weekClim[info.filter(isUnique)[x-1]])) {
                        clim = weekClim[info.filter(isUnique)[x]];
                    } else {
                        clim = weekClim[info.filter(isUnique)[x]] - weekClim[info.filter(isUnique)[x-1]];
                    }
                    objClim[info.filter(isUnique)[x]] = clim;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'COMPRESSEUR' && date[y] === info.filter(isUnique)[x]) {
                    weekComp[info.filter(isUnique)[x]] = ++nbComp;
                    if (isNaN(weekComp[info.filter(isUnique)[x-1]])) {
                        comp = weekComp[info.filter(isUnique)[x]];
                    } else {
                        comp = weekComp[info.filter(isUnique)[x]] - weekComp[info.filter(isUnique)[x-1]];
                    }
                    objComp[info.filter(isUnique)[x]] = comp;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && (systeme[y].split('_')[2] === 'Detection' && systeme[i].split('_')[3] ==='incendie') && date[y] === info.filter(isUnique)[x]) {
                    weekDetec[info.filter(isUnique)[x]] = ++nbDetec;
                    if (isNaN(weekDetec[info.filter(isUnique)[x-1]])) {
                        detec = weekDetec[info.filter(isUnique)[x]];
                    } else {
                        detec = weekDetec[info.filter(isUnique)[x]] - weekDetec[info.filter(isUnique)[x-1]];
                    }
                    objDetec[info.filter(isUnique)[x]] = detec;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'CCTV' && date[y] === info.filter(isUnique)[x]) {
                    weekCctv[info.filter(isUnique)[x]] = ++nbCctv;
                    if (isNaN(weekCctv[info.filter(isUnique)[x-1]])) {
                        cctv = weekCctv[info.filter(isUnique)[x]];
                    } else {
                        cctv = weekCctv[info.filter(isUnique)[x]] - weekCctv[info.filter(isUnique)[x-1]];
                    }
                    objCctv[info.filter(isUnique)[x]] = cctv;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'TCMS' && date[y] === info.filter(isUnique)[x]) {
                    weekTcms[info.filter(isUnique)[x]] = ++nbTcms;
                    if (isNaN(weekTcms[info.filter(isUnique)[x-1]])) {
                        tcms = weekTcms[info.filter(isUnique)[x]];
                    } else {
                        tcms = weekTcms[info.filter(isUnique)[x]] -weekTcms[info.filter(isUnique)[x-1]];
                    }
                    objTcms[info.filter(isUnique)[x]] = tcms;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'TRACTION' && date[y] === info.filter(isUnique)[x]) {
                    weekTrac[info.filter(isUnique)[x]] = ++nbTrac;
                    if (isNaN(weekTrac[info.filter(isUnique)[x-1]])) {
                        trac = weekTrac[info.filter(isUnique)[x]];
                    } else {
                        trac = weekTrac[info.filter(isUnique)[x]] - weekTrac[info.filter(isUnique)[x-1]];
                    }
                    objTrac[info.filter(isUnique)[x]] = trac;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'ATESS' && date[y] === info.filter(isUnique)[x]) {
                    weekAtess[info.filter(isUnique)[x]] == ++nbAtess;
                    if (isNaN(weekAtess[info.filter(isUnique)[x-1]])) {
                        atess = weekAtess[info.filter(isUnique)[x]];
                    } else {
                        atess = weekAtess[info.filter(isUnique)[x]] - weekAtess[info.filter(isUnique)[x-1]];
                    }
                    objAtess[info.filter(isUnique)[x]] = atess;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'TDB' && date[y] === info.filter(isUnique)[x]) {
                    weekTdb[info.filter(isUnique)[x]] = ++nbTdb;
                    if (isNaN(weekTdb[info.filter(isUnique)[x-1]])) {
                        tdb = weekTdb[info.filter(isUnique)[x]];
                    } else {
                        tdb = weekTdb[info.filter(isUnique)[x]] - weekTdb[info.filter(isUnique)[x-1]];
                    }
                    objTdb[info.filter(isUnique)[x]] = tdb;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'EMCO' && date[y] === info.filter(isUnique)[x]) {
                    weekEmco[info.filter(isUnique)[x]] = ++nbEmco;
                    if (isNaN(weekEmco[info.filter(isUnique)[x-1]])) {
                        emco = weekEmco[info.filter(isUnique)[x]];
                    } else {
                        emco = weekEmco[info.filter(isUnique)[x]] - weekEmco[info.filter(isUnique)[x-1]];
                    }
                    objEmco[info.filter(isUnique)[x]] = emco;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'EQS' && date[y] === info.filter(isUnique)[x]) {
                    weekEqs[info.filter(isUnique)[x]] = ++nbEqs;
                    if (isNaN(weekEqs[info.filter(isUnique)[x-1]])) {
                        eqs = weekEqs[info.filter(isUnique)[x]];
                    } else {
                        eqs = weekEqs[info.filter(isUnique)[x]] - weekEqs[info.filter(isUnique)[x-1]];
                    }
                    objEqs[info.filter(isUnique)[x]] = eqs;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'PORTE' && date[y] === info.filter(isUnique)[x]) {
                    weekPorte[info.filter(isUnique)[x]] = ++nbPorte;
                    if (isNaN(weekPorte[info.filter(isUnique)[x-1]])) {
                        porte = weekPorte[info.filter(isUnique)[x]];
                    } else {
                        porte = weekPorte[info.filter(isUnique)[x]] - weekPorte[info.filter(isUnique)[x-1]];
                    }
                    objPorte[info.filter(isUnique)[x]] = porte;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'FREIN' && date[y] === info.filter(isUnique)[x]) {
                    weekFrein[info.filter(isUnique)[x]] = ++nbFrein;
                    if (isNaN(weekFrein[info.filter(isUnique)[x-1]])) {
                        frein = weekFrein[info.filter(isUnique)[x]];
                    } else {
                        frein = weekFrein[info.filter(isUnique)[x]] - weekFrein[info.filter(isUnique)[x-1]]
                    }
                    objFrein[info.filter(isUnique)[x]] = frein;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'ComptagePassagers' && date[y] === info.filter(isUnique)[x]) {
                    weekCompPass[info.filter(isUnique)[x]] = ++nbCompPass;
                    if (isNaN(weekCompPass[info.filter(isUnique)[x-1]])) {
                        compPass = weekCompPass[info.filter(isUnique)[x]];
                    } else {
                        compPass = weekCompPass[info.filter(isUnique)[x]] - weekCompPass[info.filter(isUnique)[x-1]]
                    }
                    objCompPass[info.filter(isUnique)[x]] = compPass;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'AFFICHEUR' && date[y] === info.filter(isUnique)[x]) {
                    weekAff[info.filter(isUnique)[x]] = ++nbAff;
                    if (isNaN(weekAff[info.filter(isUnique)[x-1]])) {
                        aff = weekAff[info.filter(isUnique)[x]];
                    } else {
                        aff = weekAff[info.filter(isUnique)[x]] - weekAff[info.filter(isUnique)[x-1]];
                    }
                    objAff[info.filter(isUnique)[x]] = aff;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && (systeme[y].split('_')[2] === 'LECTEUR' && systeme[i].split('_')[3] === 'BADGE') && date[y] === info.filter(isUnique)[x]) {
                    weekLect[info.filter(isUnique)[x]] = ++nbLect;
                    if (isNaN(weekLect[info.filter(isUnique)[x-1]])) {
                        lect = weekLect[info.filter(isUnique)[x]];
                    } else {
                        lect = weekLect[info.filter(isUnique)[x]] - weekLect[info.filter(isUnique)[x-1]];
                    }
                    objLect[info.filter(isUnique)[x]] = lect;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'ECLAIRAGE' && date[y] === info.filter(isUnique)[x]) {
                    weekEcl[info.filter(isUnique)[x]] = ++nbEcl;
                if (isNaN(weekEcl[info.filter(isUnique)[x-1]])) {
                    ecl = weekEcl[info.filter(isUnique)[x]];
                } else {
                    ecl = weekEcl[info.filter(isUnique)[x]] - weekEcl[info.filter(isUnique)[x-1]];
                }
                objEcl[info.filter(isUnique)[x]] = ecl;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'PUPITRE' && date[y] === info.filter(isUnique)[x]) {
                    weekPup[info.filter(isUnique)[x]] = ++nbPup;
                    if (isNaN(weekPup[info.filter(isUnique)[x-1]])) {
                        pup = weekPup[info.filter(isUnique)[x]];
                    } else {
                        pup = weekPup[info.filter(isUnique)[x]] - weekPup[info.filter(isUnique)[x-1]];
                    }
                    objPup[info.filter(isUnique)[x]] = pup;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'SONO' && date[y] === info.filter(isUnique)[x]) {
                    weekSono[info.filter(isUnique)[x]] = ++nbSono;
                    if (isNaN(weekSono[info.filter(isUnique)[x-1]])) {
                        sono = weekSono[info.filter(isUnique)[x]];
                    } else {
                        sono = weekSono[info.filter(isUnique)[x]] - weekSono[info.filter(isUnique)[x-1]];
                    }
                    objSono[info.filter(isUnique)[x]] = sono;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'COUPLEUR' && date[y] === info.filter(isUnique)[x]) {
                    weekCoup[info.filter(isUnique)[x]] = ++nbCoup;
                    if (isNaN(weekCoup[info.filter(isUnique)[x-1]])) {
                        coup = weekCoup[info.filter(isUnique)[x]];
                    } else {
                        coup = weekCoup[info.filter(isUnique)[x]] - weekCoup[info.filter(isUnique)[x-1]];
                    }
                    objCoup[info.filter(isUnique)[x]] = coup;
                } else if (ligne[z] === rames[y] && systeme[y].split('_')[1] === 'H1' && systeme[y].split('_')[2] === 'STMAutonome' && date[y] === info.filter(isUnique)[x]) {
                    weekStm[info.filter(isUnique)[x]] = ++nbStm;
                    if (isNaN(weekStm[info.filter(isUnique)[x-1]])) {
                        stm = weekStm[info.filter(isUnique)[x]];
                    } else {
                        stm = weekStm[info.filter(isUnique)[x]] - weekStm[info.filter(isUnique)[x-1]];
                    }
                    objStm[info.filter(isUnique)[x]] = stm;
                }
            }
        }
    }

    var data = {
        "BS": objBS, "Climatisation": objClim, "Detection Incendie": objDetec, 
        "CCTV": objCctv, "TCMS": objTcms, "Traction": objTrac, "ATESS": objAtess, 
        "TDB": objTdb, "EMCO": objEmco, "EQS": objEqs, "Porte": objPorte, 
        "Frein": objFrein, "Comptage Passagers": objCompPass, "Afficheur": objAff, 
        "Lecteur Badge": objLect, "Eclairage": objEcl, "Pupitre": objPup, 
        "Sonorisation": objSono, "Compresseur": objComp, "STMAutonome": objStm, 
        "Coupleur": objCoup,
    }

    return(data);
}

exports.getSystemByDayForWeek = function(array) {
    var statut = [];
    var libelle = [];
    var date = [];
    var rames = [];
    var info = [];
    var systeme = [];

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

    for (let i = 0; i != libelle.length; i++) {
        if (libelle[i].includes('_') == false) {
            systeme.push(libelle[i]);
        } else {
            if (libelle[i].split(' - ')[0].split('_')[2] ==='P4000') {
                systeme.push(libelle[i].slice(0, 23));
            } else if (libelle[i].split(' - ')[0].split('_')[2] === 'P400') {
                systeme.push(libelle[i].slice(0, 21));
            } else {
                systeme.push(libelle[i].split(' - ')[0]);
            }
        }
    }


    var weekData = {
        'L/j': {
            'H1':     weekH1(systeme, date, info),
        },
        'L': {
            'H1': weekH1ByLigneL(rames, systeme, date, info),
        },
        'J': {
            'H1': weekH1ByLigneJ(rames, systeme, date, info),
        }
    }

    console.log(weekData);
}