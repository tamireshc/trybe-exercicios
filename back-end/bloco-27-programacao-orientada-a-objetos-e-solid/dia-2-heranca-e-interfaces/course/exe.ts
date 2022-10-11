class Superclass {

    constructor(public _isSuper: boolean = true) {
    }

    public sayHellow() {
        console.log('olá mundo')
    }

    // protected sayHellow() {
    //     console.log('olá mundo')
    // }

    // private sayHellow() {
    //     console.log('olá mundo')
    // }

    get isSuper() {
        return this._isSuper
    }

    set isSuper(valor: boolean) {
        this._isSuper = valor
    }
}

class Subclass extends Superclass {
    constructor() {
        super()
        this.isSuper = false
    }

    public sayHellow2() {
        this.sayHellow()

    }
}

const myFunc = (obj: Superclass) => {
    if (obj.isSuper === true) {
        console.log('super')
    } else {
        console.log('sub')
    }

}

const super1 = new Superclass()
const sub1 = new Subclass()

myFunc(super1)
myFunc(sub1)

class Animal {
    constructor(protected birthDate: Date) { }
}
class Bird extends Animal {
    constructor(public name: string) {
        super(new Date())
    } // ERRO: constructor deve respeitar o contrato da superclasse
}

interface MyInterface {
    myNumber: number;
    myFunc(myParam: number): string
}

class MyClass implements MyInterface {
    constructor(public myNumber: number) { }
    myFunc(myParam: number): string {
        const total = myParam + this.myNumber
        return `o total é ${total}`
    }
}

const myClass1 = new MyClass(5);
console.log(myClass1.myFunc(5))

interface Logger {
    log(x: string): void
}

class ConsoleLogger implements Logger {
    log(x: string): void {
        console.log(x, 'loger1')
    }
}

class ConsoleLogger2 implements Logger {
    log(x: string): void {
        console.log(x, 'loger2')
    }
}

interface Database {
    y: Logger
    save(key: string, value: string): void
}

class ExampleDatabase implements Database {
    constructor(public y: Logger = new ConsoleLogger()) {

    }

    save(key: string, value: string) {
        this.y.log(value)
    }
}

const obj1 = new ConsoleLogger()
const obj2 = new ConsoleLogger2()

const obj3 = new ExampleDatabase(obj1).save('x', 'teste1')
const obj4 = new ExampleDatabase(obj2).save('x', 'teste2')
const obj5 = new ExampleDatabase().save('x', 'teste3')