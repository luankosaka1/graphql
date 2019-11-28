const db = require('../config/db')

const novoUsuario = {
    nome: 'Pedro',
    email: 'pedro@email.com',
    senha: '123456'
}

async function exercicio() {
    const { qtde } = await db.select('usuarios')
        .count('* as qtde').first()
    
    // inserir (se a tabela estiver vazia)
    if (qtde === 0) {
        await db('usuarios').insert(novoUsuario)
    }

    // consulta
    let { id } = await db('usuarios')
        .select('id').limit(1).first()
        
    // alterar
    await db('usuarios').where({ id })
        .update({
            nome: 'Pedro Garcia',
            email: 'pedro.garcia@empresa.com.br'
        })
    
    return db('usuarios').where({ id })
}

exercicio()
    .then(u => console.log(u))
    .finally(() => db.destroy())