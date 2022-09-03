const { expect } = require('chai');
const sinon = require('sinon');
const { getDrivers } = require('../../../src/services/driver.sevice');

const driverModel = require('../../../src/models/driver.model');

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

    afterEach(sinon.restore);
});