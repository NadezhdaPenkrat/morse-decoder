const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = '';
    for(let i = 0; i < expr.length; i += 10) {
        let morse = '';
        let subs = expr.slice(i, i+10);
        if(subs === '**********') {result += ' '; continue;}
        for(let j = 0; j < 10; j += 2) {
            let subTwo = subs.slice(j, j+2);
            if(subTwo === '10') morse += '.';
            else if(subTwo === '11') morse += '-';
        }
        result += MORSE_TABLE[morse];
    }
    return result;
}

module.exports = {
    decode
}