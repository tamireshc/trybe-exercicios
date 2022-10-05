// ./index.ts

import express from 'express';

const app = express();

app.use(express.json());

import userRouter from './routes/userRoutes'

const PORT = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Express + TypeScript')
});

app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
