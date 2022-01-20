const express = require('express')

const router = express.Router()

router.get('/', async (req, res, next) => {
    res.json('getting all cars')
})
router.get('/', async (req, res, next) => {
    res.json(`getting a car by the given id ${req.params.id}`)
})
router.post('/', async (req, res, next) => {
    res.json('post the created car')
})

module.exports = router