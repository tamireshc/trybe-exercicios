import { Request, Response } from 'express';
import PlantService from '../services/plantsService';
import PlantModel from '../models/plantsModel';
import Plant from '../Plants';

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

export default class PlantController {
    plantService: PlantService

    constructor(public _plantService: PlantService = new PlantService(new PlantModel())) {
        this.plantService = _plantService;
    }

    public getPlants = async (_req: Request, res: Response): Promise<unknown> => {
        const plantsRaw = await this.plantService.getPlants();
        return res.status(200).json(plantsRaw);
    }

    public getPlantById = async (req: Request, res: Response): Promise<unknown> => {
        const { id } = req.params;
        console.log(id);
        const plantsRaw = await this.plantService.getPlantById(id);
        return res.status(200).json(plantsRaw);
    }

    public removePlantById = async (req: Request, res: Response): Promise<unknown> => {
        const { id } = req.params;
        const plantsRaw = await this.plantService.removePlantById(id);
        return res.status(202).json(plantsRaw);
    }

    public editPlant = async (req: Request, res: Response): Promise<unknown> => {
        const { id } = req.params;
        const { breed, needsSun, origin, size } = req.body;
        const newPlant = new Plant(breed, needsSun, origin, size);
        const plantsRaw = await this.plantService.editPlant(id, newPlant);
        return res.status(200).json(plantsRaw);
    }

    public savePlant = async (req: Request, res: Response): Promise<unknown> => {
        const { breed, needsSun, origin, size } = req.body;
        const newPlant = new Plant(breed, needsSun, origin, size);
        const plantsRaw = await this.plantService.savePlant(newPlant);
        return res.status(201).json(plantsRaw);
    }
}
