import PlantModel from '../models/plantsModel';
import { IPlant } from '../interfaces/plantsInterface'

// export interface IPlant {
//     id: string,
//     breed: string,
//     needsSun: boolean,
//     origin: string,
//     size: number,
//     specialCare?: { waterFrequency: number }
// }

// export interface IOpsInfo { createdPlants: number }

// export interface ISpecialCare { waterFrequency: number }

export default class PlantService {
    plantModel: PlantModel

    constructor(public _plantModel: PlantModel) {
        this.plantModel = _plantModel;
    }

    public async getPlants(): Promise<IPlant[]> {
        const plantsRaw = await this.plantModel.getPlants();
        return plantsRaw;
    }

    public async getPlantById(id: string): Promise<IPlant | null> {
        const plantsRaw = await this.plantModel.getPlantById(id);
        return plantsRaw;
    }

    public async removePlantById(id: string): Promise<IPlant | null> {
        const plantsRaw = await this.plantModel.removePlantById(id);
        return plantsRaw;
    }

    public async editPlant(plantId: string, newPlant: IPlant): Promise<IPlant> {
        const plantsRaw = await this.plantModel.editPlant(plantId, newPlant);
        return plantsRaw;
    }

    public async savePlant(plant: IPlant): Promise<IPlant> {
        const plantsRaw = await this.plantModel.savePlant(plant);
        return plantsRaw;
    }
}