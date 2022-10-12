// Plants.ts
export interface IPlant {
    id: string,
    breed: string,
    needsSun: boolean,
    origin: string,
    size: number,
    specialCare?: { waterFrequency: number }
}
export interface ISpecialCare { waterFrequency: number }

class Plant implements IPlant {
    id: string;
    breed: string;
    needsSun: boolean;
    origin: string;
    size: number;
    specialCare?: ISpecialCare
    waterFrequency?: number

    constructor(_breed: string, _needsSun: boolean,
        _origin: string, _size: number) {
        this.id = (Math.random() * 3000).toString();
        this.breed = _breed;
        this.needsSun = _needsSun;
        this.origin = _origin;
        this.size = _size;
        this.specialCare = {
            waterFrequency: this.needsSun
                ? this.size * 0.77 + (this.origin === 'Brazil' ? 8 : 7)
                : (this.size / 2) * 1.33 + (this.origin === 'Brazil' ? 8 : 7),
        };
    }
}

const plant1 = new Plant('sambambaia', true, 'Brasil', 130);
console.log(plant1);
console.log(typeof plant1);

export default Plant;