// src/Routes/Routes.ts

import { Router } from 'express';
import TransferController from '../Controllers/TransferController';
import KeyController from '../Controllers/KeyController';

const routes = Router();

routes.post(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next).create(),
);

routes.get(
  '/transfer',
  (req, res, next) => new TransferController(req, res, next)
    .findAllPayments(req, res),
);

routes.get(
  '/transfer/:id',
  (req, res, next) => new TransferController(req, res, next)
    .findPaymentByKey(req, res),
);

routes.patch(
  '/transfer/:id',
  (req, res, next) => new TransferController(req, res, next)
    .reversalRequest(req, res),
);

routes.post(
  '/key/register',
  (req, res, next) => new KeyController(req, res, next).create(),
);

routes.get(
  '/key',
  (req, res, next) => new KeyController(req, res, next)
    .getAllKeysByOwer(req, res),
);

export default routes;