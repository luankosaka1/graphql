let id = 1
function proximoId() {
    return id++
}


const usuarios = [{
    id: proximoId(),
    nome: 'Luan',
    email: 'luan@email.com',
    idade: 30,
    perfil_id: 1,
    status: 'ATIVO'
},{
    id: proximoId(),
    nome: 'Ayla',
    email: 'ayla@email.com',
    idade: 28,
    perfil_id: 2,
    status: 'INATIVO'
},{
    id: proximoId(),
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

module.exports = { usuarios, perfis, proximoId }