const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const driverService = require('../../../src/services/driver.sevice');
const driverController = require('../../../src/controllers/driver.controller');
const driverMocks = require('./mocks/driver-exercises.controller.mock');

describe('Teste de unidade do driverController', function () {
    it('Buscando as viagens em aberto quando não tem nenhuma viagem cadastrada', async function () {
        // Este é o objeto de resposta (res) inicialmente é um objeto vazio
        // que será preenchido pelo express.
        const res = {};

        // Este é o objeto de requisição (req) que contém os dados necessários
        // para a requisição. Como a requisição é um GET não é esperado nenhum
        // dado durante a requisição.
        const req = {};

        // Criamos um stub para a função "res.status" que retorna o objeto res quando executada
        res.status = sinon.stub().returns(res);

        // Criamos um stub para a função "res.json" que não retorna nada
        res.json = sinon.stub().returns();

        // Criamos um stub para a chamada do service "driverService.getWaitingDriverTravels" que irá
        // retornar uma resposta com um array vazio
        sinon
            .stub(driverService, 'getWaitingDriverTravels')
            .resolves({ type: null, message: [] });

        // Realizamos a chamada para o controller simulando o recebimento de uma requisição
        await driverController.openTravel(req, res);

        // Validamos se o status code da resposta é igual a 200
        expect(res.status).to.have.been.calledWith(200);

        // Validamos se o json da resposta é igual a um array vazio
        expect(res.json).to.have.been.calledWith([]);
    });

    it('Buscando todos os motoristas cadastrados', async function () {
        const res = {};
        const req = {};

        res.status = sinon.stub().returns(res);

        res.json = sinon.stub().returns();

        // Criamos um stub para a chamada do service "driverService.getWaitingDriverTravels" que irá
        // retornar uma resposta com um array vazio
        sinon
            .stub(driverService, 'getDrivers')
            .resolves({ type: null, message: driverMocks.allDrivers });

        // Realizamos a chamada para o controller simulando o recebimento de uma requisição
        await driverController.getDriver(req, res);

        // Validamos se o status code da resposta é igual a 200
        expect(res.status).to.have.been.calledWith(200);

        // Validamos se o json da resposta é igual a um array vazio
        expect(res.json).to.have.been.calledWith(driverMocks.allDrivers);
    });

    it('Criando um novo motoristas com cardIds', async function () {
        const res = {};
        const req = {
            body: {
                name: 'Gus',
                carIds: [
                    1,
                    2,
                ],
            },
        };

        res.status = sinon.stub().returns(res);

        res.json = sinon.stub().returns();

        sinon
            .stub(driverService, 'createDriver')
            .resolves({ type: null, message: driverMocks.resultCreateDriverWhithcardIds });

        // Realizamos a chamada para o controller simulando o recebimento de uma requisição
        await driverController.createDriver(req, res);

        // Validamos se o status code da resposta é igual a 200
        expect(res.status).to.have.been.calledWith(201);

        // Validamos se o json da resposta é igual a um array vazio
        expect(res.json).to.have.been.calledWith(driverMocks.resultCreateDriverWhithcardIds);
    });
    afterEach(sinon.restore);
});