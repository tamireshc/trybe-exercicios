const express = require('express');
const cacaoTrybe = require('./cacaoTrybe')

const app = express();

app.use(express.json())

app.get('/chocolates', async (req, res) => {
    const chocolates = await cacaoTrybe.getAllChocolates();
    res.status(200).json({ chocolates })
})



app.get('/chocolates/brand/:brandId', async (req, res) => {
    const { brandId } = req.params
    const chocolates = await cacaoTrybe.getChocolatesByBrand(Number(brandId));
    res.status(200).json({ chocolates });
})

app.get('/chocolates/total', async (req, res) => {
    const chocolates = await cacaoTrybe.getTotalChocolates()
    res.status(200).json({ totalChocolates: chocolates })
})

app.get('/chocolates/search', async (req, res) => {
    const { name } = req.query
    const chocolateByName = await cacaoTrybe.getChocolateByName(name)
    // console.log(chocolateByName, typeof chocolateByName)
    if (chocolateByName === 'error') {
        res.status(404).json('error')
    } else {
        res.status(200).json({ chocolateByName })
    }

})

app.post('/chocolates', async (req, res) => {
    const { name, brandId } = req.body
    const response = await cacaoTrybe.createChocolate({ name, brandId })
    res.status(201).json({ response })
})

app.get('/chocolates/:id', async (req, res) => {
    const { id } = req.params
    const chocolate = await cacaoTrybe.getChocolateById(Number(id))
    res.status(200).json({ chocolate })

})

app.delete('/chocolates/:id', async (req, res) => {
    const { id } = req.params
    const chocolate = await cacaoTrybe.deleteChocolate(Number(id))
    res.status(200).json({ chocolate })

})



module.exports = app;