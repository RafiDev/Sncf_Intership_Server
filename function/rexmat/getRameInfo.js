function weekRamesInfo(rames) {
    var nb = 0;
    var objRame = {};
    var weekRame = {};
    var ligne = [
        '78L', '79L', '87L', '99L', '101L', '103L', '104L', '106L', '108L', 
        '112L', '116L', '118L', '120L', '126L', '128L', '130L', '132L', '134L',
        '144L', '150L', '152L', '154L', '157L', '159L', '160L', '161L', '162L',
        '163L', '166L', '168L', '169L', '171L', '172L', '197L', '199L', '201L',
        '202L', '203L', '204', '205L', '206L', '208L', '209L', '211L', '214L', 
        '215L', '216L', '217L', '218L', '220L', '221L', '226L', '227L', '234L', 
        '235', '236L', '238L', '239L', '240L', '241L', '242L', '245L', '246L', 
        '247L', '248L', '251L', '254L', '255L', '256L', '261L', '263L', '267L', 
        '268L', '271L', '272L', '273L', '274L', '275L', '276L', '277L', '278L', 
        '279L', '280L', '283L', '284L', '285L', '286L', '287L', '288L', '289L', 
        '295L', '316L', '80L', '81L', '86L', '88L', '110L', '114L', '122L',
        '124L', '136L', '146L', '147L', '148L', '149L', '151L', '153L', '155L',
        '156L', '158L', '164L', '165L', '167L', '17OL', '195L', '196L', '198L',
        '200L', '207L', '210L', '212L', '213L', '219L', '228L', '229L', '230L', 
        '231L', '232L', '233L', '237L', '243L', '244L', '249L', '250L', '252L', 
        '253L', '257L', '258L', '259L', '260L', '262L', '264L', '265L', '266L',
        '269L', '270L', '281L', '282L', '290L', '291L', '292L', '293L', '294L',
        '314L', '315L', '317L', '318L', '319L', '320L', '320L', '321L', '322L',
        '323L', '324L'
    ];

    for (let i = 0; i != ligne.length; i++) {
        for (let j = 0; j != rames.length; j++) {
            if (ligne[i] === rames[j]) {
                objRame[ligne[i]] = ++nb;
                if (isNaN(objRame[ligne[i-1]]) && objRame[ligne[0]]) {
                    weekRame[ligne[i]] = objRame[ligne[i]];
                } else {
                    weekRame[ligne[i]] = objRame[ligne[i]] - objRame[ligne[i-1]];
                }
            }
        }
    }

    return weekRame;
}

exports.getRameInfo = function(array) {
    var libelle = [];
    var rames = [];
    var systeme = [];

    for (let i = 0; i != array.length; i++) {
        libelle.push(array[i]['Libellé de l\'événement']);
        rames.push(array[i]['Engin impactée']);
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

    return (weekRamesInfo(rames));
}