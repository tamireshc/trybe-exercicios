class Passenger {
    constructor(public nome: string, public cpf: number) { }
}

class ShippedItem {
    constructor(
        public nome: string,
        public id: number,
        public customerID: string,
    ) { }
}

class Flight {
    constructor(public num: number, public boardItems: (Passenger | ShippedItem)[]) { }

    Add(newboardItem: Passenger | ShippedItem): void {
        this.boardItems.push(newboardItem);
    }

    Remove(newboardItem: Passenger | ShippedItem): void {
        const index = this.boardItems.indexOf(newboardItem, 0);
        if (index > -1) {
            this.boardItems.splice(index, 1);
        }
    }
}

class Company {
    constructor(public nome: string, public flights: Flight[]) { }
    NewFlight(flightNum: number): void { }
    AddToFlight(flightNum: number, boardItem: Passenger | ShippedItem): void { }
    RemoveFromFlight(flightNum: number, boardItem: Passenger | ShippedItem): void { }
}

class TravelingCompany extends Company {
    constructor(public nome: string, public flights: Flight[]) {
        super(nome, flights);
    }
    NewFlight(flightNum: number): void {
        this.flights.push(new Flight(flightNum, []));
    }

    AddToFlight(flightNum: number, passenger: Passenger): void {
        const currentFlight = this.flights.find((f) => f.num === flightNum);
        if (currentFlight) {
            currentFlight.Add(passenger);
        }
    }

    RemoveFromFlight(flightNum: number, passenger: Passenger): void {
        const currentFlight = this.flights.find((f) => f.num === flightNum);
        if (currentFlight) {
            currentFlight.Remove(passenger);
        }
    }
}

class ShippingCompany extends Company {
    constructor(public nome: string, public flights: Flight[]) {
        super(nome, flights);
    }

    NewFlight(flightNum: number): void {
        this.flights.push(new Flight(flightNum, []));
    }

    AddToFlight(flightNum: number, item: ShippedItem): void {
        const currentFlight = this.flights.find((f) => f.num === flightNum);
        if (currentFlight) {
            currentFlight.Add(item);
        }
    }
}

class testeStatic {
    public static _nome: string;
    public _sobrenome: string

    constructor(_sobrenome: string) {
        this._sobrenome = _sobrenome

    }

    public static set nome(value: string) {
        testeStatic._nome = value
    }

    public set sobrenome(value: string) {
        this._sobrenome = value
    }
}
class teste2 extends testeStatic {

}
console.log(testeStatic._nome)
testeStatic.nome = 'tamires'
console.log(testeStatic._nome)
testeStatic.nome = 'yuri'
console.log(testeStatic._nome)
const obj = new testeStatic('batista')
console.log(obj._sobrenome)

obj.sobrenome = 'sousa'
console.log(obj._sobrenome)

console.log(teste2._nome)

