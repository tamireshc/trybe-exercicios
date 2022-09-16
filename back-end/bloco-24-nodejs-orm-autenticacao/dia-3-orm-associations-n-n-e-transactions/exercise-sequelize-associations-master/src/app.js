const express = require('express');

const patientController = require('./controllers/patientsController');
const plansController = require('./controllers/plansControllers');
const surgeriesController = require('./controllers/surgeriesController');

const app = express();
app.use(express.json());

app.get('/patients', patientController.listAllPatientsWhithPlan);
app.get('/patients-surgeries', patientController.listAllPatientsWhithSurgeries);
app.get('/patients-surgeries-doctor', patientController.listAllPatientsWhithSurgeriesExcludeDoctor);
app.get('/plans-patients/:id', plansController.listPatientsForPlan);
app.post('/patients', patientController.createNewpatient);
app.get('/surgeries/:name', surgeriesController.listSurgerieForDoctor);

module.exports = app;