// STRETCH
const cars = [
    {
        vin:'JF1GH6B60BG810286',
        make: 'subaru',
        model: '2011 impreza',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin:'5J6RM4H75CL059384',
        make: 'honda',
        model: '2012 Cr V',
        mileage: 115000,
        title: 'salvage',

    },
    {
        vin:'JKBVNKD167A013982',
        make: 'Kawasaki',
        model: '2007 Vn1600',
        mileage: 15000,
    }
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}