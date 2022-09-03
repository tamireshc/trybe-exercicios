const { expect } = require('chai');
const sinon = require('sinon');
const { createCar } = require('../../../src/services/car.service');

const carModel = require('../../../src/models/car.model');

describe('Testes de unidade do service de cars', function () {
    it('Utilizando a funcao createCar', async function () {
        sinon.stub(carModel, 'addNewCar').resolves(1);
        sinon.stub(carModel, 'findCarById').resolves({
            id: 1,
            model: 'Chevrolet Monza',
            color: 'Branco',
            licensePlate: 'ABC1A2B',
        });

        const result = await createCar({
            model: 'Chevrolet Monza',
            color: 'Branco',
            licensePlate: 'ABC1A2B',
        });

        expect(result).to.deep.equal(
            {
                type: null,
                message: {
                    id: 1,
                    model: 'Chevrolet Monza',
                    color: 'Branco',
                    licensePlate: 'ABC1A2B',
                },
            },
        );
    });

    afterEach(sinon.restore);
});