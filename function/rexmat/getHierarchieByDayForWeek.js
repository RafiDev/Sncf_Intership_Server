function isUnique(item, position, array) {
    return array.indexOf(item) === position;
}

function weekH1(libelle, date, info) {
    var day = 0;
    var weekData = {};
    var obj = {};
    var test = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0; i != libelle.length && i != date.length; i++) {
            if (libelle[i].split('_')[1] === 'H1' && date[i] === info.filter(isUnique)[j]) {
                weekData[info.filter(isUnique)[j]] = ++day;
                if (isNaN(weekData[info.filter(isUnique)[j-1]])) {
                    test = weekData[info.filter(isUnique)[j]];
                } else {
                    test = weekData[info.filter(isUnique)[j]] - weekData[info.filter(isUnique)[j-1]];
                }
                obj[info.filter(isUnique)[j]] = test;
            }
        }
    }

    return obj;
}

function weekH2(libelle, date, info) {
    var day = 0;
    var weekData = {};
    var obj = {};
    var test = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0; i != libelle.length && i != date.length; i++) {
            if (libelle[i].split('_')[1] === 'H2' && date[i] === info.filter(isUnique)[j]) {
                weekData[info.filter(isUnique)[j]] = ++day;
                if (isNaN(weekData[info.filter(isUnique)[j-1]])) {
                    test = weekData[info.filter(isUnique)[j]];
                } else {
                    test = weekData[info.filter(isUnique)[j]] - weekData[info.filter(isUnique)[j-1]];
                }
                obj[info.filter(isUnique)[j]] = test;
            }
        }
    }

    return obj;
}

function weekH3(libelle, date, info) {
    var day = 0;
    var weekData = {};
    var obj = {};
    var test = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0; i != libelle.length && i != date.length; i++) {
            if (libelle[i].split('_')[1] === 'H3' && date[i] === info.filter(isUnique)[j]) {
                weekData[info.filter(isUnique)[j]] = ++day;
                if (isNaN(weekData[info.filter(isUnique)[j-1]])) {
                    test = weekData[info.filter(isUnique)[j]];
                } else {
                    test = weekData[info.filter(isUnique)[j]] - weekData[info.filter(isUnique)[j-1]];
                }
                obj[info.filter(isUnique)[j]] = test;
            }
        }
    }

    return obj;
}

function weekH4(libelle, date, info) {
    var day = 0;
    var weekData = {};
    var obj = {};
    var test = 0;

    for (let j = 0; j != info.filter(isUnique).length; j++) {
        for (let i = 0; i != libelle.length && i != date.length; i++) {
            if (libelle[i].split('_')[1] === 'H4' && date[i] === info.filter(isUnique)[j]) {
                weekData[info.filter(isUnique)[j]] = ++day;
                if (isNaN(weekData[info.filter(isUnique)[j-1]])) {
                    test = weekData[info.filter(isUnique)[j]];
                } else {
                    test = weekData[info.filter(isUnique)[j]] - weekData[info.filter(isUnique)[j-1]];
                }
                obj[info.filter(isUnique)[j]] = test;
            }
        }
    }

    return obj;
}

function weekH1ByLigneL(rames, libelle, date, info) {
    var weekDataL = {};
    var objL = {};
    var testL = 0;
    var dataL = 0;
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
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataL[info.filter(isUnique)[x]] = ++dataL;
                    if (isNaN(weekDataL[info.filter(isUnique)[x - 1]])) {
                        testL = weekDataL[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataL[info.filter(isUnique)[x + 1]])) {
                        testL = weekDataL[info.filter(isUnique)[x]];
                    } else {
                        testL = weekDataL[info.filter(isUnique)[x]] - weekDataL[info.filter(isUnique)[x-1]];
                    }
                    objL[info.filter(isUnique)[x]] = testL;
                }
            }
        }
    }

    return(objL);
}

function weekH1ByLigneJ(rames, libelle, date, info) {
    var weekDataJ = {};
    var objJ = {};
    var testJ = 0;
    var dataJ = 0;
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
                    && libelle[y].split('_')[1] === 'H1' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataJ[info.filter(isUnique)[x]] = ++dataJ;
                    if (isNaN(weekDataJ[info.filter(isUnique)[x - 1]])) {
                        testJ = weekDataJ[info.filter(isUnique)[x]];
                    } else if (isNaN(weekDataL[info.filter(isUnique)[x + 1]])) {
                        testL = weekDataL[info.filter(isUnique)[x]];
                    } else {
                        testJ = weekDataJ[info.filter(isUnique)[x]] - weekDataJ[info.filter(isUnique)[x-1]];
                    }
                    objJ[info.filter(isUnique)[x]] = testJ;
                }
            }
        }
    }

    return(objJ);
}

