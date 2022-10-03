

const convert =(valor:number, base:string, conversao:string):number=>{
    if(base === 'km' && conversao === 'hm'){
        return valor*10
    }
    return 0;

}

const area =(l:number):number=>{
return l*l
}

console.log(area(2))

let numero:number

const atribuirNumero =()=>{
    numero = 7
}

atribuirNumero()

console.log(numero)