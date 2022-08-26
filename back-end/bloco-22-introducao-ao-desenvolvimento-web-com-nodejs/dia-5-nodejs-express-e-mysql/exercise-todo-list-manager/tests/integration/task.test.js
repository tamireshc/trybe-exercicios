const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../../src/app');
const connection = require('../../src/db/connection');
const taskDb = require('../../src/db/tasksDB')

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de task', function () {
    afterEach(() => {
        sinon.restore();
    });

    it('Testando o cadastro de uma task ', async function () {
        sinon.stub(connection, 'execute').resolves([{ insertId: 2 }]);
        // sinon.stub(taskDb, 'insert').resolves([]);

        const response = await chai
            .request(app)
            .post('/tasks')
            .send(
                {
                    nome: "estudar",
                    descricao: "estudar JS"
                }
            );

        console.log('body', response.body)

        expect(response.status).to.equal(201);
        expect(response.body).to.
            deep.equal({ message: `tarefa cadastrada com o id 2` });
    });

});