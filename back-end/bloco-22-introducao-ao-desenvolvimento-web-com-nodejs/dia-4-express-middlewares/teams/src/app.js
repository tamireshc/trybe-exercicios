const express = require('express');
const validateTeam = require('../src/middlewares/validateTeam')
const apiCredentials = require('../src/middlewares/apiCredentials')
const morgan = require('morgan');

const app = express();

app.use(express.json())
app.use(morgan('dev'));

app.use(apiCredentials);


let nextId = 3;
const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
];

// const validateTeam = (req, res, next) => {
//     const requiredProperties = ['nome', 'sigla'];
//     if (requiredProperties.every((property) => property in req.body)) {
//         next(); // Chama o próximo middleware
//     } else {
//         res.sendStatus(400); // Ou já responde avisando que deu errado
//     }
// };

const existingId = (req, res, next) => {
    const { id } = req.params
    const findId = teams.find((item) => item.id === Number(id))
    if (findId) {
        next()
    } else {
        res.sendStatus(404)
    }
}
app.get('/teams', (req, res) => res.json(teams));

app.get('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    res.status(201).json(team);
});

// Arranja os middlewares para chamar validateTeam primeiro
app.post('/teams', validateTeam, (req, res) => {
    if (!req.teams.teams.includes(req.body.sigla) // confere se a sigla proposta está inclusa nos times autorizados
        && teams.every((t) => t.sigla !== req.body.sigla) // confere se já não existe um time com essa sigla
    ) {
        return res.sendStatus(401);
    }
    const team = { id: nextId, ...req.body };
    teams.push(team);
    nextId += 1;
    res.status(201).json(team);
});

app.put('/teams/:id', existingId, validateTeam, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    const updated = { id, ...req.body };
    teams.splice(index, 1, updated);
    res.status(201).json(updated);

});

app.delete('/teams/:id', existingId, (req, res) => {
    const id = Number(req.params.id);
    const team = teams.find(t => t.id === id);
    const index = teams.indexOf(team);
    teams.splice(index, 1);

});

module.exports = app;