const { expect } = require('chai');
const sinon = require('sinon');
const { getDrivers, createDriver } = require('../../../src/services/driver.sevice');

const driverModel = require('../../../src/models/driver.model');
const carModel = require('../../../src/models/car.model');

describe('Testes de unidade do service de drivers', function () {
    it('Utilizando a funcao getDrivers', async function () {
        sinon.stub(driverModel, 'listAllDrivers').resolves([{
            id: 1,
            name: 'Liana Cisneiros',
        }]);

        const result = await getDrivers();

        expect(result).to.deep.equal(
            {
                type: null,
                message: [
                    {
                        id: 1,
                        name: 'Liana Cisneiros',
                    },
                ],
            },
        );
    });

    it('Utilizando a funcao createDrivers retorna um erro com um nome inválido', async function () {
        const result = await createDriver('Ta');

        expect(result).to.deep.equal(
            {
                type: 'INVALID_VALUE',
                message: '"name" length must be at least 3 characters long',
            },
        );
    });

    it('Utilizando createDrivers retorna erro quando carId não é array', async function () {
        const result = await createDriver('Tamires', 'xx');
        expect(result).to.deep.equal(
            {
                type: 'INVALID_VALUE',
                message: '"value" must be an array',
            },
        );
    });

    it('Utilizando createDrivers retorna erro com uma lista carros inválida', async function () {
        sinon.stub(carModel, 'findCarById').resolves([

            undefined,
        ]);
        const result = await createDriver('Tamires', [99]);
        expect(result).to.deep.equal(
            {
                type: 'CAR_NOT_FOUND',
                message: 'Some car is not found',
            },
        );
    });

    it('Utilizando createDrivers retorna  o motorista cadastrado sem cardIds', async function () {
        sinon.stub(driverModel, 'createdNewDriver').resolves(15);
        const result = await createDriver('yuri');
        console.log('rsult', result);
        expect(result).to.deep.equal(
            {
                type: null,
                message: 15,
            },
        );
    });

    it('Utilizando createDrivers retorna  o motorista cadastrado com cardIds', async function () {
        sinon.stub(driverModel, 'createdNewDriver').resolves(15);
        sinon.stub(driverModel, 'findDriverById').resolves({ id: 15, name: 'yuri' });
        sinon.stub(carModel, 'findCarById').resolves({
            id: 2,
            model: 'Volkswagen Gol',
            color: 'Vermelho',
            licensePlate: 'DZG-4376',
        });

        const result = await createDriver('yuri', [2]);
        console.log('rsult', result);
        expect(result).to.deep.equal(
            {
                type: null,
                message: {
                    id: 15,
                    name: 'yuri',
                    cars: [
                        {
                            id: 2,
                            model: 'Volkswagen Gol',
                            color: 'Vermelho',
                            licensePlate: 'DZG-4376',
                        },

                    ],
                },
            },
        );
    });

    afterEach(sinon.restore);
});