function weekH2ByLigneL(rames, libelle, date, info) {
    var weekDataL = {};
    var objL = {};
    var testL = 0;
    var dataL = 0;
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
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataL[info.filter(isUnique)[x]] = ++dataL;
                    if (isNaN(weekDataL[info.filter(isUnique)[x - 1]])) {
                        testL = weekDataL[info.filter(isUnique)[x]];
                    } else {
                        testL = weekDataL[info.filter(isUnique)[x]] - weekDataL[info.filter(isUnique)[x-1]];
                    }
                    objL[info.filter(isUnique)[x]] = testL;
                }
            }
        }
    }

    return(objL);
}

function weekH2ByLigneJ(rames, libelle, date, info) {
    var weekDataJ = {};
    var objJ = {};
    var testJ = 0;
    var dataJ = 0;
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
                    && libelle[y].split('_')[1] === 'H2' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataJ[info.filter(isUnique)[x]] = ++dataJ;
                    if (isNaN(weekDataJ[info.filter(isUnique)[x - 1]])) {
                        testJ = weekDataJ[info.filter(isUnique)[x]];
                    } else {
                        testJ = weekDataJ[info.filter(isUnique)[x]] - weekDataJ[info.filter(isUnique)[x-1]];
                    }
                    objJ[info.filter(isUnique)[x]] = testJ;
                }
            }
        }
    }

    return(objJ);
}

function weekH3ByLigneL(rames, libelle, date, info) {
    var weekDataL = {};
    var objL = {};
    var testL = 0;
    var dataL = 0;
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
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataL[info.filter(isUnique)[x]] = ++dataL;
                    if (isNaN(weekDataL[info.filter(isUnique)[x - 1]])) {
                        testL = weekDataL[info.filter(isUnique)[x]];
                    } else {
                        testL = weekDataL[info.filter(isUnique)[x]] - weekDataL[info.filter(isUnique)[x-1]];
                    }
                    objL[info.filter(isUnique)[x]] = testL;
                }
            }
        }
    }

    return(objL);
}

function weekH3ByLigneJ(rames, libelle, date, info) {
    var weekDataJ = {};
    var objJ = {};
    var testJ = 0;
    var dataJ = 0;
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
                    && libelle[y].split('_')[1] === 'H3' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataJ[info.filter(isUnique)[x]] = ++dataJ;
                    if (isNaN(weekDataJ[info.filter(isUnique)[x - 1]])) {
                        testJ = weekDataJ[info.filter(isUnique)[x]];
                    } else {
                        testJ = weekDataJ[info.filter(isUnique)[x]] - weekDataJ[info.filter(isUnique)[x-1]];
                    }
                    objJ[info.filter(isUnique)[x]] = testJ;
                }
            }
        }
    }

    return(objJ);
}

function weekH4ByLigneL(rames, libelle, date, info) {
    var weekDataL = {};
    var objL = {};
    var testL = 0;
    var dataL = 0;
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
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataL[info.filter(isUnique)[x]] = ++dataL;
                    if (isNaN(weekDataL[info.filter(isUnique)[x - 1]])) {
                        testL = weekDataL[info.filter(isUnique)[x]];
                    } else {
                        testL = weekDataL[info.filter(isUnique)[x]] - weekDataL[info.filter(isUnique)[x-1]];
                    }
                    objL[info.filter(isUnique)[x]] = testL;
                }
            }
        }
    }

    return(objL);
}

function weekH4ByLigneJ(rames, libelle, date, info) {
    var weekDataJ = {};
    var objJ = {};
    var testJ = 0;
    var dataJ = 0;
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
                    && libelle[y].split('_')[1] === 'H4' 
                    && date[y] === info.filter(isUnique)[x]) {
                    weekDataJ[info.filter(isUnique)[x]] = ++dataJ;
                    if (isNaN(weekDataJ[info.filter(isUnique)[x - 1]])) {
                        testJ = weekDataJ[info.filter(isUnique)[x]];
                    } else {
                        testJ = weekDataJ[info.filter(isUnique)[x]] - weekDataJ[info.filter(isUnique)[x-1]];
                    }
                    objJ[info.filter(isUnique)[x]] = testJ;
                }
            }
        }
    }

    return(objJ);
}

exports.getHierarchieByDayForWeek = function(array) {
    var libelle = [];
    var date = [];
    var rames = [];
    var info = [];

    for (let i = 0; i != array.length; i++) {
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
            'H1': weekH1(libelle, date, info),
            'H2': weekH2(libelle, date, info),
            'H3': weekH3(libelle, date, info),
            'H4': weekH4(libelle, date, info)
        },
        'L': {
            'H1': weekH1ByLigneL(rames, libelle, date, info),
            'H2': weekH2ByLigneL(rames, libelle, date, info),
            'H3': weekH3ByLigneL(rames, libelle, date, info),
            'H4': weekH4ByLigneL(rames, libelle, date, info),
        }, 
        'J': {
            'H1': weekH1ByLigneJ(rames, libelle, date, info),
            'H2': weekH2ByLigneJ(rames, libelle, date, info),
            'H3': weekH3ByLigneJ(rames, libelle, date, info),
            'H4': weekH4ByLigneJ(rames, libelle, date, info),
        }
    }
    
    return weekData;
}