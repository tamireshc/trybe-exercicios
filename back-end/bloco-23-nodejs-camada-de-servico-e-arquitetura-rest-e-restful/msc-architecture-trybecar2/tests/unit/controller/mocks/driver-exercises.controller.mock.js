const allDrivers = [
    {
        id: 1,
        name: "Liana Cisneiros"
    },
    {
        id: 2,
        name: "Fábio Frazão"
    },
    {
        id: 3,
        name: "Anastacia Bicalho"
    },
]
const resultCreateDriverWhithcardIds = {
    id: 17,
    name: "Gus",
    cars: [
        {
            id: 1,
            model: "Renault Sandero",
            color: "Branco",
            licensePlate: "NCA-0956"
        },
        {
            id: 2,
            model: "Volkswagen Gol",
            color: "Vermelho",
            licensePlate: "DZG-4376"
        }
    ]
}

module.exports = {
    allDrivers,
    resultCreateDriverWhithcardIds
}