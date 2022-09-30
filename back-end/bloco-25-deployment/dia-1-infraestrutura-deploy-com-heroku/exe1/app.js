const express = require('express');

const app = express();

app.use(express.json())

const PORT = process.env.PORT || 3001
const MESSAGE = process.env.MESSAGE || 'Está vivo!!!'

app.get('/', (req, res) => res.status(200).json(MESSAGE));



app.listen(PORT, async () => {
    console.log(`API  está sendo executada na porta ${PORT}`);
  
  });

module.exports = app;