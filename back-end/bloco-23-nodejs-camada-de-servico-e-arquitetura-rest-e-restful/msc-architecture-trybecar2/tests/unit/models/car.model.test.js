const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const carModel = require('../../../src/models/car.model');

describe('Testes de unidade do model de cars', function () {
    it('Realizando uma operação INSERT com o model /cars', async function () {
        const expected = 1;
        sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

        const result = await carModel.addNewCar({
            model: 'Renault Sandero',
            color: 'Branco',
            licensePlate: 'NCA-0956',
        });

        expect(result).to.equal(expected);
    });

    it('Realizando uma operação SELECT com o id do car', async function () {
        sinon.stub(connection, 'execute').resolves([[{
            id: 2,
            model: 'Volkswagen Gol',
            color: 'Vermelho',
            licensePlate: 'DZG-4376',
        }]]);

        const result = await carModel.findCarById(2);
        expect(result).to.deep.equal({
            id: 2,
            model: 'Volkswagen Gol',
            color: 'Vermelho',
            licensePlate: 'DZG-4376',
        });
    });

    afterEach(sinon.restore);
});