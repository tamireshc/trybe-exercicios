export interface IFooCepAPI {
    getAddressByCEP(cep: string, number: number): Promise<string>
    getCepByAddress(address: string, number: number): Promise<string>
}

export interface IVehicleJustMove {
    drive(): void;
}

export interface IVehicleJustFly {
    fly(): void;
}

