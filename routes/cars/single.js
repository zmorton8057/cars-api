const data = require('../../data.json');

module.exports = (req, res) => {
    const cardId = req.params.carId * 1;
    const car = data.cars.find(c => c.id === cardId)

    res.status(200).json({car})
}