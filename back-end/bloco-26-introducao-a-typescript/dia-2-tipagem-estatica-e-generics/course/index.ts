type bird = {
    type: string,
    color:string,
}

type func =(x:number, y:number )=> number

type address ={
    street: string,
    number:number,
    city: string,
}

type stateMatery = 'liquidy' | 'solid' | 'gas'

type docIdent = string | number

type system = 'linux' | 'macOs' | 'windows'

type vogal = 'a'| 'e' | 'i' | 'o'| 'u'

interface Dog{
    _patas:string,
    _cor: string,
    latir(nome:string):string,
}

class Dog  {

    constructor(patas:string, cor:string){
        this._patas = patas,
        this._cor = cor
    }
    latir =(nome:string)=>{
        return `o cachorro de nome ${nome} e cor ${this._patas} latiu`
    }
}

interface Car {
    color:string,
    doors:number,
    velocidade (color:string, doors:number):string
}

interface feline {
    type:string,
    color:string,
    roar(type:string, color:string):string
}