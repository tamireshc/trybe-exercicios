"use strict";
const convert = (valor, base, conversao) => {
    if (base === 'km' && conversao === 'hm') {
        return valor * 10;
    }
    return 0;
};
const area = (l) => {
    return l * l;
};
