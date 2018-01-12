table = {
    '#B': '1',
    'B#': '1',
    'C': '1',
    'C#': '1s',
    '#C': '1s',
    'Db': '1s',
    'bD': '1s',
    'D': '2',
    'D#': '2s',
    '#D': '2s',
    'Eb': '2s',
    'bE': '2s',
    'E': '3',
    'bF': '3',
    'Fb': '3',
    'E#': '4',
    '#E': '4',
    'F': '4',
    'F#': '4s',
    '#F': '4s',
    'Gb': '4s',
    'bG': '4s',
    'G': '5',
    'G#': '5s',
    '#G': '5s',
    'Ab': '5s',
    'bA': '5s',
    'A': '6',
    'A#': '6s',
    '#A': '6s',
    'Bb': '6s',
    'bB': '6s',
    'B': '7',
    'bC': '7',
    'Cb': '7'
}
chord = {
    hohner: {
        name: 'Hohner Chord',
        upperB: {
            name: 'upperB',
            source: ['F#', 'A#', 'C#', 'F#', 'Db', 'F', 'Ab', 'Db', 'Ab', 'C', 'Eb', 'Ab', 'Eb', 'G', 'Bb', 'Eb', 'Bb', 'D', 'F', 'Bb', 'F', 'A', 'C', 'F', 'C', 'E', 'G', 'C', 'G', 'B', 'D', 'G', 'D', 'F#', 'A', 'D', 'A', 'C#', 'E', 'A', 'E', 'G#', 'B', 'E', 'B', 'D#', 'F#', 'B'],
            code: '4s6s1s4s1s45s1s5s12s5s2s56s2s6s246s46141351572524s6261s3635s7372s4s7',
            chords: ['F#', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B'],
        },
        upperD: {
            name: 'upperD',
            source: ['Db', 'F', 'Ab', 'B', 'Ab', 'C', 'Eb', 'Gb', 'Eb', 'G', 'Bb', 'Db', 'Bb', 'D', 'F', 'Ab', 'F', 'A', 'C', 'Eb', 'C', 'E', 'G', 'Bb', 'G', 'B', 'D', 'F', 'D', 'F#', 'A', 'C', 'A', 'C#', 'E', 'G', 'E', 'G#', 'B', 'D', 'B', 'D#', 'F#', 'A', 'F#', 'A#', 'C#', 'E'],
            code: '1s45s75s12s4s2s56s1s6s245s4612s1356s572424s6161s3535s7272s4s64s6s1s3',
            chords: ['Db7', 'Ab7', 'Eb7', 'Bb7', 'F7', 'C7', 'G7', 'D7', 'A7', 'E7', 'B7', 'F#7'],
        },
        lowerB: {
            name: 'lowerB',
            source: ['F#', 'A', 'C#', 'F#', 'Db', 'E', 'Ab', 'Db', 'Ab', 'B', 'Eb', 'Ab', 'Eb', 'Gb', 'Bb', 'Eb', 'Bb', 'Db', 'F', 'Bb', 'F', 'Ab', 'C', 'F', 'C', 'Eb', 'G', 'C', 'G', 'Bb', 'D', 'G', 'D', 'F', 'A', 'D', 'A', 'C', 'E', 'A', 'E', 'G', 'B', 'E', 'B', 'D', 'F#', 'B'],
            code: '4s61s4s1s35s1s5s72s5s2s4s6s2s6s1s46s45s1412s5156s25246261363573724s7',
            chords: ['F#m', 'Dbm', 'Abm', 'Ebm', 'Bbm', 'Fm', 'Cm', 'Gm', 'Dm', 'Am', 'Em', 'Bm'],
        },
        lowerD: {
            name: 'lowerD',
            source: ['Db', 'F', 'A', 'Db', 'Ab', 'B', 'D', 'F', 'Eb', 'G', 'B', 'Eb', 'Bb', 'Db', 'E', 'G', 'Bb', 'D', 'F#', 'Bb', 'C', 'Eb', 'Gb', 'A', 'G', 'B', 'D#', 'G', 'D', 'F', 'Ab', 'B', 'A', 'C#', 'F', 'A', 'E', 'G', 'Bb', 'Db', 'E', 'G#', 'C', 'E', 'F#', 'A', 'C', 'D#'],
            code: '1s461s5s7242s572s6s1s356s24s6s12s4s6572s5245s761s46356s1s35s134s612s',
            chords: ['Dbaug', 'Abdim7', 'Ebaug', 'Bbdim7', 'Bbaug', 'Cdim7', 'Gaug', 'Ddim7', 'Aaug', 'Edim7', 'Eaug', 'F#dim7'],
        },
    },
    suzuki: {
        name: 'Suzuki SCH-48',
        upperB: {
            name: 'upperB',
            source: ['Gb', 'Bb', 'Db', 'Gb', 'F', 'Ab', 'Db', 'F', 'Eb', 'Ab', 'C', 'Eb', 'Eb', 'G', 'Bb', 'Eb', 'F', 'Bb', 'D', 'F', 'F', 'A', 'C', 'F', 'E', 'G', 'C', 'E', 'G', 'B', 'D', 'G', 'F#', 'A', 'D', 'F#', 'E', 'A', 'C#', 'E', 'E', 'G#', 'B', 'E', 'F#', 'B', 'D#', 'F#'],
            code: '4s6s1s4s45s1s42s5s12s2s56s2s46s244614351357254s624s361s335s734s72s4s',
            chords: ['Gb', 'Db', 'Ab', 'Eb', 'Bb', 'F', 'C', 'G', 'D', 'A', 'E', 'B'],
        },
        upperD: {
            name: 'upperD',
            source: ['F', 'Ab', 'B', 'Db', 'Gb', 'Ab', 'C', 'Eb', 'Eb', 'G', 'Bb', 'Db', 'Ab', 'Bb', 'D', 'F', 'F', 'A', 'C', 'Eb', 'E', 'G', 'Bb', 'C', 'G', 'B', 'D', 'F', 'F#', 'A', 'C', 'D', 'G', 'A', 'C#', 'E', 'E', 'G#', 'B', 'D', 'A', 'B', 'D#', 'F#', 'F#', 'A#', 'C#', 'E'],
            code: '45s71s4s5s12s2s56s1s5s6s244612s356s157244s612561s335s72672s4s4s6s1s3',
            chords: ['Db7', 'Ab7', 'Eb7', 'Bb7', 'F7', 'C7', 'G7', 'D7', 'A7', 'E7', 'B7', 'F#7'],
        },
        lowerB: {
            name: 'lowerB',
            source: ['Gb', 'A', 'Db', 'Gb', 'E', 'Ab', 'Db', 'E', 'Eb', 'Ab', 'B', 'Eb', 'Eb', 'Gb', 'Bb', 'Eb', 'F', 'Bb', 'Db', 'F', 'F', 'Ab', 'C', 'F', 'Eb', 'G', 'C', 'Eb', 'G', 'Bb', 'D', 'G', 'F', 'A', 'D', 'F', 'E', 'A', 'C', 'E', 'E', 'G', 'B', 'E', 'F#', 'B', 'D', 'F#'],
            code: '4s61s4s35s1s32s5s72s2s4s6s2s46s1s445s142s512s56s254624361335734s724s',
            chords: ['Gbm', 'Dbm', 'Abm', 'Ebm', 'Bbm', 'Fm', 'Cm', 'Gm', 'Dm', 'Am', 'Em', 'Bm'],
        },
        lowerD: {
            name: 'lowerD',
            source: ['F', 'A', 'Db', 'F', 'Ab', 'B', 'D', 'F', 'Eb', 'G', 'B', 'Eb', 'G', 'Bb', 'Db', 'E', 'F#', 'A#', 'D', 'F#', 'Eb', 'Gb', 'A', 'C', 'G', 'B', 'D#', 'G', 'F', 'Ab', 'B', 'D', 'A', 'C#', 'F', 'A', 'E', 'G', 'Bb', 'Db', 'E', 'G#', 'C', 'E', 'F#', 'A', 'C', 'D#'],
            code: '461s45s7242s572s56s1s34s6s24s2s4s61572s545s7261s46356s1s35s134s612s',
            chords: ['Dbaug', 'Abdim7', 'Ebaug', 'Bbdim7', 'F#aug', 'Cdim7', 'Gaug', 'Ddim7', 'Aaug', 'Edim7', 'Eaug', 'F#dim7'],
        },
    }
}

function parseInput(input) {
    return new Promise((res, rej) => {
        let chars = {
            '1': 'C',
            '2': 'D',
            '3': 'E',
            '4': 'F',
            '5': 'G',
            '6': 'A',
            '7': 'B'
        };
        let check = input.replace(/\d+/g, m => chars[m]);
        let found = check.match(/\w+/g)
        res(found);
    })
}


function input2code(input) {
    return new Promise((res, rej) => {
        let code = []
        for (i of input) {
            code.push(table[i]);
        }
        res(code.join(''))
    })
}

function searchInChord(code) {
    return new Promise((res, rej) => {
        let regexp = new RegExp(code + '(?!s)', 'g');
        let result = {};
        for (brand of [chord.suzuki, chord.hohner]) {
            let temp = [];
            for (i of [brand.upperB, brand.upperD, brand.lowerB, brand.lowerD]) {
                obj = {
                    layer: i.name
                };
                let indices = [];
                while ((found = regexp.exec(i.code)) !== null) {
                    let index = regexp.lastIndex;
                    var msg = 'Found at ' + i.name + ' ' + index + '.';
                    indices.push(index);
                }
                obj.index = indices;
                if (indices.length > 0) {
                    temp.push(obj);
                }
            }
            result[brand.name] = temp;
        }
        res(result);
    })
}

function getChordNameFromCodeIndex(inputLength, found) {
    for (brand of ['hohner', 'suzuki']) {
        if (found[chord[brand].name].length > 0) {
            console.log(chord[brand].name);
            for (i of found[chord[brand].name]) {
                let code = chord[brand][i.layer].code;
                for (j of i.index) {
                    let codeFront = code.slice(0, j);
                    let numS = codeFront.match(/s/g).length;
                    let realIndex = j - numS - inputLength;
                    let residual = realIndex % 4
                    let setNum = (realIndex - residual) / 4;
                    if (residual + inputLength > 4) {
                        console.log(i.layer + ': ' + chord[brand][i.layer].chords[setNum] + '右' + (4 - residual) + ' ' + chord[brand][i.layer].chords[setNum + 1] + '左' + (inputLength - 4 + residual));
                    } else {
                        console.log(i.layer + ': ' + chord[brand][i.layer].chords[setNum] + ' ' + residual);
                    }
                    console.log(chord.suzuki[i.layer].source.slice(realIndex, realIndex + inputLength));
                }
            }
            console.log(('---------------'));

        }
    }
}

function perm(xs) {
    let ret = [];
    for (let i = 0; i < xs.length; i = i + 1) {
        let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));
        if (!rest.length) {
            ret.push([xs[i]])
        } else {
            for (let j = 0; j < rest.length; j = j + 1) {
                ret.push([xs[i]].concat(rest[j]))
            }
        }
    }
    return ret
};

async function main(input) {
    let inputLength = input.length;
    if (inputLength <= 4) {
        for (i of perm(input)) {
            let code = await input2code(i);
            let found = await searchInChord(code);

            await getChordNameFromCodeIndex(inputLength, found);
        }
    }
}

main(['G', 'A', 'D', 'C'])