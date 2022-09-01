const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const driverCarModel = require('../../../src/models/driver_car.model');

describe('Driver_Car Model', function () {
    describe('Cadastra o relacionamento das pessoas motoristas com os carros', function () {
        it('com sucesso', async function () {
            sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
            const expected = 1;

            const result = await driverCarModel.insert(3, 5);
            expect(result).to.equal(expected);
        });
    });
    afterEach(sinon.restore);
});