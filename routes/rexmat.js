const getInfoStateRames = require('../function/rexmat/getStateRames');
const getHierarchieByDayForWeek = require('../function/rexmat/getHierarchieByDayForWeek');
const getStatutbyDayForWeek = require('../function/rexmat/getStatutByDayForWeek');
const getSystemByDayForWeek = require('../function/rexmat/getSystemByDayForWeek');
const Rexmat = require('../models/rexmatModel');

module.exports = (app) => {
    var aws = require('aws-sdk');
    var multer = require('multer');
    var multerS3 = require('multer-s3');
    var fs = require('fs');
    var downloadsFolder = require('downloads-folder');
    var xlstojson = require("xls-to-json");
    var xlsxtojson = require("xlsx-to-json-lc");

    var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, downloadsFolder()) 
        },
        filename: function(req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var upload = multer({
        storage: storage,
        fileFilter: (req, file, cb) => {
            if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                return cb(new Error('Wrong extension type'));
            }
            cb(null, true);
        }
    }).single('file');


    app.post('/rexmat', (req, res) => {
        var exceltojson;
        upload(req, res, function(err){
            if (err) {
                res.json({error_code:1,err_desc:err});
                return;
            }
            if (!req.file) {
                res.json({error_code:1,err_desc:"No file passed"});
                return;
            }
            if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                exceltojson = xlsxtojson;
            } else {
                exceltojson = xlstojson;
            } 
            try {
                exceltojson({
                    input: req.file.path,
                    output: null,
                    lowerCaseHeaders: true
                }, function(err, result) {
                    if (err) {
                        return res.json({error_code:1,err_desc:err, data: null});
                    }
                    var rames = [];
                    var libelle = [];
                    var rameLibelle = [];
                    var systeme = [];
                    
                    var systemeH1 = [];
                    var systemeH2 = [];
                    var systemeH3 = [];
                    var systemeH4 = [];

                    var otherSysteme = [];
                    var nbOtherSysteme = 0;

                    var H1 = 0;
                    var H2 = 0;
                    var H3 = 0;
                    var H4 = 0;

                    var SET_H1 = 0;
                    var SET_H2 = 0;
                    var SET_H3 = 0;
                    var SET_H4 = 0;

                    var CBM_H1 = 0;
                    var CBM_H2 = 0;
                    var CBM_H3 = 0;
                    var CBM_H4 = 0;

                    var BS_H1 = 0;
                    var CLIMATISATION_H1 = 0;
                    var COMPRESSEUR_H1 = 0;
                    var DetectionIncendie_H1 = 0;
                    var CCTV_H1 = 0;
                    var TCMS_H1 = 0;
                    var TRACTION_H1 = 0;
                    var ATESS_H1 = 0;
                    var TDB_H1 = 0;
                    var EMCO_H1 = 0;
                    var EQS_H1 = 0;
                    var PORTE_H1 = 0;
                    var FREIN_H1 = 0;
                    var ComptagePassagers_H1 = 0;
                    var AFFICHEUR_H1 = 0;
                    var LecteurBadge_H1 = 0;
                    var ECLAIRAGE_H1 = 0;
                    var PUPITRE_H1 = 0;
                    var SONO_H1 = 0;
                    var STMAutonome_H1 = 0;
                    var COUPLEUR_H1 = 0;

                    var BS_H2 = 0;
                    var CLIMATISATION_H2 = 0;
                    var COMPRESSEUR_H2 = 0;
                    var DetectionIncendie_H2 = 0;
                    var CCTV_H2 = 0;
                    var TCMS_H2 = 0;
                    var TRACTION_H2 = 0;
                    var ATESS_H2 = 0;
                    var TDB_H2 = 0;
                    var EMCO_H2 = 0;
                    var EQS_H2 = 0;
                    var PORTE_H2 = 0;
                    var FREIN_H2 = 0;
                    var ComptagePassagers_H2 = 0;
                    var AFFICHEUR_H2 = 0;
                    var LecteurBadge_H2 = 0;
                    var ECLAIRAGE_H2 = 0;
                    var PUPITRE_H2 = 0;
                    var SONO_H2 = 0;
                    var STMAutonome_H2 = 0;
                    var COUPLEUR_H2 = 0;

                    var BS_H3 = 0;
                    var CLIMATISATION_H3 = 0;
                    var COMPRESSEUR_H3 = 0;
                    var DetectionIncendie_H3 = 0;
                    var CCTV_H3 = 0;
                    var TCMS_H3 = 0;
                    var TRACTION_H3 = 0;
                    var ATESS_H3 = 0;
                    var TDB_H3 = 0;
                    var EMCO_H3 = 0;
                    var EQS_H3 = 0;
                    var PORTE_H3 = 0;
                    var FREIN_H3 = 0;
                    var ComptagePassagers_H3 = 0;
                    var AFFICHEUR_H3 = 0;
                    var LecteurBadge_H3 = 0;
                    var ECLAIRAGE_H3 = 0;
                    var PUPITRE_H3 = 0;
                    var SONO_H3 = 0;
                    var STMAutonome_H3 = 0;
                    var COUPLEUR_H3 = 0;

                    var BS_H4 = 0;
                    var CLIMATISATION_H4 = 0;
                    var COMPRESSEUR_H4 = 0;
                    var DetectionIncendie_H4 = 0;
                    var CCTV_H4 = 0;
                    var TCMS_H4 = 0;
                    var TRACTION_H4 = 0;
                    var ATESS_H4 = 0;
                    var TDB_H4 = 0;
                    var EMCO_H4 = 0;
                    var EQS_H4 = 0;
                    var PORTE_H4 = 0;
                    var FREIN_H4 = 0;
                    var ComptagePassagers_H4 = 0;
                    var AFFICHEUR_H4 = 0;
                    var LecteurBadge_H4 = 0;
                    var ECLAIRAGE_H4 = 0;
                    var PUPITRE_H4 = 0;
                    var SONO_H4 = 0;
                    var STMAutonome_H4 = 0;
                    var COUPLEUR_H4 = 0;

                    for (let i = 0; i != result.length; i++) {
                        libelle.push(result[i]['Libellé de l\'événement']);
                        rames.push(result[i]['Engin impactée']);
                        rameLibelle.push(rames[i] + ' - ' + libelle[i]);
                    }

                    for (let i = 0; i != libelle.length; i++) {
                        if (libelle[i].includes('_') == false) {
                            otherSysteme.push(libelle[i]);
                            nbOtherSysteme++;
                        } else {
                            let tmp = libelle[i].split(' - ')[0].split('_')[2];
                            if (tmp ==='P4000') {
                                systeme.push(libelle[i].slice(0, 23));
                            } else if (libelle[i].split(' - ')[0].split('_')[2] === 'P400') {
                                systeme.push(libelle[i].slice(0, 21));
                            } else {
                                systeme.push(libelle[i].split(' - ')[0]);
                            }
                        }
                    } 

                    for (let i = 0; i != systeme.length; i++) {
                        if (systeme[i].split('_')[1] === 'H1') {
                            systemeH1.push(systeme[i]);
                            H1++;
                        } else if (systeme[i].split('_')[1] === 'H2') {
                            systemeH2.push(systeme[i]);
                            H2++;
                        } else if (systeme[i].split('_')[1] === 'H3') {
                            systemeH3.push(systeme[i]);
                            H3++;
                        } else if (systeme[i].split('_')[1] === 'H4') {
                            systemeH4.push(systeme[i]);
                            H4++;
                        }
                    }

                    for (var i = 0; i != systemeH1.length; i++) {
                        if (systemeH1[i].split('_')[0] === 'SET') {
                            if (systemeH1[i].split('_')[2] === 'BS') {
                                BS_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'CLIMATISATION') {
                                CLIMATISATION_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'COMPRESSEUR') {
                                COMPRESSEUR_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'Detection' && systemeH1[i].split('_')[3] ==='incendie') {
                                DetectionIncendie_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'CCTV') {
                                CCTV_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'TCMS') {
                                TCMS_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'TRACTION') {
                                TRACTION_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'ATESS') {
                                ATESS_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'TDB') {
                                TDB_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'EMCO') {
                                EMCO_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'EQS') {
                                EQS_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'PORTE') {
                                PORTE_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'FREIN') {
                                FREIN_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'ComptagePassagers') {
                                ComptagePassagers_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'AFFICHEUR') {
                                AFFICHEUR_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'LECTEUR' && systemeH1[i].split('_')[3] === 'BADGE') {
                                LecteurBadge_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'ECLAIRAGE') {
                                ECLAIRAGE_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'PUPITRE') {
                                PUPITRE_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'SONO') {
                                SONO_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'COUPLEUR') {
                                COUPLEUR_H1++;
                            } else if (systemeH1[i].split('_')[2] === 'STMAutonome') {
                                STMAutonome_H1++;
                            }
                            SET_H1++;
                        } else {
                            CBM_H1++;
                        }
                    }

                    for (var i = 0; i != systemeH2.length; i++) {
                        if (systemeH2[i].split('_')[0] === 'SET') {
                            if (systemeH2[i].split('_')[2] === 'BS') {
                                BS_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'CLIMATISATION') {
                                CLIMATISATION_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'COMPRESSEUR') {
                                COMPRESSEUR_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'Detection' && systemeH2[i].split('_')[3] ==='incendie') {
                                DetectionIncendie_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'CCTV') {
                                CCTV_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'TCMS') {
                                TCMS_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'TRACTION') {
                                TRACTION_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'ATESS') {
                                ATESS_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'TDB') {
                                TDB_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'EMCO') {
                                EMCO_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'EQS') {
                                EQS_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'PORTE') {
                                PORTE_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'FREIN') {
                                FREIN_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'ComptagePassagers') {
                                ComptagePassagers_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'AFFICHEUR') {
                                AFFICHEUR_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'LECTEUR' && systemeH2[i].split('_')[3] === 'BADGE') {
                                LecteurBadge_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'ECLAIRAGE') {
                                ECLAIRAGE_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'PUPITRE') {
                                PUPITRE_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'SONO') {
                                SONO_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'COUPLEUR') {
                                COUPLEUR_H2++;
                            } else if (systemeH2[i].split('_')[2] === 'STMAutonome') {
                                STMAutonome_H2++;
                            }
                            SET_H2++;
                        } else {
                            CBM_H2++;
                        }
                    }

                    for (var i = 0; i != systemeH3.length; i++) {
                        if (systemeH3[i].split('_')[0] === 'SET') {
                            if (systemeH3[i].split('_')[2] === 'BS') {
                                BS_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'CLIMATISATION') {
                                CLIMATISATION_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'COMPRESSEUR') {
                                COMPRESSEUR_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'Detection' && systemeH3[i].split('_')[3] ==='incendie') {
                                DetectionIncendie_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'CCTV') {
                                CCTV_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'TCMS') {
                                TCMS_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'TRACTION') {
                                TRACTION_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'ATESS') {
                                ATESS_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'TDB') {
                                TDB_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'EMCO') {
                                EMCO_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'EQS') {
                                EQS_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'PORTE') {
                                PORTE_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'FREIN') {
                                FREIN_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'ComptagePassagers') {
                                ComptagePassagers_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'AFFICHEUR') {
                                AFFICHEUR_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'LECTEUR' && systemeH3[i].split('_')[3] === 'BADGE') {
                                LecteurBadge_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'ECLAIRAGE') {
                                ECLAIRAGE_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'PUPITRE') {
                                PUPITRE_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'SONO') {
                                SONO_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'COUPLEUR') {
                                COUPLEUR_H3++;
                            } else if (systemeH3[i].split('_')[2] === 'STMAutonome') {
                                STMAutonome_H3++;
                            }
                            SET_H3++;
                        } else {
                            CBM_H3++;
                        }
                    }

                    for (var i = 0; i != systemeH4.length; i++) {
                        if (systemeH4[i].split('_')[0] === 'SET') {
                            if (systemeH4[i].split('_')[2] === 'BS') {
                                BS_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'CLIMATISATION') {
                                CLIMATISATION_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'COMPRESSEUR') {
                                COMPRESSEUR_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'Detection' && systemeH4[i].split('_')[3] ==='incendie') {
                                DetectionIncendie_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'CCTV') {
                                CCTV_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'TCMS') {
                                TCMS_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'TRACTION') {
                                TRACTION_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'ATESS') {
                                ATESS_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'TDB') {
                                TDB_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'EMCO') {
                                EMCO_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'EQS') {
                                EQS_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'PORTE') {
                                PORTE_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'FREIN') {
                                FREIN_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'ComptagePassagers') {
                                ComptagePassagers_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'AFFICHEUR') {
                                AFFICHEUR_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'LECTEUR' && systemeH4[i].split('_')[3] === 'BADGE') {
                                LecteurBadge_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'ECLAIRAGE') {
                                ECLAIRAGE_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'PUPITRE') {
                                PUPITRE_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'SONO') {
                                SONO_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'COUPLEUR') {
                                COUPLEUR_H4++;
                            } else if (systemeH4[i].split('_')[2] === 'STMAutonome') {
                                STMAutonome_H4++;
                            }
                            SET_H4++;
                        } else {
                            CBM_H4++;
                        }
                    }
                    
                    var data_H1 = {
                        "BS": BS_H1, "Climatisation": CLIMATISATION_H1, 
                        "Detection Incendie": DetectionIncendie_H1, "CCTV": CCTV_H1, 
                        "TCMS": TCMS_H1, "Traction": TRACTION_H1, 
                        "ATESS": ATESS_H1, "TDB": TDB_H1, 
                        "EMCO": EMCO_H1, "EQS": EQS_H1, 
                        "Porte": PORTE_H1, "Frein": FREIN_H1, 
                        "Comptage Passagers": ComptagePassagers_H1, "Afficheur": AFFICHEUR_H1, 
                        "Lecteur Badge": LecteurBadge_H1, "Eclairage": ECLAIRAGE_H1, 
                        "Pupitre": PUPITRE_H1, "Sonorisation": SONO_H1,
                        "Compresseur": COMPRESSEUR_H1, "STMAutonome": STMAutonome_H1,
                        "Coupleur": COUPLEUR_H1,
                    };

                    var data_H2 = {
                        "BS": BS_H2, "Climatisation": CLIMATISATION_H2, 
                        "Detection Incendie": DetectionIncendie_H2, "CCTV": CCTV_H2, 
                        "TCMS": TCMS_H2, "Traction": TRACTION_H2, 
                        "ATESS": ATESS_H2, "TDB": TDB_H2, 
                        "EMCO": EMCO_H2, "EQS": EQS_H2, 
                        "Porte": PORTE_H2, "Frein": FREIN_H2, 
                        "Comptage Passagers": ComptagePassagers_H2, "Afficheur": AFFICHEUR_H2, 
                        "Lecteur Badge": LecteurBadge_H2, "Eclairage": ECLAIRAGE_H2, 
                        "Pupitre": PUPITRE_H2, "Sonorisation": SONO_H2,
                        "Compresseur": COMPRESSEUR_H2, "STMAutonome": STMAutonome_H2,
                        "Coupleur": COUPLEUR_H2,
                    };

                    var data_H3 = {
                        "BS": BS_H3, "Climatisation": CLIMATISATION_H3, 
                        "Detection Incendie": DetectionIncendie_H3, "CCTV": CCTV_H3, 
                        "TCMS": TCMS_H3, "Traction": TRACTION_H3, 
                        "ATESS": ATESS_H3, "TDB": TDB_H3, 
                        "EMCO": EMCO_H3, "EQS": EQS_H3, 
                        "Porte": PORTE_H3, "Frein": FREIN_H3, 
                        "Comptage Passagers": ComptagePassagers_H3, "Afficheur": AFFICHEUR_H3, 
                        "Lecteur Badge": LecteurBadge_H3, "Eclairage": ECLAIRAGE_H3, 
                        "Pupitre": PUPITRE_H3, "Sonorisation": SONO_H3,
                        "Compresseur": COMPRESSEUR_H3, "STMAutonome": STMAutonome_H3,
                        "Coupleur": COUPLEUR_H3,
                    };

                    var data_H4 = {
                        "BS": BS_H4, "Climatisation": CLIMATISATION_H4, 
                        "Detection Incendie": DetectionIncendie_H4, "CCTV": CCTV_H4, 
                        "TCMS": TCMS_H4, "Traction": TRACTION_H4, 
                        "ATESS": ATESS_H4, "TDB": TDB_H4, 
                        "EMCO": EMCO_H4, "EQS": EQS_H4, 
                        "Porte": PORTE_H4, "Frein": FREIN_H4, 
                        "Comptage Passagers": ComptagePassagers_H4, "Afficheur": AFFICHEUR_H4, 
                        "Lecteur Badge": LecteurBadge_H4, "Eclairage": ECLAIRAGE_H4, 
                        "Pupitre": PUPITRE_H4, "Sonorisation": SONO_H4,
                        "Compresseur": COMPRESSEUR_H4, "STMAutonome": STMAutonome_H4,
                        "Coupleur": COUPLEUR_H4,
                    };

                    var data = {
                        "Hiérarchie de la flotte": {
                            "H1": H1,
                            "H2": H2,
                            "H3": H3,
                            "H4": H4
                        },
                        "Signalement par hiérarchie": {
                            "H1": data_H1,
                            "H2": data_H2,
                            "H3": data_H3,
                            "H4": data_H4
                        },
                        "Statut par hiérarchie": getInfoStateRames.getInfoStateRames(result),
                        "Autre libelle": {
                            "liste des autres libelles": otherSysteme,
                            "nombre des autres libelles": nbOtherSysteme - 1
                        },
                        "Liste signalement rexmat": rameLibelle,
                        "Hiérarchie de la flotte par date de création": getHierarchieByDayForWeek.getHierarchieByDayForWeek(result),
                        "Statut par hiérarchie par date de création": getStatutbyDayForWeek.getHierarchieByDayForWeek(result),
                        "Systeme par hiérarchie par date de création": getSystemByDayForWeek.getSystemByDayForWeek(result)
                    };
                    
                    const rexmat = new Rexmat();
                    rexmat.type = req.body.time;
                    rexmat.date = req.body.dateStart.slice(0, 15).concat(' => ', req.body.dateEnd.slice(0, 15));
                    rexmat.data = data;
                    rexmat.save()
                    res.json(data);
                    console.log('Data send to client');
                });
            } catch (e) {
                res.json({error_code:1,err_desc:"Corupted excel file"});
            }
        });
    });
    
    app.get('/getDataRexmatWeek', (req, res) => {
        Rexmat.find({ type: 'semaine' }, (err, result) => {
            if (err) res.send(err);
            let data = JSON.stringify(result);
            fs.writeFile(`${downloadsFolder()}/rexmatWeek.json`, data, (err) => {
                if (err) throw err;
                console.log('Data written to file');
            });
            res.send(result);
        });
    });
}