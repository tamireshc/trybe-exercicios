class Person {
    constructor(private _name: string, private _birthday: Date) {
        this.valideBirthday(_birthday)
        this.valideName(_name)
        this.valideAge(_birthday)
    }

    get personName(): string {
        return this._name
    }

    set personName(value) {
        this.valideName(value)
        this._name = value
    }

    get age() {
        const age = new Date().getTime() - this._birthday.getTime()
        return age / 1000 / 60 / 60 / 24 / 365
    }

    valideName(value: string) {
        if (value.length < 3) {
            throw new Error('invalide name')
        }
    }

    valideAge(value: Date) {
        const age = new Date().getTime() - value.getTime()
        const ageYear = age / 1000 / 60 / 60 / 24 / 365
        if (ageYear > 200) {
            throw new Error('invalide data')
        }
    }

    valideBirthday(value: Date) {
        if (value.getTime() > new Date().getTime()) {
            throw new Error('invalide data')
        }
        this.valideAge(value)

    }

}

const Tamires = new Person('tamires', new Date(1987, 10, 19))
const Joao = new Person('joao', new Date(2000, 10, 1))
console.log(Joao.personName)

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

const maria = new Estudante([10, 9, 10, 9], [10, 9], 'maria', new Date(1999, 9, 10))
console.log(maria.generateEnrollment())
console.log(maria.mediaNotas())
console.log(maria.somaNotas())
console.log(maria.age)

interface Employee {
    registration: string;
    salary: number;
    admissionDate: Date
    generateRegistration(): string
}

class Subject {
    constructor(private _name: string) {
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

const subj1 = new Subject('Matemática')
const subj2 = new Subject('História')
const subj3 = new Subject('Filosofia')

class Teacher extends Person implements Employee {
    registration: string
    salary: number;
    admissionDate: Date;
    subject: Subject;

    constructor(_name: string, _birthday: Date, _salary: number, _subject: Subject, _admissionDate: Date) {
        super(_name, _birthday)
        if (_salary < 0) {
            console.log('SALARIO NEGATIVO')
            throw new Error('SALARIO NEGATIVO')
        }
        if (_admissionDate.getTime() > new Date().getTime()) {
            console.log('data incorreta')
            throw new Error('data incorreta')
        }
        this.registration = ''
        this.salary = _salary
        this.admissionDate = _admissionDate
        this.subject = _subject
    }

    generateRegistration() {
        const alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
        this.registration = alfabet.map((_) => alfabet[Math.round(Math.random() * 16)]).toString().replace(/,/g, '')
        return this.registration
    }

}

const teacher1 = new Teacher('paula', new Date(1985, 10, 4), 2500, subj1, new Date(2005, 10, 4))
console.log(teacher1.admissionDate)
console.log(teacher1.age)
console.log(teacher1.generateRegistration())
console.log(teacher1.salary)
console.log(teacher1.subject.subname)
console.log(teacher1.personName)
