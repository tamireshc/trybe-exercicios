abstract class Person {
    constructor(protected _name: string, protected _birthday: Date) {
        // this.valideBirthday(_birthday)
        // this.valideName(_name)
        // this.valideAge(_birthday)
    }

    get name(): string {
        return this._name
    }

    set name(value) {
        this.valideName(value)
        this._name = value
    }

    get birthday(): Date {
        return this._birthday
    }

    set birthday(value) {
        this.valideBirthday(value)
        this._birthday = value
    }

    get age() {
        const age = new Date().getTime() - this._birthday.getTime()
        return age / 1000 / 60 / 60 / 24 / 365
    }

    private valideName(value: string) {
        if (value.length < 3) {
            throw new Error('invalide name')
        }
    }

    private valideAge(value: Date) {
        const age = new Date().getTime() - value.getTime()
        const ageYear = age / 1000 / 60 / 60 / 24 / 365
        if (ageYear > 200) {
            throw new Error('invalide data')
        }
    }

    private valideBirthday(value: Date) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('invalide data')
        }
        this.valideAge(value)
    }
}

class Subject {
    constructor(protected _name: string) {
        if (_name.length < 3) {
            throw new Error('nome invalido')
        }
    }
    get subname(): string {
        return this._name
    }
    set subname(value) {
        this._name = value
    }
}

interface matriculavel {
    generateRegistration(): string
}

class Employee extends Person implements matriculavel {
    protected _admissionDate: Date;
    protected _registration: string
    constructor(protected _salary: number, protected _name: string, protected _birthday: Date) {
        super(_name, _birthday)
        this._admissionDate = new Date();
        this._registration = this.generateRegistration()
    }
    generateRegistration(): string {
        const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        this._registration = alfabet.map((_) => alfabet[Math.round(Math.random() * 16)]).toString().replace(/,/g, '')
        return this._registration
    }
}

const subj1 = new Subject('Matemática')

class Teacher extends Employee {
    constructor(protected _admissionDate: Date, protected _salary: number, protected _name: string, _birthday: Date, protected _subject: Subject) {
        super(_salary, _name, _birthday)
        if (_salary < 0) {
            console.log('SALARIO NEGATIVO')
            throw new Error('SALARIO NEGATIVO')
        }
        if (_admissionDate.getTime() > new Date().getTime()) {
            console.log('data incorreta')
            throw new Error('data incorreta')
        }
    }
}

const teacher1 = new Teacher(new Date(2005, 2, 4), 2600, 'Pedro', new Date(1986, 3, 7), subj1)
console.log(teacher1.age)
console.log(teacher1.generateRegistration())
console.log(teacher1.name)
console.log(teacher1.birthday)

class Estudante extends Person {
    private _matricula: string;
    private _notasProvas: number[]
    private _notasTrabalhos: number[]

    constructor(np: number[], nt: number[], name: string, birthDate: Date) {
        const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        super(name, birthDate)
        this._matricula = alfabet.map((_) => alfabet[Math.round(Math.random() * 16)]).toString().replace(/,/g, '')
        this._notasProvas = np;
        this._notasTrabalhos = nt
        this.validateNotasETrabalhos(np, nt)
    }
    validateNotasETrabalhos(notasProvas: number[], notasTrabalhos: number[]) {
        if (notasProvas.length > 4 || notasTrabalhos.length > 2) {
            throw new Error('invalide data')
        }
    }
    somaNotas = (): number => {
        this.validateNotasETrabalhos(this._notasProvas, this._notasTrabalhos)
        const somaNotasProvas = this._notasProvas.reduce((a, b) => a + b)
        const somaNotasTrabalho = this._notasTrabalhos.reduce((a, b) => a + b)
        return somaNotasProvas + somaNotasTrabalho
    }
    mediaNotas = (): number => {
        this.validateNotasETrabalhos(this._notasProvas, this._notasTrabalhos)
        const somaNotasProvas = this._notasProvas.reduce((a, b) => a + b)
        const somaNotasTrabalho = this._notasTrabalhos.reduce((a, b) => a + b)
        return (somaNotasProvas + somaNotasTrabalho) / (this._notasProvas.length + this._notasTrabalhos.length)
    }

    generateEnrollment = (): string | void => {
        if (this._matricula.length < 16) {
            throw new Error('invalide matricula')
        }
        return this._matricula
    }
}

class Evaluation {
    constructor(public _score: number, protected _teacher: Teacher) {
    }
    // protected _type: 'prova' | 'trabalho'


    validateScore(value: number) {
        if (value < 0) throw new Error('numero negativo')
        if (value > 25) throw new Error('valor invalido')
    }

}

class Exam extends Evaluation {
    constructor(public _score: number, protected _teacher: Teacher) {
        super(_score, _teacher)
        this.validateScore(_score)
    }

    get score(): number {
        return this._score
    }

    set score(value) {
        this.validateScore(value)
        this._score = value
    }

    get teacher(): Teacher {
        return this._teacher
    }
}
class Work extends Evaluation {
    constructor(public _score: number, protected _teacher: Teacher) {
        super(_score, _teacher)
    }

    get score(): number {
        return this._score
    }

    set score(value) {
        this.validateScore(value)
        this._score = value
    }

    get teacher(): Teacher {
        return this._teacher
    }

    validateScore(value: number) {
        if (value < 0) throw new Error('numero negativo')
        if (value > 50) throw new Error('valor invalido')
    }
}

const exam1 = new Exam(22, teacher1)
const work1 = new Work(35, teacher1)

class EvaluationResult {
    constructor(protected _evaluation: Evaluation, protected _score: number) {

    }
    get score() {
        return this._score
    }

    set score(value: number) {
        this.validateScore(value)
        this._score = value
    }

    validateScore(value: number) {
        if (value < 0) throw new Error('numero negativo')
        if (value > this._evaluation._score) throw new Error('valor incorreto')

    }
}
