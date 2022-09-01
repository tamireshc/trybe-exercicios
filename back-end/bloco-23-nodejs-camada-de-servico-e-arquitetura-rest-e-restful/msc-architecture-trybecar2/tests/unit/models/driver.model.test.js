const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');

const driverModel = require('../../../src/models/driver.model');

describe('Testes de unidade do model de drivers', function () {
    it('Realizando uma operação SELECT com o model /drivers', async function () {
        const expected = [
            {
                id: 1,
                name: 'Liana Cisneiros',
            },
            {
                id: 2,
                name: 'Fábio Frazão',
            },
        ];
        sinon.stub(connection, 'execute').resolves([expected]);

        const result = await driverModel.listAllDrivers();

        expect(result).to.deep.equal(expected);
    });

    it('Realizando uma operação SELECT com o model /drivers/:id', async function () {
        const expected = {
            id: 1,
            name: 'Liana Cisneiros',
        };

        sinon.stub(connection, 'execute').resolves([[expected]]);

        const result = await driverModel.findDriverById(1);

        expect(result).to.deep.equal(expected);
    });

    it('Realizando uma operação INSERT com drivers/:id', async function () {
        const expected = 1;
        const driver = { name: 'Tamires Sousa' };
        sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);

        const result = await driverModel.createdNewDriver(driver.name);

        expect(result).to.deep.equal(expected);
    });

    afterEach(sinon.restore);
});
