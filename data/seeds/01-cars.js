// STRETCH
const cars = [
    {
        vin:'lllllllllllll',
        make: 'toyota',
    model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin:'hhhhhhhhhhhhh',
        make: 'toyota',
        model: 'corolla',
        mileage: 115000,
        title: 'salvage',

    },
    {
        vin:'mmmmmmmmmmmmm',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}