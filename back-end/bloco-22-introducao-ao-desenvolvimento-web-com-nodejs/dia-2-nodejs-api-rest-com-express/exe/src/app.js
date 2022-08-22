const express = require('express');

const app = express();

app.use(express.json());

const activities = require('./actives');

app.get('/myActivities', (req, res) => res.status(200).json(activities));

app.get('/myActivities/:id', (req, res) => {
    const { id } = req.params;
    const index = activities.findIndex((item) => item.id === +id);
    const response = activities[index];

    res.status(200).json({
        response,

    });
});

app.get('/filter/myActivities', (req, res) => {
    const { status } = req.query;
    const response = activities.filter((item) => item.status === status);
    res.status(200).json({ response });
});

app.get('/search/myActivities', (req, res) => {
    const { q } = req.query;
    const response = activities.filter((item) => item.description.includes(q));
    res.status(200).json({ response });
});

module.exports = app;