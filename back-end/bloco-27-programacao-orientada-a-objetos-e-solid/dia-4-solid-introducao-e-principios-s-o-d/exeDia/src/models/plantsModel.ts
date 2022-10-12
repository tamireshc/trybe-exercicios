import fs from 'fs/promises';

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

export default class PlantModel {
    private readonly plantsFile = 'plantsData.json';
    private readonly opsFile = 'opsInfo.json';

    public async getPlants(): Promise<IPlant[]> {
        const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants: IPlant[] = JSON.parse(plantsRaw);
        return plants;
    }

    public async getPlantById(
        id: string,
    ): Promise<IPlant | null> {
        const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants: IPlant[] = JSON.parse(plantsRaw);

        const plantById = plants.find((plant) => plant.id === id);
        if (!plantById) return null;
        return plantById;
    }

    public async removePlantById(
        id: string,
    ): Promise<IPlant | null> {
        const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants: IPlant[] = JSON.parse(plantsRaw);

        const removedPlant = plants.find((plant) => plant.id === id);
        if (!removedPlant) return null;

        const newPlants = plants.filter((plant) => plant.id !== id);
        await fs.writeFile(this.plantsFile, JSON.stringify(newPlants));

        return removedPlant;
    }

    public async getPlantsThatNeedsSunWithId(
        id: string,
    ): Promise<IPlant[]> {
        const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants: IPlant[] = JSON.parse(plantsRaw);

        const filteredPlants = plants.filter((plant) =>
            plant.id === id
            && plant.needsSun
            && (!plant.specialCare
                || plant.specialCare.waterFrequency > 2));

        return filteredPlants;
    }

    public async editPlant(
        plantId: string,
        newPlant: IPlant,
    ): Promise<IPlant> {
        const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants: IPlant[] = JSON.parse(plantsRaw);

        const updatedPlants = plants.map((plant) => {
            if (plant.id === plantId) return newPlant;
            return plant;
        });

        await fs.writeFile(this.plantsFile, JSON.stringify(updatedPlants));
        return newPlant;
    }

    public async savePlant(
        plant: IPlant,
    ): Promise<IPlant> {
        const plantsRaw = await fs.readFile(this.plantsFile, { encoding: 'utf8' });
        const plants: IPlant[] = JSON.parse(plantsRaw);

        const newPlant = plant;
        plants.push(newPlant);

        const opsInfoRaw = await fs.readFile(this.opsFile, { encoding: 'utf8' });
        let { createdPlants }: IOpsInfo = JSON.parse(opsInfoRaw);
        createdPlants += 1;
        await fs.writeFile(this.opsFile, JSON.stringify({ createdPlants }));

        await fs.writeFile(this.plantsFile, JSON.stringify(plants));
        return newPlant;
    }
}