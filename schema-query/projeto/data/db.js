
const usuarios = [{
    id: 1,
    nome: 'Luan',
    email: 'luan@email.com',
    idade: 30,
    perfil_id: 1,
    status: 'ATIVO'
},{
    id: 2,
    nome: 'Ayla',
    email: 'ayla@email.com',
    idade: 28,
    perfil_id: 2,
    status: 'INATIVO'
},{
    id: 1,
    nome: 'Odilma',
    email: 'odilma@email.com',
    idade: 71,
    perfil_id: 2,
    status: 'BLOQUEADO'
}
]

const perfis = [
    {
        id: 1,
        nome: 'Admin'
    }, 
    {
        id: 2,
        nome: 'Editor'
    }
]

module.exports = { usuarios, perfis }