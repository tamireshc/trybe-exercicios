import { IVehicleJustFly, IVehicleJustMove } from './interfaces';

export class FuturisticCar implements IVehicleJustFly, IVehicleJustMove {
    drive(): void { console.log('Drive a futuristic car'); }

    fly(): void { console.log('Flying a futuristic car'); }
}

export class Car implements IVehicleJustMove {
    drive(): void { console.log('Drive a car'); }
}

export class AirPlane implements IVehicleJustFly {
    fly(): void { console.log('Flying a AirPlane'); }
}