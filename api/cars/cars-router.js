const express = require('express')
const Car = require('./cars-model')
const router = express.Router()
const {
    checkCarId,
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique
} = require('./cars-middleware')

router.get('/', async (req, res, next) => {
    try {
    const cars = await Car.getAll()
        res.json(cars)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', checkCarId, async (req, res, next) => {
    res.json(req.car)
})

router.post('/',
    checkCarPayload,
    checkVinNumberValid,
    checkVinNumberUnique,
    async (req, res, next) => {
    try{
        const newCar = await Car.create(req.body)
        res.json(newCar)
    } catch (err) {
        next(err)
    }
})


module.exports = router