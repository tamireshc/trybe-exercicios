const express = require('express');

const router = express.Router();

const taskDb = require('../db/tasksDB');

router.get('/', async (req, res) => {
  const [result] = await taskDb.findAll();
  res.status(200).json({ result });
});

router.post('/', async (req, res) => {
  const task = req.body;
  const [result] = await taskDb.insert(task);
  res.status(201).json({ message: `tarefa cadastrada com o id ${result.insertId}` });
});

router.put('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint PUT /tasks/:id ainda não foi implementado' });
});

router.delete('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint DELETE /tasks/:id ainda não foi implementado' });
});

router.get('/:id', (req, res) => {
  res.status(400).json({ message: 'O endpoint GET /tasks/:id ainda não foi implementado' });
});

module.exports = router;
