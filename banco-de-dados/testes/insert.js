const db = require('../config/db')

const novoPerfil = {
    nome: 'castrador',
    rotulo: 'Cadastrador'
}

db('perfis').insert(novoPerfil)
    .then(res => console.log(res))
    .finally(() => db.destroy())