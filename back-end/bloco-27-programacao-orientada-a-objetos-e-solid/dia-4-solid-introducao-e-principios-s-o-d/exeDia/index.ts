import express from 'express';
import PlantController from './src/controllers/plantController';

const app = express();

app.use(express.json());

const PORT = 3001;

app.get('/plants', new PlantController().getPlants);
app.get('/plant/:id', new PlantController().getPlantById);
app.post('/plant', new PlantController().savePlant);
app.delete('/plant/:id', new PlantController().removePlantById);
app.put('/plant/:id', new PlantController().editPlant);

app.listen(PORT, async () => {
    console.log(`API está sendo executada na porta ${PORT}`);
});

export default app;