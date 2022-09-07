const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const carService = require('../../../src/services/car.service');
const carController = require('../../../src/controllers/car.controller');

describe('Teste de unidade do carController', function () {
    it('Criando uma nova carro', async function () {
        const res = {};

        const req = {
            body: {
                model: 'Ford Ka',
                color: 'Amarelo',
                licensePlate: 'ABC1D2E',
            },
        };

        res.status = sinon.stub().returns(res);

        res.json = sinon.stub().returns();

        sinon
            .stub(carService, 'createCar')
            .resolves({
                type: null,
                message: {
                    id: 11,
                    model: 'Ford Ka',
                    color: 'Amarelo',
                    licensePlate: 'ABC1D2E',
                },

            });

        const result = await carController.createCar(req, res);
        console.log(result);

        expect(res.status).to.have.been.calledWith(201);

        expect(res.json).to.have.been.calledWith({
            id: 11,
            model: 'Ford Ka',
            color: 'Amarelo',
            licensePlate: 'ABC1D2E',
        });
    });
});