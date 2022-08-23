const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../src/app');

const sinon = require('sinon');
const fs = require('fs');


chai.use(chaiHttp);


const { expect } = chai;

const mockFile = JSON.stringify({
    brands: [
        {
            id: 1,
            name: 'Lindt & Sprungli',
        },
        {
            id: 2,
            name: 'Ferrero',
        },
        {
            id: 3,
            name: 'Ghirardelli',
        },
    ],
    chocolates: [
        {
            id: 1,
            name: 'Mint Intense',
            brandId: 1,
        },
        {
            id: 2,
            name: 'White Coconut',
            brandId: 1,
        },
        {
            id: 3,
            name: 'Mon Chéri',
            brandId: 2,
        },
        {
            id: 4,
            name: 'Mounds',
            brandId: 3,
        },
    ],
    "nextChocolateId": 5
});

describe('Usando o método GET em /chocolates', function () {
    beforeEach(function () {
        sinon.stub(fs.promises, 'readFile')
            .resolves(mockFile);
        sinon.stub(fs.promises, 'writeFile').resolves()
    });

    afterEach(function () {
        sinon.restore();
    });
    it('Retorna a lista completa de chocolates!', async function () {
        const output = [
            { id: 1, name: 'Mint Intense', brandId: 1 },
            { id: 2, name: 'White Coconut', brandId: 1 },
            { id: 3, name: 'Mon Chéri', brandId: 2 },
            { id: 4, name: 'Mounds', brandId: 3 },
        ];

        response = await chai
            .request(app)
            .get('/chocolates')
        expect(response.status).to.be.equal(200);
        expect(response.body.chocolates).to.deep.equal(output);
    });


    describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
        it('Retorna o chocolate Mounds', async function () {
            const response = await chai
                .request(app)
                .get('/chocolates/4');

            expect(response.status).to.be.equal(200);
            expect(response.body.chocolate).to.deep.equal([
                {
                    id: 4,
                    name: 'Mounds',
                    brandId: 3,
                }]);
        });
    });

    describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
        it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
            const response = await chai
                .request(app)
                .get('/chocolates/brand/1');

            expect(response.status).to.be.equal(200);
            expect(response.body.chocolates).to.deep.equal([
                {
                    id: 1,
                    name: 'Mint Intense',
                    brandId: 1,
                },
                {
                    id: 2,
                    name: 'White Coconut',
                    brandId: 1,
                },
            ]);
        });
    });

    describe('Usando o método GET em /chocolate/total para buscar total de chocolates', function () {
        it('Retorna o total de chocolates ', async function () {
            const response = await chai
                .request(app)
                .get('/chocolates/total');

            expect(response.status).to.be.equal(200);
            expect(response.body).to.deep.equal(
                {
                    totalChocolates: 4
                }
            );
        });
    });

    describe('usando o metodo GET em /chocolates/search', function () {
        it('Procure o chocolate com o name que contena Mo', async function () {
            const response = await chai
                .request(app)
                .get('/chocolates/search?name=Mo')
            expect(response.status).to.be.equal(200)
            expect(response.body).to.be.deep.equal({
                chocolateByName: [
                    {
                        id: 3,
                        name: "Mon Chéri",
                        brandId: 2
                    },
                    {
                        id: 4,
                        name: "Mounds",
                        brandId: 3
                    }
                ]
            })
        })
    })


    describe('usando o metodo POST em /chocolates', function () {


        it('cria um chocolate com sucesso', async function () {
            const response = await chai
                .request(app)
                .post('/chocolates')
                .send({
                    name: "Mint So Intense",
                    brandId: 2
                })
            expect(response.status).to.be.equal(201)
            expect(response.body.response).to.be.deep.equal({
                id: 5,
                name: "Mint So Intense",
                brandId: 2
            })
        })
    })

    // describe('usando o metodo DELETE em /chocolates', function () {
    //     it('cria um chocolate com sucesso', function () {



    //     })
    // })


});