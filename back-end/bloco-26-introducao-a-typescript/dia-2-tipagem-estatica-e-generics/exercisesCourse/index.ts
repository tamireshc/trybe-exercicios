interface Car {
    _brand:string,
    _color:string,
    _doors:number,
    honk():void
    turnOn():void
    turnOff():void
    turn(direction:string):void
}

class Car {
    constructor(brand:string, color:string, doors:number){
        this._brand = brand,
        this._color = color,
        this._doors = doors 
    }

    honk=():void=>{
        console.log('buzina acionada')
    }
    turnOn=():void=>{
        console.log('carro ligado')
    }
    turnOff=():void=>{
        console.log('carro desligado')
    }

    turn =(direction:string):void=>{
        console.log(`carro virou na direçao ${direction}`)
    }
   
}

export default Car;

const carVolks = new Car('volkswagen', 'prata', 4)
carVolks.turnOn()
carVolks.turn('esquerda')
carVolks.honk()
carVolks.turnOff()

interface Pizza {
    flavor:string,
    slices: 4 | 6 |8
}

interface PizzaComun extends Pizza{
    flavor: 'Calabresa'| 'Frango' | 'Pepperoni',
}

interface PizzaVegetariana extends Pizza{
    flavor: 'Marguerita'| 'Palmito' | 'Cogumelo',
}

interface PizzaDoce extends Pizza{
    flavor: 'Nutela'| 'Goiabada com Queijo' | 'Marshmallow',
}

const pizza1:Pizza = {
    flavor:'Calabreza',
    slices:8,
}

const pizza2:Pizza = {
    flavor:'Marguerita',
    slices:6,
}

const pizza4:Pizza = {
    flavor:'Nutela',
    slices:4,
}

const pizzaOne:PizzaComun = {
    flavor:'Frango', 
    slices:4,
}

const pizzaTwo:PizzaDoce = {
    flavor:'Goiabada com Queijo', 
    slices:8,
}
type Func =<T>(value:T, index?:number, array?:T[])=>Boolean

const myFilter = <T> (array:T[], func:Func ):T[]=>{
    return array.filter(func)
}