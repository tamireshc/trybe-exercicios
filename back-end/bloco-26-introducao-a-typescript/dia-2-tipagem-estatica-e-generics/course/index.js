"use strict";
class Dog {
    constructor(patas, cor) {
        this.latir = (nome) => {
            return `o cachorro de nome ${nome} e cor ${this._patas} latiu`;
        };
        this._patas = patas,
            this._cor = cor;
    }
}
