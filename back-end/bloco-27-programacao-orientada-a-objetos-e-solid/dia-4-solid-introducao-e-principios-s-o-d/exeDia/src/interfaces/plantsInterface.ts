export interface IPlant {
    id: string,
    breed: string,
    needsSun: boolean,
    origin: string,
    size: number,
    specialCare?: { waterFrequency: number }
}

export interface IOpsInfo { createdPlants: number }

export interface ISpecialCare { waterFrequency: number }