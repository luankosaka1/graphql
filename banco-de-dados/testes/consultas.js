const db = require('../config/db')

// db('perfis')
//     .map(res => res.name)
//     .then(names => console.log(names))
//     .finally(() => db.destroy())

// db('perfis').select('nome','id')
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

// db.select('nome','id')
//     .from('perfis')
//     .limit(2)
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

db.select('id', 'nome')
    .from('perfis')
    .first()
    // .where({ id: 2 })
    .where('id', '=', 2)
    .then(res => console.log(res))
    .finally(() => db.destroy())